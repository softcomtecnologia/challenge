const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ok: true})
})

module.exports = routes;