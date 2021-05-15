const mySql = require("../database/mysql");

exports.createItem = async (req, res, next) => {
  
  try {
    const query = "INSERT INTO itens (nome, descricao, preco, user_id) VALUES ( ?, ?, ?, ? )";
    const result = await mySql.execute(query, 
      [ req.body.nome, req.body.descricao, req.body.preco, req.params.id ]);

    return res.status(201).send({
      msg: "Item inserido com sucesso",
      id_produto: result.insertId,
    });

  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

exports.getAllItens = async (req, res, next) => {

    try {

      const query = "SELECT * FROM itens WHERE user_id = ?;";
      const result = await mySql.execute(query,
        [req.params.id]  
      );
      return res.status(200).send({ response: result });

    } catch (error) {
      return res.status(500).send({ error: error });
    }
};

exports.getItemById = async (req, res, next) => {

  try {
    const query = "SELECT * FROM itens WHERE id = ? AND user_id = ?;";
    const result = await mySql.execute(query, 
      [req.params.itemId, req.params.id]
    );
  
    if (result.length == 0) {
      return res.status(404).send({
        message: "Não foi encontrado produto com este ID",
      });
    }
  
    const response = {
      item: {
        itemId: result[0].id,
        nome: result[0].nome,
        descricao: result[0].descricao,
        preco: result[0].preco,
      },
    };
  
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({ error: error });
  }

}

exports.updateItem = async (req, res, next) => {

  try {
    const query =  `UPDATE itens
    SET nome = ?,
        descricao = ?,
        preco = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
    AND user_id = ?;`
    const result = await mySql.execute(query,
      [req.body.nome, req.body.descricao, req.body.preco, req.params.itemId, req.params.id]  
    );

    if(result.changedRows < 1){
      res.status(202).send({ msg: "Não foi encontrado produto com este ID",});
    }

    res.status(202).send({
      msg: "Item atualizado com sucesso",
      item: {
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco
      }
    });

  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

exports.deleteItem = async (req, res, next) => {

  try {
    const query = `DELETE FROM itens WHERE id = ? AND user_id = ?;`;
    const result = await mySql.execute(query,
      [req.params.itemId, req.params.id]
    );

    if(result.affectedRows < 1){
      res.status(202).send({ msg: "Não foi encontrado produto com este ID",});
    }

    res.status(202).send({
      msg: "Item removido com sucesso",
    });

  } catch (error) {
    return res.status(500).send({ error: error });
  }
};
