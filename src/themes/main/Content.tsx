import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'

const Content = () => {
    return (
        <Box mx={3} mt={8} width='100%'>
            <Outlet />
        </Box>
    )
}

export default Content