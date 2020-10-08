/* Importando */
const swagger = require('swagger-ui-express');
const Item = require('../model/item');
    const Status = require('http-status');



/* Methodo get id */
  exports.getId = (request, response, next) => {
      const id = request.params.itemId
      Item.findByPk(id).then((item) => {
      
        if (item) {
            response.send(item)
        } else {
            response.status(Status.NOT_FOUND).send()
        }
    }).catch((error) => next(error))


  }


  exports.getAll = (request, response, next) => {
      let limite = parseInt(request.query.limite || 0)
      let pagina = parseInt(request.query.pagina || 0)

      if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
          response.status(Status.BAD_REQUEST).send()
      }

      const ITENS_POR_PAGINA = 10

      limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite
      pagina = pagina <= 0 ? 0 : pagina * limite

      Item.findAll({ limit: limite, offset: pagina }).then((item) => {
          if (item && item.length) {
              response.send(item)
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }
  


  exports.create = (request, response, next) => {
      const nome = request.body.nome
      const descricao = request.body.descricao
      const preco = request.body.preco


      Item.create({
          nome: nome,
          descricao: descricao,
          preco: preco
      }).then(() => {
          response.status(Status.CREATED).send("Item cadastrado com Sucesso !")
      }).catch((error) => next(error))
  }

  exports.update = (request, response, next) => {
      const id = request.params.itemId

      const nome = request.body.nome
      const descricao = request.body.descricao
      const preco = request.body.preco

      Item.findByPk(id).then((item) => {
          if (item) {
              Item.update({
                  nome: nome,
                  descricao: descricao,
                  preco: preco
              }, { where: { id: id } }).then(() => {
                  response.send("Item atualizado com Sucesso !")
              }).catch((error) => next(error))
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }

  exports.delete = (request, response, next) => {
      const id = request.params.itemId

      Item.findByPk(id).then((item) => {
          if (item) {
              Item.destroy({
                  where: { id: id }
              }).then(() => {
                  response.send("item deletado com sucesso !")
              }).catch((error) => next(error))
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }