require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

const routeIndex = require("./routes/index");
const routeItens = require("./routes/itens");
const routeUsers = require("./routes/users");

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});

//Rotas
app.use("/api/v1", routeIndex, routeItens, routeUsers);

//Tratamento para rotas não existentes
app.use((req, res, next) => {
  const error = new Error("Route Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    error: {
      msg: error.message,
    },
  });
});

module.exports = app;
