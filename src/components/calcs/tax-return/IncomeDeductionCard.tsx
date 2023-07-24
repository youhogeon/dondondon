import CardDescription from '../../common/CardDescription'

import { Card, CardHeader, CardContent, TextField, Stack } from '@mui/material'

const IncomeDeductionCard = () => {
    return (
        <Card>
            <CardHeader title='소득 공제' />
            <CardDescription>
                sdfsfs
            </CardDescription>
            <CardContent>
                <Stack spacing={4}>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            label="근로소득 공제"
                            defaultValue="0"
                            InputProps={{
                                readOnly: true,
                            }}
                        />

                        <TextField
                            label="인적 공제"
                            defaultValue="0"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Stack>

                    <Stack direction="row" spacing={2}>
                        <TextField
                            label="연금보험료 공제"
                            defaultValue="0"
                            InputProps={{
                                readOnly: true,
                            }}
                        />

                        <TextField
                            label="건강보험료 공제"
                            defaultValue="0"
                            InputProps={{
                                readOnly: true,
                            }}
                        />

                        <TextField
                            label="장기요양보험료 공제"
                            defaultValue="0"
                            InputProps={{
                                readOnly: true,
                            }}
                        />

                        <TextField
                            label="고용보험료 공제"
                            defaultValue="0"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default IncomeDeductionCard