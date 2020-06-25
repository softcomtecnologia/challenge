
import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@callstack/async-storage'
import AuthMiddleware from '../middlewares/auth'
import { toast } from 'react-toastify'
import useStyles from './styles'
import Request from '../middlewares/request'
import { CircularProgress, Backdrop } from '@material-ui/core'

interface AuthContextData {
	signed: boolean;
	token: string | null;
	user: object;
	login(credential: string, password: string): Promise<void>;
	logout(): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
	const classes = useStyles()
	const [token, setToken] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function load() {
			const storageToken = await AsyncStorage.getItem('@softcomChallenge')

			if (storageToken) {
				Request.defaults.headers['Authorization'] = storageToken
				setToken(storageToken)
			}
			setLoading(false)
		}

		load()
	}, [])

	async function login(credential: string, password: string) {

		try {

			let response = await AuthMiddleware.login(credential, password)

			if (response.status === 200) {
				let data = response.data
				Request.defaults.headers['Authorization'] = data.token
				setToken(data.token)
				await AsyncStorage.setItem('@softcomChallenge', data.token)
			} else {
				toast.error("Something went wrong please try again later")

			}
			setLoading(false)
		} catch (error) {
			toast.error("User not exist")
			setLoading(false)
		}
	}

	async function logout() {
		setLoading(true)
		await AsyncStorage.clear()
		setToken(null)
		setLoading(false)
	}

	if (loading) {
		return (
			<Backdrop className={classes.backdrop} open={loading}>
				<CircularProgress color="inherit" />
			</Backdrop>
		)
	}

	return (
		<AuthContext.Provider value={{ signed: !!token, token: '', user: {}, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}


export default AuthContext