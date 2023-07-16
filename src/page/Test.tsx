import { Button, CardActions, CardContent, CardHeader, Stack } from '@mui/material'
import Card from '../common/Card'

import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';

import 'handsontable/dist/handsontable.full.min.css';
import { useEffect, useRef } from 'react';

registerAllModules();

const Test = () => {
    const hotRef = useRef();

    useEffect(() => {
        // const hot = hotRef.current.hotInstance;


    })

    const rowHeaders = [ ...Array(12).keys() ].map((i) => `${i + 1}월`)
    rowHeaders.push('합계')

    const colHeaders = [
        [
            { label: '세전 수입 (비과세 포함)', colspan: 4 },
            { label: '수입 중 비과세', colspan: 2 },
            { label: '원천징수', colspan: 2 },
            { label: '공제(4대보험 등)', colspan: 5 },
            { label: '합계' }
        ],
        [
            '급여',
            '정기상여',
            '상여금',
            '기타급여',
            '특허',
            '기타 (중식비 등)',
            '소득세',
            '지방소득세',
            '국민건강보험',
            '장기요양보험',
            '국민연금',
            '고용보험료',
            '기타공제',
            '실질 수령액'
        ]
    ]

    return (
        <>
            <Stack>
                <Card>
                    <CardHeader title='소득 정보 입력' />
                    <CardContent>
                        <HotTable
                            ref={hotRef}
                            startRows={13}
                            startCols={14}
                            rowHeaders={rowHeaders}
                            colHeaders={true}
                            nestedHeaders={colHeaders}
                            type='numeric'

                            height='auto'
                            width='100%'
                            licenseKey='non-commercial-and-evaluation'
                            afterChange={function (change: string, source: string) {
                                // eslint-disable-next-line no-console
                                console.log(change, source)
                            }}
                        />
                    </CardContent>
                    <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                    </CardActions>
                </Card>
            </Stack>
        </>
    )
}

export default Test