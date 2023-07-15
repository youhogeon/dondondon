import { ThemeProvider } from '@emotion/react'
import { mainTheme } from './theme.ts'
import { Outlet } from 'react-router-dom'
import Side from './main/Side.tsx'
import { Box, CssBaseline, Toolbar } from '@mui/material'
import TopBar from './main/TopBar.tsx'
import { useState } from 'react'

const MainTheme = () => {
    const sideWidth = 240;

    const [sideOpen, setSideOpen] = useState(false)

    const handleSideToggle = () => {
        setSideOpen(!sideOpen)
    }

    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />

            <TopBar width={sideWidth} onToggleMenu={handleSideToggle} title="testTitle" />

            <Box sx={{ display: 'flex' }}>
                <Side width={sideWidth} open={sideOpen} onToggleMenu={handleSideToggle} />

                <Box>
                    <Toolbar />
                    <Outlet />
                </Box>
            </Box>

        </ThemeProvider>
    )
}

export default MainTheme