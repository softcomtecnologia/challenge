import { Request, Response } from 'express'
import * as ItemService from '../services/ItemService'

class ItemController {

	public async create(req: Request, res: Response): Promise<Response> {

		try {
			let body = req.body
			let newItem = await ItemService.create(body)

			return res.json(newItem)
		} catch (error) {
			return res.status(500).json(error)
		}

	}

	public async get(req: Request, res: Response): Promise<Response> {

		try {
			let id = req.params.id

			if (id) {
				const item = await ItemService.get(parseInt(id))
				return res.json(item)
			} else {
				const items = await ItemService.getAll()
				return res.json(items)
			}
		} catch (error) {
			return res.status(500).json(error)
		}

	}

	public async update(req: Request, res: Response): Promise<Response> {

		try {
			let body = req.body

			let updatedItem = await ItemService.update(body)

			if (updatedItem) {
				return res.json(updatedItem)
			} else {
				return res.status(401).send()
			}
		} catch (error) {
			return res.status(500).json(error)
		}

	}

	public async remove(req: Request, res: Response): Promise<Response> {

		try {
			let body = req.body

			let deleted = await ItemService.remove(body.id)

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

export default new ItemController()
