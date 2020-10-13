import { makeStyles } from '@material-ui/core/styles'
import { red, grey } from '@material-ui/core/colors'

export default makeStyles((theme) => ({
	loginWrapper: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		marginTop: theme.spacing(8)
	},
	errorLoginForm: {
		textAlign: 'center',
		color: red[100]
	},
	loginTitle: {
		alignItems: 'center',
		fontSize: 40,
		display: 'flex',
		flexDirection: 'column',
		marginTop: theme.spacing(5)
	},
	loginForm: {
		marginTop: theme.spacing(1),
		width: '100%'
	},
	loginFormGroup: {
		marginTop: theme.spacing(2)
	},
	loginSubmit: {
		margin: theme.spacing(3, 0, 2)
	},
	loginSugnupLink: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		color: grey['600']
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}))
