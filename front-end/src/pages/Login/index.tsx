import React, { useState, useContext } from 'react'
import { Button, TextField, FormGroup, Link, Backdrop, CircularProgress } from '@material-ui/core'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import AuthContext from '../../contexts/Auth'

import * as yup from 'yup'

import useStyles from './styles'

interface MyFormValues {
	email: string;
	password: string;
}

interface IAuthentication {
	token: string
}

const Login = () => {

	const { login } = useContext(AuthContext)
	const [loading, setLoading] = useState(false)
	const classes = useStyles()
	const initialValues: MyFormValues = { email: '', password: '' }

	const handleSubmit = async (values: MyFormValues, actions) => {
		console.log({ values, actions })
		setLoading(true)
		await login(values.email, values.password)
		setLoading(false)
	}

	const validations = yup.object().shape({
		email: yup.string().email(),
		password: yup.string().min(4).required()
	})

	return (
		<div className={classes.loginWrapper}>
			<Backdrop className={classes.backdrop} open={loading}>
				<CircularProgress color="inherit" />
			</Backdrop>
			<div className={classes.loginTitle}>Login</div>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validations}
			>
				<Form className={classes.loginForm}>
					<FormGroup className={classes.loginFormGroup}>
						<Field
							name="email"
							component={({ field, form, ...props }) => <TextField placeholder="E-mail" type="email" fullWidth {...field} {...props} />}
						/>
						<ErrorMessage name="email" className={classes.errorLoginForm} />
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
			<Link href="/signup" align="center" className={classes.loginSugnupLink}>Signup</Link>
		</div>
	)
}

export default Login
