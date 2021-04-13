"use strict"

const User = use("App/Models/User")

class UserController {

    async show ({ params, request, response, view }) {
        let user = await User.find(params.id)
        return response.json(user)
    
    }
  
    async create ({ request }) {
        const data = request.only(["username", "email", "cnpj", "password"])

        const user = await User.create(data)

        return user
    }

}

module.exports = UserController