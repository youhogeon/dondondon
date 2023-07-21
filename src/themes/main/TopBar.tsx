import BootstrapTooltip from '../../components/common/BootstrapTooltip'

import MenuIcon from '@mui/icons-material/Menu'
import SaveIcon from '@mui/icons-material/Save'
import { Box, IconButton, Stack, Typography } from '@mui/material'
interface TopBarProps {
    width: number;
    title: string;
    onToggleMenu: () => void;
}

const TopBar = (props: TopBarProps) => {
    return (
        <Box
            position='fixed'
            sx={{
                width: { xs: '100%', md: `calc(100% - ${props.width}px)` },
                backdropFilter: 'blur(6px)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                ml: { md: `${props.width}px` },
            }}
            zIndex={999}
            display='flex'
            px={2}
            justifyContent='space-between'
        >
            <Box display='flex' alignItems='center'>
                <IconButton
                    onClick={props.onToggleMenu}
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='Toggle Menu'
                    sx={{ display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant='h6' component='div' ml={1} mt={-0.5}>
                    {props.title}
                </Typography>
            </Box>

            <Stack direction='row' spacing={1}>
                <BootstrapTooltip title='저장 및 URL 생성'>
                    <IconButton
                        size='large'
                        color='inherit'
                        aria-label='저장 및 URL 생성'
                    >
                        <SaveIcon />
                    </IconButton>
                </BootstrapTooltip>
            </Stack>
        </Box>
    )
}

export default TopBar