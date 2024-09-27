const router = require("express").Router();
const login = require("../middlewares/login");

const itemController = require("../controllers/itens-controller");

//Cadastra um item
router.post("/user/:id/item", login.required, itemController.createItem);

//Busca todos os itens
router.get("/user/:id/item", login.required , itemController.getAllItens);

//Busca um item por id
router.get("/user/:id/item/:itemId", login.required, itemController.getItemById);

//Altera um item
router.patch("/user/:id/item/:itemId", login.required, itemController.updateItem);

//Deleta um item
router.delete("/user/:id/item/:itemId", login.required, itemController.deleteItem);

module.exports = router;