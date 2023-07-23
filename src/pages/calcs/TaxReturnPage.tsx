import BasicInfoCard from '../../components/calcs/tax-return/BasicInfoCard'
import IncomeDeductionCard from '../../components/calcs/tax-return/IncomeDeductionCard'
import IncomeInfoCard from '../../components/calcs/tax-return/IncomeInfoCard'

import { Stack } from '@mui/material'

const TaxReturnPage = () => {
    return (
        <Stack spacing={4}>
            <BasicInfoCard />
            <IncomeInfoCard />
            <IncomeDeductionCard />
        </Stack>
    )
}

export default TaxReturnPage