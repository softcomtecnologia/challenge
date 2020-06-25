import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: 200,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	}
}))
