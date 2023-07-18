import { useEffect, useRef } from 'react';
import { Button, CardActions, CardContent, CardHeader, Stack } from '@mui/material'
import Card from '../common/Card'

import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';

import 'handsontable/dist/handsontable.full.min.css';
import { DetailedSettings } from 'handsontable/plugins/nestedHeaders';
import { ColumnSettings } from 'handsontable/settings';

registerAllModules();

const Test = () => {
    const hotRef = useRef<HotTable>(new HotTable({}));

    useEffect(() => {
        const hot = hotRef.current?.hotInstance;

        if (!hot) return;

        hot.updateSettings({
            cells(row, col) {
                const cellProperties: {
                    readOnly?: boolean;
                } = {};

                if (row === 12 || col === 13) {
                    cellProperties.readOnly = true;
                }

                return cellProperties;
            }
        })
    })

    const onClick = () => {
        console.log(data)
    }

    const rowHeaders = [ ...Array(12).keys() ].map((i) => `${i + 1}월`)
    rowHeaders.push('합계')

    const columns = [
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

    const columns_info: ColumnSettings[] = []
    columns.forEach(column => {
        columns_info.push({
            data: column,
            type: 'numeric',
            numericFormat: {
                pattern: '0,0',
            }
        })
    })

    const colHeaders: (string | DetailedSettings)[][] = [
        [
            { label: '세전 수입 (비과세 포함)', colspan: 4 },
            { label: '수입 중 비과세', colspan: 2 },
            { label: '원천징수', colspan: 2 },
            { label: '공제(4대보험 등)', colspan: 5 },
            { label: '합계', colspan: 1 }
        ],
        [...columns]
    ]

    const data: object[] = []
    for (let i = 0; i < rowHeaders.length; i++) {
        data.push({})
    }

    return (
        <>
            <Stack>
                <Card>
                    <CardHeader title='소득 정보 입력' />
                    <CardContent>
                        <HotTable
                            ref={hotRef}
                            rowHeaders={rowHeaders}
                            colHeaders={true}
                            nestedHeaders={colHeaders}
                            columns={columns_info}
                            data={data}
                            height='auto'

                            licenseKey='non-commercial-and-evaluation'
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