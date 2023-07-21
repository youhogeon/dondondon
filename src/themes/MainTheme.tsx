import { ThemeProvider } from '@emotion/react'
import { mainTheme } from './theme.ts'
import { useEffect, useState } from 'react'
import Side from './main/Side.tsx'
import { Box, CssBaseline } from '@mui/material'
import TopBar from './main/TopBar.tsx'
import Content from './main/Content.tsx'
import { useLocation } from 'react-router-dom'
import { getPageNamebyPath } from '../router.tsx'

const MainTheme = () => {
    const sideWidth = 240;

    const { pathname } = useLocation()
    const [sideOpen, setSideOpen] = useState(false)
    const [pageTitle, setPageTitle] = useState('')

    const handleSideToggle = () => {
        setSideOpen(!sideOpen)
    }

    useEffect(() => {
        const pageName = getPageNamebyPath(pathname)

        setPageTitle(pageName)
    }, [pathname])

    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <TopBar width={sideWidth} onToggleMenu={handleSideToggle} title={pageTitle} />
            <Box sx={{ display: 'flex' }}>
                <Side width={sideWidth} open={sideOpen} onToggleMenu={handleSideToggle} />
                <Content />
            </Box>
        </ThemeProvider>
    )
}

export default MainTheme