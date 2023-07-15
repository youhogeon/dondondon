import { Box, Toolbar } from "@mui/material"
import { Outlet } from "react-router-dom"

const Content = () => {
    return (
        <Box>
            <Toolbar />
            <Outlet />
        </Box>
    )
}

export default Content