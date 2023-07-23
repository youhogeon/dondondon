import { Card, CardHeader, CardContent, TextField } from '@mui/material'

const IncomeDeductionCard = () => {
    return (
        <Card>
            <CardHeader title='소득 공제' />
            <CardContent>
                <TextField
                    label="인적 공제"
                    defaultValue="0"
                    helperText="부양가족에 따른 공제"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </CardContent>
        </Card>
    )
}

export default IncomeDeductionCard