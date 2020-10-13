import React, { useContext } from 'react'
import { Container } from '@material-ui/core'
import { Route, Switch, Redirect } from 'react-router-dom'
import AuthContext from '../../contexts/Auth'
import Login from '../../pages/Login'
import Signup from '../../pages/Signup'

const OutsideLayout = () => {

	const { signed } = useContext(AuthContext)

	if (!!signed) {
		return <></>
	}

	return (
		<Container maxWidth="xs">
			<Switch>
				<Route exact path={'/signup'} component={Signup} />
				<Route exact path={'/login'} component={Login} />
				<Redirect to={'/login'} />
			</Switch>
		</Container>
	)
}

export default OutsideLayout
