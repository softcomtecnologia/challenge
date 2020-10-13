import { Request, Response } from 'express'
import * as UserService from '../services/UserService'
import * as ItemService from '../services/ItemService'
import { UserInterface } from '../db/models/user.model'
import { Item, ItemInterface } from '../db/models/item.model'

interface IPaginationQuery {
	page?: number;
	limit?: number
}

class UserController {

	public async create(req: Request, res: Response): Promise<Response> {

		try {
			let body = req.body

			let newUser = await UserService.create(body)

			return res.json(newUser)
		} catch (error) {
			return res.status(500).json(error)
		}

	}

	public async get(req: Request, res: Response): Promise<Response> {

		try {
			let id = req.params.id

			if (id) {
				const user = await UserService.get(parseInt(id))
				return res.json(user)
			} else {
				const users = await UserService.getAll()
				return res.json(users)
			}
		} catch (error) {
			return res.status(500).json(error)
		}

	}

	public async update(req: Request, res: Response): Promise<Response> {

		try {
			let body = req.body
			let user = res.locals['user']

			let updatedUser = await UserService.update(body, user)

			if (updatedUser) {
				return res.json(updatedUser)
			} else {
				return res.status(401).send()
			}
		} catch (error) {
			return res.status(500).json(error)
		}

	}

	public async remove(req: Request, res: Response): Promise<Response> {

		try {
			let id = req.params.id

			let deleted = await UserService.remove(parseInt(id))

			if (deleted) {
				return res.status(200).send()
			} else {
				return res.status(404).send()
			}

		} catch (error) {
			return res.status(500).json(error)
		}

	}


	// items

	public async createItem(req: Request, res: Response): Promise<Response> {

		try {
			let body = req.body
			let user = res.locals['user'] as UserInterface

			let newItem = await ItemService.createUserItem(user, body)

			return res.json(newItem)

		} catch (error) {
			return res.status(500).json(error)
		}

	}

	public async getItem(req: Request, res: Response): Promise<Response> {

		try {

			let id = req.params.id
			let user = res.locals['user'] as UserInterface

			if (id) {
				let item = await ItemService.getUserItem(parseInt(id), user)
				return res.json(item)
			}

		} catch (error) {
			return res.status(500).json(error)
		}

	}

	public async getAllItem(req: Request, res: Response): Promise<Response> {

		try {

			let { page, limit } = req.query as IPaginationQuery

			let user = res.locals['user'] as UserInterface

			const response = await ItemService.getAllUserItems(user, limit, page)

			return res.json(response)

		} catch (error) {
			return res.status(500).json(error)
		}

	}

	public async updateItem(req: Request, res: Response): Promise<Response> {

		try {
			let body = req.body
			let id = req.params.id
			let user = res.locals['user'] as UserInterface

			if (id) {
				let updatedItem = await ItemService.updateUserItem(parseInt(id), body, user)

				if (updatedItem) {
					return res.json(updatedItem)
				}

			}

			return res.status(401).send()
		} catch (error) {
			return res.status(500).json(error)
		}

	}

	public async removeItem(req: Request, res: Response): Promise<Response> {

		try {

			let id = req.params.id
			let user = res.locals['user'] as UserInterface


			let deleted = await ItemService.removeUserItem(parseInt(id), user)

			if (deleted) {
				return res.status(200).send()
			} else {
				return res.status(404).send()
			}

		} catch (error) {
			return res.status(500).json(error)
		}

	}

	public async removeItems(req: Request, res: Response): Promise<Response> {

		try {

			let ids = req.params.ids
			let user = res.locals['user'] as UserInterface

			if (RegExp("/^\d+(?:,\d+)*$/").test(ids)) {
				throw new Error('Number formatting should be "1,2,3,4"')
			}

			let deleted = await ItemService.removeUserItems(ids, user)

			if (deleted) {
				return res.status(200).send()
			} else {
				return res.status(404).send()
			}

		} catch (error) {
			return res.status(500).json(error)
		}

	}

}

export default new UserController()
