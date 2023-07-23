import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'

const Content = () => {
    return (
        <Box px={3} my={10} width='100%'>
            <Outlet />
        </Box>
    )
}

export default Content