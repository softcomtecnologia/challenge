/* Importando */
const swagger = require('swagger-ui-express');
const Vendas = require('../model/vendas');
    const Status = require('http-status');



/* Methodo get id */
  exports.getId = (request, response, next) => {
      const id = request.params.id
      Vendas.findByPk(id).then((vendas) => {
      
        if (vendas) {
            response.send(vendas)
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

      Vendas.findAll({ limit: limite, offset: pagina }).then((vendas) => {
          if (vendas && vendas.length) {
              response.send(vendas)
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }
  


  exports.create = (request, response, next) => {
      const descricao = request.body.descricao
      const valor = request.body.valor
      const desconto = request.body.desconto
    if(desconto == true){
        const taxa = valor - 5 /100;
        valor = valor - taxa;
    }
    
      Vendas.create({
          valor: valor,
          descricao: descricao
      }).then(() => {
          response.status(Status.CREATED).send("Item cadastrado com Sucesso !")
      }).catch((error) => next(error))
  }


