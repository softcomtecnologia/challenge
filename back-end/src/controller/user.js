/* Importando */
const swagger = require('swagger-ui-express');
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');
const User = require('../model/user');
    const Status = require('http-status');
const e = require('express');



/* Methodo get id */
  exports.getId = (request, response, next) => {
      const id = request.params.id
      User.findByPk(id).then((user) => {
      
        if (user) {
            response.send(user)
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

      User.findAll({ limit: limite, offset: pagina }).then((user) => {
          if (user && user.length) {
              response.send(user)
          } else {
              response.status(400).send('error')
          }
      }).catch((error) => next(error))
  }
  
  exports.login = async (req, res, next) => {
      const email = req.body.email;
      const senha = req.body.senha;
      const cnpj = req.body.cnpj;
      if(email){
     const user = await User.findAll({where:{ 
          email: email,
          senha: senha
      }}).then((user) => {
        if (user[0]) {
            const id = 1; //esse id viria do banco de dados
            var token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
        });
        return res.json({ auth: true, token: token });
        } 

        res.status(500).json({message: 'Login inválido!', user: user[0]});
    });

      return res.send('finalizou', user);
}
if(cnpj){
    const user = await User.findAll({where:{ 
         cnpj: cnpj,
         senha: senha
     }}).then((user) => {
       if (user[0]) {
           const id = 1; //esse id viria do banco de dados
           var token = jwt.sign({ id }, process.env.SECRET, {
           expiresIn: 300 // expires in 5min
       });
       return res.json({ auth: true, token: token });
       } 

       res.status(500).json({message: 'Login inválido!', user: user[0]});
   });

     return res.send('finalizou', user);
}

}

  exports.create = (request, response, next) => {
      const nome = request.body.nome
      const email = request.body.email
      const cnpj = request.body.cnpj
      const senha = request.body.senha


      User.create({
          nome: nome,
          email: email,
          cnpj: cnpj,
          senha: senha
      }).then(() => {
          response.status(Status.CREATED).send("Usuario cadastrado com Sucesso !")
      }).catch((error) => next(error))
  }

  exports.update = (request, response, next) => {
      const id = request.params.id

      const nome = request.body.nome
      const email = request.body.email
      const cnpj = request.body.cnpj
      const senha = request.body.senha

      User.findByPk(id).then((user) => {
          if (user) {
              user.update({
                  nome: nome,
                  email: email,
                  cnpj: cnpj,
                  senha: senha
              }, { where: { id: id } }).then(() => {
                  response.send("Cadastro atualizado com Sucesso !")
              }).catch((error) => next(error))
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }


  exports.verify = (req, res, next) => {
    var token = req.headers['x-access-token'];
    
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      else if(token) return res.status(200).json({ auth: true, message: 'Usuario authenticate' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}

  exports.delete = (request, response, next) => {
      const id = request.params.id

      User.findByPk(id).then((user) => {
          if (user) {
              user.destroy({
                  where: { id: id }
              }).then(() => {
                  response.send("user deletado com sucesso !")
              }).catch((error) => next(error))
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }