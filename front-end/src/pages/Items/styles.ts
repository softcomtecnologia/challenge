import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	table: {
		minWidth: 750,
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},
	ModalForm: {
		marginTop: theme.spacing(1),
		width: '100%'
	},
	ModalFormGroup: {
		marginTop: theme.spacing(2)
	},
	ModalFormSubmit: {
		margin: theme.spacing(3, 0, 2)
	},
}))
