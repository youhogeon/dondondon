import Card from '../../common/Card'

import { CardHeader, CardContent, TextField } from '@mui/material'


const BasicInfoCard = () => {
    return (
        <Card>
            <CardHeader title='기본 정보 입력' />
            <CardContent>
                <TextField id="outlined-basic" label="연령" variant="outlined" />
            </CardContent>
        </Card>
    )
}

export default BasicInfoCard