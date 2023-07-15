import { Box, Divider, Drawer } from "@mui/material"

import Menu from "./Menu.tsx";
import Logo from "./Logo.tsx";

interface SideProps {
    width: number;
    open: boolean;
    onToggleMenu: () => void;
}

const Side = (props: SideProps) => {

    const drawer = (
        <>
            <Logo />
            <Divider />
            <Menu />
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