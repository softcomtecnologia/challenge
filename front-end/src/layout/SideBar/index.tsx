import React, { Fragment } from 'react'

import { Drawer, Divider, Hidden, List, ListItem, ListItemText, ListItemIcon, Link } from '@material-ui/core'

import useStyles from './styles'

type Props = {
    mobileOpen: boolean
    toggleMobileSidebar: () => void
}

const SideBar = ({ mobileOpen, toggleMobileSidebar }: Props) => {
    const classes = useStyles()

    function renderList() {
        return (
            <Fragment>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <Link href="/items" ></Link>
                        </ListItemIcon>
                        <ListItemText primary="Items" />
                    </ListItem>
                </List>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Hidden lgUp>
                <Drawer
                    variant="temporary"
                    anchor="left"
                    classes={{ paper: classes.drawerPaper }}
                    open={mobileOpen}
                    onClose={toggleMobileSidebar}
                    ModalProps={{ keepMounted: true }}
                >
                    {renderList()}
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Drawer open classes={{ paper: classes.drawerPaper }} variant="permanent">
                    {renderList()}
                </Drawer>
            </Hidden>
        </Fragment>
    )
}

export default SideBar
