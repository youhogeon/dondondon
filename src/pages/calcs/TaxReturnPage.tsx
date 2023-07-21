import BasicInfoCard from '../../components/calcs/tax-return/BasicInfoCard'
import IncomeInfoCard from '../../components/calcs/tax-return/IncomeInfoCard'

import { Stack } from '@mui/material'

const TaxReturnPage = () => {
    return (
        <Stack spacing={4}>
            <BasicInfoCard />
            <IncomeInfoCard />
        </Stack>
    )
}

export default TaxReturnPage