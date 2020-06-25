import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField, FormGroup, Backdrop, CircularProgress, Link } from '@material-ui/core'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import AuthMiddleware from '../../middlewares/auth'
import * as yup from 'yup'

import useStyles from './styles'
import { toast } from 'react-toastify'

interface MyFormValues {
	name: string;
	email: string;
	password: string;
	cnpj: string;
}

interface IAuthentication {
	token: string
}

const Signup = () => {

	const history = useHistory()
	const [loading, setLoading] = useState(false)
	const classes = useStyles()
	const initialValues: MyFormValues = { name: '', email: '', password: '', cnpj: '' }

	const handleSubmit = async (values: MyFormValues, actions) => {

		setLoading(true)

		try {
			let response = await AuthMiddleware.signup(values)

			if (response.status === 200) {
				let user = response.data
				toast.success("User created")
				setLoading(false)
				history.push('/login')
			} else {
				toast.error("Something went wrong")
				setLoading(false)
			}

		} catch (error) {
			toast.error("Something went wrong")
			setLoading(false)
		}

	}

	const validations = yup.object().shape({
		name: yup.string().required(),
		email: yup.string().email(),
		password: yup.string().min(4).required()
	})

	return (
		<div className={classes.loginWrapper}>
			<Backdrop className={classes.backdrop} open={loading}>
				<CircularProgress color="inherit" />
			</Backdrop>
			<div className={classes.loginTitle}>Signup</div>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validations}
			>
				<Form className={classes.loginForm}>
					<FormGroup className={classes.loginFormGroup}>
						<Field
							name="name"
							component={({ field, form, ...props }) => <TextField placeholder="Name" type="text" fullWidth {...field} {...props} />}
						/>
						<ErrorMessage name="name" className={classes.errorLoginForm} />
					</FormGroup>
					<FormGroup className={classes.loginFormGroup}>
						<Field
							name="email"
							component={({ field, form, ...props }) => <TextField placeholder="E-mail" type="email" fullWidth {...field} {...props} />}
						/>
						<ErrorMessage name="email" className={classes.errorLoginForm} />
					</FormGroup>
					<FormGroup className={classes.loginFormGroup}>
						<Field
							name="cnpj"
							component={({ field, form, ...props }) => <TextField placeholder="cnpj" type="text" fullWidth {...field} {...props} />}
						/>
						<ErrorMessage name="cnpj" className={classes.errorLoginForm} />
					</FormGroup>
					<FormGroup className={classes.loginFormGroup}>
						<Field
							name="password"
							component={({ field, form, ...props }) => <TextField placeholder="Password" type="password" fullWidth {...field} {...props} />}
						/>
						<ErrorMessage name="password" className={classes.errorLoginForm} />
					</FormGroup>
					<Button
						fullWidth
						className={classes.loginSubmit}
						type="submit"
						disabled={loading}
						variant="contained"
						color="primary"
						data-testid="login-button"
					>
						Enter
        				</Button>
				</Form>
			</Formik>
			<Link href="/login" align="center" className={classes.SignupLoginLink}>Login</Link>
		</div>
	)
}

export default Signup
