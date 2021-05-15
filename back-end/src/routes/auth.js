const router = require("express").Router();
const mySql = require("../database/mysql").pool;
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

router.post("/auth/sign_in", (req, res, next) => {
    mySql.getConnection((error, conn) => {
      if (error) { return res.status(500).send({ error: error }) };
        const query = `SELECT * FROM users WHERE email = ? OR cnpj = ?`;
        conn.query(query, [req.body.email, req.body.cnpj],
          (error, results, field) => {
          conn.release();
          if (error) { return res.status(500).send({ msg: "Menssagem", error: error.sqlMessage }); }
          if(results.length < 1){ return res.status(401).send({msg: 'Falha na autenticação'}); }
  
          bcrypt.compare(req.body.senha, results[0].senha, (err, result) =>{
              if(err){return res.status(401).send({msg: 'Falha na autenticação'}); }
  
              if(result){
                  const token = jwt.sign({
                      userId: results[0].id,
                      email: results[0].email,
                      cnpj: results[0].cnpj,
                  }, 
                  process.env.JWT_KEY,
                  {
                      expiresIn: "1h"
                  });
  
                  return res.status(200).send({ 
                      msg: 'Autenticado com sucesso.',
                      userId: results[0].id,
                      token: token 
                  });
              }
              return res.status(401).send({msg: 'Falha na autenticação'});
          });
        });
    });
  });

  module.exports = router;