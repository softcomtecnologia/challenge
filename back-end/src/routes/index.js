const router = require('express').Router();

//Rota de apresentação da API
router.get('/', (req, res, next) =>{
    res.status(200).send({
        title: 'API Softcom Project', version: '0.0.1', author: 'Antônio Abrantes'
    });
});

module.exports = router;