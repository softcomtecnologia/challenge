import { Request, Response, NextFunction } from 'express'
import * as UserService from '../services/UserService'
import { UserInterface } from '../db/models/user.model'
import jwt from 'jsonwebtoken'

export async function handleUserAuth(req: Request, res: Response, next: NextFunction): Promise<void> {

	try {

		let Authorization = req.headers.authorization

		jwt.verify(Authorization, process.env.JWT_SECRET)

		let decoded = jwt.decode(Authorization) as UserInterface

		let user = await UserService.get(decoded.id)

		if (user) {

			res.locals['user'] = user;
			next()
		} else {
			throw new Error("User not found in authentication")
		}

	} catch (error) {
		res.status(500).json(error)
	}

}
