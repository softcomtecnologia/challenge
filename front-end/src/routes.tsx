import React from 'react';

import { Router } from 'react-router-dom';
import history from './utils/history';

import InsideLayout from './layout/InsideLayout'
import OutsideLayout from './layout/OutsideLayout'

const Routes = () => {

	return (
		<>
			<Router history={history}>
				<OutsideLayout />
				<InsideLayout />
			</Router>
		</>
	);
};

export default Routes;
