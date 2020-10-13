import React, { useState, useRef, useContext } from 'react'
import AuthContext from '../../contexts/Auth'
import { useHistory } from "react-router-dom";
import {
    AppBar as MuiAppBar,
    Button,
    Container,
    Hidden,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
    IconButton
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import useStyles from './styles'

type Props = {
    toggleMobileSidebar: () => void
}

const AppBar = ({ toggleMobileSidebar }: Props) => {
    let history = useHistory()
    const { logout } = useContext(AuthContext)
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const menuAnchorRef = useRef(null)

    function openMenu() {
        setOpen(true)
    }

    function closeMenu() {
        setOpen(false)
    }

    function onLogout() {
        closeMenu()
        logout()
    }

    return (
        <MuiAppBar className={classes.wrapper} position="absolute">
            <Container component="div">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.toolbarLeft}>
                        <Hidden lgUp>
                            <IconButton color="inherit" onClick={toggleMobileSidebar}>

                            </IconButton>
                        </Hidden>
                        <Typography component="h1" variant="h6">

                        </Typography>
                    </div>
                    <Button ref={menuAnchorRef} color="inherit" onClick={openMenu}>
                        <MenuIcon></MenuIcon>
                    </Button>
                </Toolbar>
                <Menu keepMounted open={!!open} anchorEl={menuAnchorRef.current} onClose={closeMenu}>
                    <MenuItem onClick={onLogout}>Logout</MenuItem>
                </Menu>
            </Container>
        </MuiAppBar>
    )
}

export default AppBar
