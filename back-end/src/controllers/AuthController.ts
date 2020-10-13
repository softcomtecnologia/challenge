import { Request, Response } from 'express'
import { User, UserInterface } from '../db/models/user.model'

class UserController {

	public async login(req: Request, res: Response): Promise<Response> {

		try {
			let body = req.body
			let userAuthenticated = await User.getByCredentials(body)
			if (!userAuthenticated) {
				return res.status(401).send()
			}

			let token = userAuthenticated.generateAuthToken()
			return res.json({ token })

		} catch (error) {
			res.status(500).send()
		}

	}

	public async check(req: Request, res: Response): Promise<Response> {

		try {
			let body = req.body
			let newUser = await User.create(body)

			return res.json(newUser)
		} catch (error) {
			res.status(500).send()
		}

	}

}

export default new UserController()
