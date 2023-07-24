import React from 'react'

import { menu } from '../../app/router'

import { List, ListSubheader, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'


const Menu = () => {
    return (
        <List>
            {menu.filter(menuItems => !menuItems.disabled).map((menuItems, idx) => (
                <React.Fragment key={idx}>
                    {
                        menuItems.name &&
                        <ListSubheader component='div'>{menuItems.name}</ListSubheader>
                    }

                    {menuItems.children.filter(menuItem => !menuItem.disabled).map((menuItem) => (
                        <ListItem key={String(idx) + menuItem.name} disablePadding>
                            <ListItemButton component='a' href={menuItem.to}>
                                <ListItemIcon sx={{ mr: -1 }}>
                                    <menuItem.icon />
                                </ListItemIcon>
                                <ListItemText primary={menuItem.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </React.Fragment>
            ))}
        </List>
    )
}

export default Menu