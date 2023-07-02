import { ThemeProvider } from '@emotion/react'
import { mainTheme } from './theme.ts'
import { Outlet } from 'react-router-dom'

const MainTheme = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Outlet />
    </ThemeProvider>
  )
}

export default MainTheme
  