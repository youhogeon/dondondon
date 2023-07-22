import { createRef, useEffect, useState } from 'react'

import Handsontable from 'handsontable'
import { numericRenderer } from 'handsontable/renderers'

import Card from '../../common/Card'
import HandsonTable, { HandsonTableRef } from '../../common/HandsonTable'

import { Button, CardActions, CardContent, CardHeader } from '@mui/material'


const rows = [...Array(12).keys()].map((i) => `${i + 1}월`)
rows.push('합계')

const columns = [
    {
        name: '수입 (비과세 포함)',
        children: [
            { name: '세전 총 급여', key: '수입.급여' },
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

const OUTCOME_COL_START = 3

const calcAndSetSum = (hot: Handsontable) => {
    let totalSum = 0

    for (let i = 0; i < rowLength - 1; i++) {
        const outcome = hot.getDataAtRow(i).slice(OUTCOME_COL_START, -1).reduce((a, b) => a + b, 0)
        const sum = hot.getDataAtCell(i, 0) - outcome

        totalSum += sum

        hot.setDataAtCell(i, colLength - 1, sum, 'loadData')
    }

    for (let i = 0; i < colLength; i++) {
        const sum = hot.getDataAtCol(i).slice(0, -1).reduce((a, b) => a + b, 0)

        hot.setDataAtCell(rowLength - 1, i, sum, 'loadData')
    }

    hot.setDataAtCell(rowLength - 1, colLength - 1, totalSum, 'loadData')

}

const IncomeInfoCard = () => {
    const hotRef = createRef<HandsonTableRef>()
    const [data, setData] = useState<object[]>([])

    // Table 설정 (width, readonly 등)
    useEffect(() => {
        hotRef.current?.hot?.updateSettings({
            cells(row, col) {
                const readOnly = row === rowLength - 1 || col === colLength - 1

                return {
                    readOnly,
                    allowInvalid: false,
                    renderer: (...args) => {
                        const td = args[1], col = args[3]
        
                        numericRenderer.apply(this, args)

                        if (readOnly) {
                            td.style.cursor = 'not-allowed'
                            td.style.backgroundColor = '#FAFAFA'
                        }

                        if (col === 0 || col === 10) td.style.minWidth = '150px'
                    },
                }
            }
        })

        onChange()
    }, [])

    const onClick = () => {
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(data[rowLength - 1]))
    }

    const onChange = () => {
        const hot = hotRef.current?.hot
        if (!hot) return

        calcAndSetSum(hot)
        setData(hotRef.current.data)
    }

    return (
        <Card>
            <CardHeader title='소득 정보 입력' />
            <CardContent>
                <HandsonTable
                    ref={hotRef}
                    columns={columns}
                    rows={rows}
                    onChange={onChange}
                    fullWidth
                />
            </CardContent>
            <CardActions>
                <Button size='small' onClick={onClick}>로그 찍기</Button>
            </CardActions>
        </Card>
    )
}

export default IncomeInfoCard