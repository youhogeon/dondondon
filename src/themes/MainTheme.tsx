import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { ThemeProvider } from '@emotion/react'

import Content from './main/Content.tsx'
import Side from './main/Side.tsx'
import TopBar from './main/TopBar.tsx'
import { mainTheme } from './theme.ts'
import { getPageNamebyPath } from '../app/router.tsx'

import { Box, CssBaseline } from '@mui/material'


const MainTheme = () => {
    const sideWidth = 240

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