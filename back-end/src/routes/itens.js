const router = require("express").Router();

const itemController = require('../controllers/itens-controller');

//Cadastra um item
router.post("/user/:id/item", itemController.createItem);

//Busca todos os itens
router.get("/user/:id/item" , itemController.getAllItens);

//Busca um item por id
router.get("/user/:id/item/:itemId", itemController.getItemById);

//Altera um item
router.patch("/user/:id/item/:itemId", itemController.updateItem);

//Deleta um item
router.delete("/user/:id/item/:itemId", itemController.deleteItem);

module.exports = router;