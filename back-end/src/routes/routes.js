const express = require("express");
const item =  require('../controller/item');
const usuario =  require('../controller/user');
const vendas =  require('../controller/vendas');

const router = express.Router();

router.get('/user/:id', usuario.getId);

router.post('/user', usuario.create);

router.post('/auth/sign_in', usuario.login);

router.get('/auth/verify', usuario.verify);

router.get('/user/:id/item/:itemId', item.getId);

router.post('/user/:id/item', item.create);

router.delete('/user/:id/item/:itemId', item.delete);

router.put('/user/:id/item/:itemId', item.update);

router.get('/vendas/:id', vendas.getId);

router.get('/vendas/:id', vendas.getAll);

router.post('/vendas', vendas.create);

module.exports = router