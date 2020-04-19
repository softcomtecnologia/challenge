'use strict'

const Item = use("App/Models/Item");


class ItemController {
  
  async index ({ auth, request, response }) {
    let items = await auth.user.items().fetch()
    return response.json(items)
  }

  async store ({ request, auth, response }) {
    try{
      let item = await auth.user.items().create(request.all())
      await item.load('user');
      return response.json(item)
    } catch (e) {
      return response.json({
        message: 'You are not authorized to perform this action'
      })
    }
  }

  async show ({ params, request, response, view }) {
    let item = await Item.find(params.itemId)
    return response.json(item)

  }

  async update ({ auth, params, request, response }) {
    let item = await Item.find(params.itemId)
    if (item.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }

    item.name = request.input('name')
    item.description = request.input('description')
    item.price = request.input('price')

    await item.save()
    await item.load('user');
    return response.json(item)

  }

  async destroy ({ params, auth, response }) {
    const item = await Item.findOrFail(params.itemId)
  
    if (item.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }
  
    await item.delete()
  }
}

module.exports = ItemController
