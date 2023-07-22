import { createRef, useEffect, useState } from 'react'

import Handsontable from 'handsontable'
import { CellChange } from 'handsontable/common'
import { numericRenderer } from 'handsontable/renderers'

import { checkWithWildcard } from '../../../utils/string'
import Card from '../../common/Card'
import HandsonTable, { HandsonTableRef } from '../../common/HandsonTable'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box, Button, CardContent, CardHeader, Grow, Tab, Tabs } from '@mui/material'


const rows = [...Array(12).keys()].map((i) => `${i + 1}월`)
rows.push('합계')

const columns = [
    {
        name: '세전 수입 (비과세 포함)',
        children: [
            { name: '급여', key: '수입.급여' },
            { name: '상여 등', key: '수입.기타' },
        ]
    },
    {
        name: '수입 중 비과세',
        children: [
            { name: '식대', key: '비과세.식대' },
            { name: '기타 비과세', key: '비과세.기타' },
        ]
    },
    {
        name: '기납부세액 (원천징수)',
        children: [
            { name: '소득세', key: '원천징수.소득세' },
            { name: '지방소득세', key: '원천징수.지방소득세' },
        ]
    },
    {
        name: '공제(4대보험 등)',
        children: [
            { name: '국민건강보험', key: '공제.국민건강보험' },
            { name: '장기요양보험', key: '공제.장기요양보험' },
            { name: '국민연금', key: '공제.국민연금' },
            { name: '고용보험료', key: '공제.고용보험료' },
            { name: '기타공제', key: '공제.기타' },
        ]
    },
    {
        name: '합계',
        children: [
            { name: '실질 수령액', key: '합계.실수령' },
        ]
    }
]

const rowLength = rows.length
const colLength = columns.reduce((n, { children }) => n + children.length, 0)

const getColIdx = (key: string) => {
    let idx = 0

    for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < columns[i].children.length; j++) {
            if (columns[i].children[j].key === key) return idx
            idx++
        }
    }

    return -1
}

const getData = (hot: Handsontable, row: number, columnKey: string) => {
    let sum = 0
    let idx = 0

    columns.forEach(({ children }) => {
        children.forEach(({ key: k }) => {
            if (checkWithWildcard(columnKey, k)) {
                sum += (parseInt(hot.getDataAtCell(row, idx)) || 0)
            }
            idx++
        })
    })

    return sum
}

const setData = (hot: Handsontable, row: number, columnKey: string | number, value: number) => {
    const idx = typeof(columnKey) === 'number' ? columnKey : getColIdx(columnKey)
    if (idx === -1) return

    hot.setDataAtCell(row, idx, value, 'loadData')
}

const OUTCOME_COL_START = getColIdx('원천징수.소득세')

const forceSum = (a: string, b: string) => ((parseInt(a) || 0) + (parseInt(b) || 0))

const calcAndSetSum = (hot: Handsontable) => {
    let totalSum = 0

    for (let i = 0; i < rowLength - 1; i++) {
        const outcome = hot.getDataAtRow(i).slice(OUTCOME_COL_START, -1).reduce(forceSum, 0)
        const sum = getData(hot, i, '수입.*') - outcome

        totalSum += sum

        setData(hot, i, colLength - 1, sum)
    }

    for (let i = 0; i < colLength; i++) {
        const sum = hot.getDataAtCol(i).slice(0, -1).reduce(forceSum, 0)

        setData(hot, rowLength - 1, i, sum)
    }

    setData(hot, rowLength - 1, colLength - 1, totalSum)
}

const IncomeInfoCard = () => {
    const hotRef = createRef<HandsonTableRef>()
    const [tableData, setTableData] = useState<object[]>([])
    const [mode, setMode] = useState('detail')
    const [showDescription, setShowDescription] = useState(true)

    // Table 설정 (width, readonly 등)
    useEffect(() => {
        hotRef.current?.hot?.updateSettings({
            cells(row, col) {
                const readOnly = row === rowLength - 1 || col === colLength - 1

                return {
                    readOnly,
                    renderer: (...args) => {
                        const td = args[1], col = args[3]

                        numericRenderer.apply(this, args)

                        if (readOnly) {
                            td.style.cursor = 'not-allowed'
                            td.style.backgroundColor = '#FAFAFA'
                        }

                        if (col === 0 || col === 1 || col === 11) td.style.minWidth = '100px'
                    },
                }
            }
        })

        onChange([])
    }, [])

    const onClick = () => {
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(tableData[rowLength - 1]))
    }

    const onChange = (changes: CellChange[]) => {
        const hot = hotRef.current?.hot
        if (!hot) return

        // validate
        for (let i = 0; i < rowLength - 1; i++) {
            const 식대 = getData(hot, i, '비과세.식대')
            if (식대 && 식대 > 200000) setData(hot, i, '비과세.식대', 200000)
        }

        //auto calc
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        changes.forEach(([row, col, _oldValue, newValue]) => {
            if (!newValue) return
            if (!checkWithWildcard('수입.*', col as string)) return

            const 수입 = getData(hot, row, '수입.*')
            
            const 식대Idx = getColIdx('비과세.식대')
            if (hot.getDataAtCell(row, 식대Idx) === null || hot.getDataAtCell(row, 식대Idx) === '') {
                setData(hot, row, '비과세.식대', Math.min(newValue, 200000))
            }
        })

        calcAndSetSum(hot) // TODO: 싱크 문제 해결

        setTableData(hotRef.current.data)
    }

    return (
        <Card>
            <CardHeader title='소득 정보 입력' />
            <CardContent sx={{ paddingTop: 0 }}>
                <Tabs value={mode} sx={{ marginBottom: 2 }} onChange={(_event, value) => { setMode(value) }} centered>
                    <Tab value="easy" label="간편 입력" />
                    <Tab value="detail" label="상세 입력" />
                </Tabs>

                <HandsonTable
                    ref={hotRef}
                    columns={columns}
                    rows={rows}
                    onChange={onChange}
                    fullWidth
                />

                <Box mt={2}>
                    <Button size="small" onClick={() => { setShowDescription(!showDescription) }}>
                        {showDescription ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        {showDescription ? '설명 닫기' : '자세한 설명 보기'}
                    </Button>
                    <Button size='small' onClick={onClick}>
                        로그 찍기
                    </Button>

                    <Grow
                        in={showDescription}
                        style={{ transformOrigin: '0 0 0' }}
                    >
                        <Box sx={{ display: showDescription ? 'block' : 'none' }}>
                            asfadf<br />sdfasfas
                        </Box>
                    </Grow>
                </Box>
            </CardContent>
        </Card>
    )
}

export default IncomeInfoCard