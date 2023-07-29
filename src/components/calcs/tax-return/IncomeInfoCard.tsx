import { createRef, useEffect, useRef, useState } from 'react'

import Handsontable from 'handsontable'
import { CellChange } from 'handsontable/common'
import { numericRenderer } from 'handsontable/renderers'

import { getTax } from './utils'
import { checkWithWildcard, floorTo10, floorTo1000 } from '../../../utils/string'
import Card from '../../common/Card'
import CardDescription from '../../common/CardDescription'
import HandsonTable, { HandsonTableRef } from '../../common/HandsonTable'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box, Button, CardContent, CardHeader, Grow, Link, Tab, Tabs } from '@mui/material'

const rows = [...Array(12).keys()].map((i) => `${i + 1}월`)
rows.push('합계')

const columns = [
    {
        name: '세전 근로소득 (비과세 포함)',
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
            { name: '고용보험', key: '공제.고용보험' },
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

const isEmpty = (hot: Handsontable, row: number, columnKey: string) => {
    const idx = typeof(columnKey) === 'number' ? columnKey : getColIdx(columnKey)
    if (idx === -1) return true

    return (hot.getDataAtCell(row, idx) === null || hot.getDataAtCell(row, idx) === '')
}

const OUTCOME_COL_START = getColIdx('원천징수.소득세')

const forceSum = (a: string, b: string) => ((parseInt(a) || 0) + (parseInt(b) || 0))

const IncomeInfoCard = () => {
    const hotRef = createRef<HandsonTableRef>()
    const [tableData, setTableData] = useState<object[]>([])
    const [mode, setMode] = useState('detail')
    const [showDescription, setShowDescription] = useState(false)
    const editedByUser = useRef<string[]>([])

    const checkEditedByUser = (row: number, col: string) => {
        if (!hotRef.current?.hot) return false

        const key = String(row) + col

        if (isEmpty(hotRef.current.hot, row, col)) {
            editedByUser.current = editedByUser.current.filter((v) => v !== key)
            return false
        }

        return editedByUser.current.indexOf(key) !== -1
    }

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

        calcAndSetSum()
    }, [])

    const calcAndSetSum = () => {
        const hot = hotRef.current?.hot
        if (!hot) return

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
            if (!checkWithWildcard('수입.*', col as string)) {
                editedByUser.current.push(String(row) + String(col))
                return
            }

            const 수입 = getData(hot, row, '수입.*')
            
            if (!checkEditedByUser(row, '비과세.식대')) {
                setData(hot, row, '비과세.식대', Math.min(수입, 200000))
            }
            
            const tax = getTax(수입, 1) // TODO: 가족 수에 따라 바뀌어야 함
            if (!checkEditedByUser(row, '원천징수.소득세')) {
                setData(hot, row, '원천징수.소득세', tax)
            }

            if (!checkEditedByUser(row, '원천징수.지방소득세')) {
                setData(hot, row, '원천징수.지방소득세', floorTo10(tax * 0.1))
            }
            
            let 건보료 = floorTo10(floorTo1000(수입) * 0.0709)
            건보료 = Math.min(건보료, 7_822_560)
            건보료 = Math.max(건보료, 19_780)

            if (!checkEditedByUser(row, '공제.국민건강보험')) {
                setData(hot, row, '공제.국민건강보험', floorTo10(건보료 / 2))
            }

            if (!checkEditedByUser(row, '공제.장기요양보험')) {
                const value = floorTo10(floorTo10(건보료 * 0.009082 / 0.0709) / 2)

                setData(hot, row, '공제.장기요양보험', value)
            }

            if (!checkEditedByUser(row, '공제.국민연금')) {
                let value = floorTo10(floorTo1000(수입) * 0.045)
                value = Math.min(value, 265_500)
                value = Math.max(value, 16_650)

                setData(hot, row, '공제.국민연금', value)
            }

            if (!checkEditedByUser(row, '공제.고용보험')) {
                setData(hot, row, '공제.고용보험', floorTo10(floorTo1000(수입) * 0.009))
            }
        })

        setTimeout(() => {
            calcAndSetSum()
        }, 10)

        setTableData(hotRef.current.data)
    }

    return (
        <Card>
            <CardHeader title='소득 정보 입력' />
            <CardDescription>소득을 입력하면 나머지 항목이 자동 계산됩니다.</CardDescription>
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
                        {showDescription ? <KeyboardArrowUpIcon aria-label="닫기" /> : <KeyboardArrowDownIcon aria-label="열기" />}
                        실제 공제내역과 자동 계산값이 다른 이유
                    </Button>

                    <Grow
                        in={showDescription}
                        style={{ transformOrigin: '0 0 0' }}
                    >
                        <Box sx={{ display: showDescription ? 'block' : 'none' }}>
                            자동 계산된 항목은 참고용으로, 실제 공제액과 차이가 있을 수 있습니다.
                            <ul>
                                <li>2023년 1월부터 <Link href="https://call.nts.go.kr/call/qna/selectQnaInfo.do?mi=1318&ctgId=CTG11918" target="_blank">식대 비과세</Link> 한도가 20만원(기존 10만원)으로 변경되어 20만원이 자동 입력되나, 사업장/근로형태 등에 따라 식대가 다를 수 있음</li>
                                <li>실제 국민연금/건강보험료는 상반기에는 전전년도 소득, 하반기에는 전년도 소득을 기준으로 산출되지만, 본 계산기는 해당월 소득을 기준으로 산출함.<br />
                                (참고 : 올해 소득과 전년/전전년도 소득의 차이로 인한 건강보험료 부족분은 내년 4월에 정산함.)</li>
                                <li>2023.02.28부로 개정된 근로소득 간이세액표를 기준으로 기납부세액(원천징수 소득세/지방소득세)을 계산하였음. 따라서 1~2월 기납부세액과 계산된 값에 차이가 있을 수 있음.</li>
                            </ul>
                        </Box>
                    </Grow>
                </Box>
            </CardContent>
        </Card>
    )
}

export default IncomeInfoCard