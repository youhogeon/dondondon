import { Button, CardActions, CardContent, CardHeader, Stack } from "@mui/material"
import Card from "../common/Card"

import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';

import 'handsontable/dist/handsontable.full.min.css';

registerAllModules();

const Test = () => {
    return (
        <>
            <Stack>
                <Card>
                    <CardHeader title="소득 정보 입력" />
                    <CardContent>
                        <HotTable
                            startRows={8}
                            startCols={6}
                            rowHeaders={true}
                            colHeaders={true}
                            height="auto"
                            licenseKey="non-commercial-and-evaluation"
                            afterChange={function (change: any, source: any) {
                                console.log(change, source)
                            }}
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Stack>
        </>
    )
}

export default Test