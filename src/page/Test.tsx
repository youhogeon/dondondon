import { Button, CardActions, CardContent, CardHeader, Stack } from '@mui/material'
import Card from '../common/Card'

import HandsonTable, { HandsonTableRef } from '../common/HandsonTable';
import { createRef } from 'react';

const rows = [...Array(12).keys()].map((i) => `${i + 1}월`)
rows.push('합계')

const columns = [
    {
        name: '세전 수입 (비과세 포함)',
        children: [
            '급여', '정기상여', '상여금', '기타급여'
        ]
    },
    {
        name: '수입 중 비과세',
        children: [
            '특허', '기타 (중식비 등)'
        ]
    },
    {
        name: '원천징수',
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

const Test = () => {
    const hotRef = createRef<HandsonTableRef>()

    const onClick = () => {
        alert(JSON.stringify(hotRef.current?.data))
    }

    return (
        <>
            <Stack>
                <Card>
                    <CardHeader title='소득 정보 입력' />
                    <CardContent>
                        <HandsonTable
                            ref={hotRef}
                            columns={columns}
                            rows={rows}
                        />
                    </CardContent>
                    <CardActions>
                        <Button size='small' onClick={onClick}>로그 찍기</Button>
                    </CardActions>
                </Card>
            </Stack>
        </>
    )
}

export default Test