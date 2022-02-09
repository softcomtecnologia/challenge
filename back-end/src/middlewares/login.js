const jwt = require('jsonwebtoken');
const mySql = require("../database/mysql").pool;

exports.required = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.user = decode;

        if(req.user.userId != req.params.id){
            return res.status(401).send({ mensagem: 'Usuário não autenticado' });
        }

        next();
    } catch (error) {
        return res.status(401).send({ mensagem: 'Falha na autenticação' });
    }
}

exports.optional = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.user = decode;
        next();
    } catch (error) {
        next();
    }
}