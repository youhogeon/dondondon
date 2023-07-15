import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material'


interface SideProps {
    width: number;
    open: boolean;
    onToggleMenu: () => void;
}

const Side = (props: SideProps) => {
    const { APP_TITLE, APP_SUBTITLE } = import.meta.env

    const drawer = (
        <>
            <Box textAlign="center" mt={1} mb={2}>
                <Typography fontFamily="'Grandiflora One'" variant="h4" sx={{
                    fontWeight: 'bold',
                    letterSpacing: '30px',
                    marginRight: '-30px'
                }}>
                    {APP_TITLE}
                </Typography>

                <Typography mt={1} sx={{ fontSize: '14px', letterSpacing: '4px', marginRight: '-4px' }}>
                    {APP_SUBTITLE}
                </Typography>
            </Box>
    
            <Divider />

            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
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