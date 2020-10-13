import React, { useState, useEffect, useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AuthContext from '../../contexts/Auth'
import AppBar from '../AppBar'
import SideBar from '../SideBar'
import theme from '../../utils/theme'

import Items from '../../pages/Items'

import useStyles from './styles'


const InsideLayout = () => {
    const classes = useStyles()
    const { signed } = useContext(AuthContext)
    const [sidebarMobileOpen, setMobileSidebarOpen] = useState(false)

    function toggleMobileSidebar() {
        setMobileSidebarOpen(!sidebarMobileOpen)
    }

    function onWindowResize() {
        if (window.innerWidth >= theme.breakpoints.values.md) {
            setMobileSidebarOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', onWindowResize)
        return () => window.removeEventListener('resize', onWindowResize)
    }, [])

    if (!signed) {
        return <></>
    }

    return (
        <div className={classes.wrapper}>
            <AppBar toggleMobileSidebar={toggleMobileSidebar} />
            <SideBar mobileOpen={sidebarMobileOpen} toggleMobileSidebar={toggleMobileSidebar} />
            <div className={classes.content}>
                <Switch>

                    <Route exact path={'/items'} component={Items} />
                    <Redirect to={'/items'} />

                </Switch>
            </div>
        </div>
    )
}

export default InsideLayout
