import { User, UserInterface } from '../db/models/user.model'

export function create(user: UserInterface): Promise<User> {
	return User.create(user)

}

export function get(id: number): Promise<User> {
	return User.findByPk(id)
}

export function getAll(): Promise<User[]> {
	return User.findAll()
}

export async function update(body: UserInterface, user: UserInterface): Promise<User> {
	let updatedUser = await User.findByPk(user.id)

	if (!updatedUser) {
		return null
	}

	await updatedUser.update(body)

	return updatedUser
}

export async function remove(id: number): Promise<boolean> {

	let user = await User.findByPk(id)

	if (!user) {
		return false
	}

	await user.destroy()

	return true
}
