import Request from './request'

const login = (email: string, password: string) => {

	return Request.post('/auth/sign_in', { email, password })

}

const signup = (user: Object) => {

	return Request.post('/user', user)
}

export default {
	login,
	signup
}
