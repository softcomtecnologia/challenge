import request from './request'

const getItems = (id: number) => {

	return request.get(`/user/item/${id}`)
}

const getAllItems = (page: number = 1, limit: number = 10, orderBy?: string, order?: string) => {

	return request.get(`/user/item/all`, { params: { page, limit, orderBy, order } })
}

const create = (item: { name: string, price: number }) => {

	return request.post(`/user/item/`, item)
}

const update = (item: { id: number, name: string, price: number }) => {

	return request.put(`/user/item/${item.id}`, item)
}

const remove = (item: { id: number }) => {

	return request.delete(`/user/item/${item.id}`)
}

const removeItems = (items: string) => {

	return request.delete(`/user/items/${items}`)
}

export default {
	getItems,
	getAllItems,
	create,
	update,
	remove,
	removeItems
}
