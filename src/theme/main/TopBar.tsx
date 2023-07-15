import { useState } from 'react'

import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

interface TopBarProps {
    width: number;
    title: string;
    onToggleMenu: () => void;
}

const TopBar = (props: TopBarProps) => {
    return (
        <Box
            position="fixed"
            sx={{
                width: { md: `calc(100% - ${props.width}px)` },
                backdropFilter: 'blur(6px)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                ml: { md: `${props.width}px` },
                px: 2
            }}
        >
            <Stack
                direction="row"
                sx={{
                    height: '50px',
                    alignItems: 'center',
                }}
                spacing={1}
            >
                <IconButton
                    onClick={props.onToggleMenu}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="Toggle Menu"
                    sx={{ display: { md: "none" } }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
            </Stack>
        </Box>
    )
}

export default TopBar