import Card from '../../common/Card'

import { CardHeader, CardContent } from '@mui/material'


const BasicInfoCard = () => {
    return (
        <Card>
            <CardHeader title='기본 정보 입력' />
            <CardContent>
                연령, 부양가족 등
            </CardContent>
        </Card>
    )
}

export default BasicInfoCard