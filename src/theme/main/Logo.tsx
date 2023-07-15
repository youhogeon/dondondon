import { Box, Link, Typography } from '@mui/material'

const Logo = () => {
    const { APP_TITLE, APP_SUBTITLE } = import.meta.env
    
    return (
        <Box textAlign='center' mt={1} mb={2}>
            <Link href='/' underline='none' color='inherit'>
                <Typography fontFamily='Grandiflora One' variant='h4' ml={4} sx={{
                    fontWeight: 'bold',
                    letterSpacing: '32px',
                }}>
                    {APP_TITLE}
                </Typography>

                <Typography mt={1} ml={0.5} sx={{ fontSize: '14px', letterSpacing: '4px' }}>
                    {APP_SUBTITLE}
                </Typography>
            </Link>
        </Box>
    )
}

export default Logo