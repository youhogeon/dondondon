import { Box } from '@mui/material'

const CardDescription = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ pl: 2, ml: 2, mb:2, py:0.5, borderLeft: '3px solid #CCC' }}>
            {children}
        </Box>
    )
}

export default CardDescription