import { Box, Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

import menu from '../../menu.ts'

interface SideProps {
    width: number;
    open: boolean;
    onToggleMenu: () => void;
}

const Side = (props: SideProps) => {
    const { APP_TITLE, APP_SUBTITLE } = import.meta.env

    const navigate = useNavigate();

    const drawer = (
        <>
            <Box textAlign="center" mt={1} mb={2}>
                <Link href="/" underline="none" color="inherit">
                    <Typography fontFamily="'Grandiflora One'" variant="h4" ml={4} sx={{
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
    
            <Divider />

            <List>
                {menu.filter(menuItem => !menuItem.disabled).map((menuItem) => (
                <ListItem key={menuItem.name} disablePadding>
                    <ListItemButton onClick={() => { navigate(menuItem.to) }}>
                        <ListItemIcon sx={{ mr: -1 }}>
                            <menuItem.icon />
                        </ListItemIcon>
                        <ListItemText primary={menuItem.name} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </>
    )

    return (
        <Box
            component="nav"
            sx={{ width: { md: props.width }, flexShrink: { md: 0 } }}
            aria-label="Navigation"
        >
            <Drawer
                variant="temporary"
                open={props.open}
                onClose={props.onToggleMenu}
                ModalProps={{
                    keepMounted: true
                }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: props.width
                    }
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", md: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: props.width
                    }
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    )
}

export default Side