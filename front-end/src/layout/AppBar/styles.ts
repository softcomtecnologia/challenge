import { makeStyles } from '@material-ui/core/styles'

import { sideBarWidth } from '../styles'

export default makeStyles((theme) => ({
	wrapper: {
		[theme.breakpoints.up('lg')]: {
			marginLeft: sideBarWidth,
			width: `calc(100% - ${sideBarWidth}px)`
		}
	},
	toolbar: {
		paddingLeft: 0,
		paddingRight: 0
	},
	toolbarLeft: {
		alignItems: 'center',
		display: 'flex',
		flex: 1
	}
}))
