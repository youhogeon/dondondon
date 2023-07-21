import { createRef, useEffect } from 'react'

import { textRenderer } from 'handsontable/renderers'

import Card from '../../common/Card'
import HandsonTable, { HandsonTableRef } from '../../common/HandsonTable'

import { Button, CardActions, CardContent, CardHeader } from '@mui/material'


const rows = [...Array(12).keys()].map((i) => `${i + 1}월`)
rows.push('합계')

const columns = [
    {
        name: '수입 (비과세 포함)',
        children: [
            '세전 총 급여'
        ]
    },
    {
        name: '수입 중 비과세',
        children: [
            '식대', '기타 비과세'
        ]
    },
    {
        name: '기납부세액 (원천징수)',
        children: [
            '소득세', '지방소득세'
        ]
    },
    {
        name: '공제(4대보험 등)',
        children: [
            '국민건강보험', '장기요양보험', '국민연금', '고용보험료', '기타공제'
        ]
    },
    {
        name: '합계',
        children: [
            '실질 수령액'
        ]
    }
]

const rowLength = rows.length
const colLength = columns.reduce((n, { children }) => n + children.length, 0)

const IncomeInfoCard = () => {
    const hotRef = createRef<HandsonTableRef>()

    useEffect(() => {
        hotRef.current?.hot?.updateSettings({
            cells(row, col) {
                const readOnly = row === rowLength - 1 || col === colLength - 1

                return {
                    readOnly,
                    allowInvalid: false,
                    renderer: (...args) => {
                        const td = args[1], col = args[3]
        
                        textRenderer.apply(this, args)

                        if (readOnly) {
                            td.style.cursor = 'not-allowed'
                            td.style.backgroundColor = '#FAFAFA'
                        }

                        if (col === 0 || col === 10) td.style.minWidth = '150px'
                    },
                }
            }
        })
    }, [])

    const onClick = () => {
        alert(JSON.stringify(hotRef.current?.data))
    }

    return (
        <Card>
            <CardHeader title='소득 정보 입력' />
            <CardContent>
                <HandsonTable
                    ref={hotRef}
                    columns={columns}
                    rows={rows}
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