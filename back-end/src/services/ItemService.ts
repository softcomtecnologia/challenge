import { Item, ItemInterface } from '../db/models/item.model'
import { UserInterface } from '../db/models/user.model'

export function createUserItem(user: UserInterface, item: ItemInterface): Promise<Item> {
	return Item.create({ ...item, userId: user.id })
}

export function create(item: ItemInterface): Promise<Item> {
	return Item.create({ ...item })
}

export function getUserItem(id: number, user: UserInterface): Promise<Item> {
	return Item.findOne({ where: { id, userId: user.id } })
}

export function get(id: number): Promise<Item> {
	return Item.findByPk(id)
}


interface IPaginationItemsResponse {
	total: number;
	items: Item[];
}

export async function getAllUserItems(user: UserInterface, limit: number, page: number): Promise<IPaginationItemsResponse> {

	limit = limit > 0 ? limit : 10
	page = page > 0 ? page : 1
	const offset = (limit * page) - limit

	let total = await Item.count({ where: { userId: user.id } })
	let items = await Item.findAll({ where: { userId: user.id }, offset, limit })

	return { total, items }
}

export function getAll(): Promise<Item[]> {
	return Item.findAll()
}

export async function updateUserItem(id: number, item: ItemInterface, user: UserInterface): Promise<Item> {
	let updatedItem = await Item.findOne({ where: { id, userId: user.id } })

	if (!updatedItem) {
		return null
	}

	await updatedItem.update(item)

	return updatedItem
}

export async function update(item: ItemInterface): Promise<Item> {
	let updatedItem = await Item.findByPk(item.id)

	if (!updatedItem) {
		return null
	}

	await updatedItem.update(item)

	return updatedItem
}

export async function removeUserItem(id: number, user: UserInterface): Promise<boolean> {

	let item = await Item.findOne({ where: { id, userId: user.id } })

	if (!item) {
		return false
	}

	await item.destroy()

	return true
}

export async function removeUserItems(ids: string, user: UserInterface): Promise<boolean> {

	let removed = await Item.destroy({ where: { id: ids.split(','), userId: user.id } })

	if (removed !== 0 && !removed) {
		return false
	}

	return true
}

export async function remove(id: number): Promise<boolean> {

	let item = await Item.findByPk(id)

	if (!item) {
		return false
	}

	await item.destroy()

	return true
}
