import { ThemeProvider } from '@emotion/react'
import { mainTheme } from './theme.ts'
import { useState } from 'react'
import Side from './main/Side.tsx'
import { Box, CssBaseline } from '@mui/material'
import TopBar from './main/TopBar.tsx'
import Content from './main/Content.tsx'

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
                <Content />
            </Box>
        </ThemeProvider>
    )
}

export default MainTheme