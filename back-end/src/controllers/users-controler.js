const mySql = require("../database/mysql").pool;
const bcrypt = require("bcrypt");

exports.createUser = async (req, res, next) => {
    mySql.getConnection((error, conn) => {
      if (error) {
        return res.status(500).send({ error: error });
      }
  
      conn.query(
        "SELECT * FROM users WHERE email = ? OR cnpj = ?",
        [req.body.email, req.body.cnpj],
        (error, results) => {
          if (results.length > 0) {
            res.status(409).send({ msg: "Usuário já cadastrado" });
          } else {
            bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
              if (errBcrypt) {
                return res.status(500).send({ error: errBcrypt });
              }
  
              conn.query(
                "INSERT INTO users (nome, email, cnpj, senha) VALUES ( ?, ?, ?, ? )",
                [req.body.nome, req.body.email, req.body.cnpj, hash],
                (error, results, field) => {
                  conn.release();
  
                  if (error) {
                    res.status(500).send({
                      msg: "Erro ao cadastrar usuário",
                      error: error.sqlMessage,
                    });
                  }
  
                  return res.status(201).send({
                    msg: "Usuário cadastrado com sucesso",
                    userId: results.insertId,
                    nome: req.body.nome,
                    email: req.body.email,
                  });
                }
              );
            });
          }
        }
      );
    });
  }

  exports.getUserBuId = async (req, res, next) => {
    res.status(200).send({
      msg: "Usando o GET dos usuários",
    });
  }

  exports.updateUser = async (req, res, next) => {
    res.status(201).send({
      msg: "Usando o PATCH dos usuários",
    });
  }

  exports.deleteUser = async (req, res, next) => {
    res.status(201).send({
      msg: "Usando o DELETE dos usuários",
    });
  }