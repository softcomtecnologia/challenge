import { makeStyles } from '@material-ui/core/styles'

export const sideBarWidth = 240

export default makeStyles((theme) => ({
	wrapper: {
		display: 'flex',
		minHeight: '100vh'
	},
	content: {
		width: '100%',
		paddingTop: theme.spacing(9),
		padding: theme.spacing(1)
	}
}))
