const router = require("express").Router();

const userController = require('../controllers/users-controler');

//Cadastra um usuário
router.post("/user", userController.createUser);

//Busca um usuário pelo id
router.get("/user/:id", userController.getUserBuId);

//Altera um usuário
router.patch("/user/:id", userController.updateUser);

//Deleta um usuário
router.delete("/user/:id", userController.deleteUser);

module.exports = router;