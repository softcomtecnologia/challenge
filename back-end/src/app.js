/* Import */
const http = require("http");
const status = require("http-status");
const express = require("express");
const routes = require('./routes/routes');
const sequelize = require('./database/database');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


/* Instanciando o express */
const app = express();

/* Configurando o retorno para json */
app.use(express.json());

/* Importando o swagger */
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Customer API",
        description: "Customer API Information",
        contact: {
          name: "Amazing Developer"
        },
        servers: ["http://localhost:3000"]
      }
    },
    // ['.routes/*.js']
    apis: ["app.js"]
  };

  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  


/* Definição de rotas */
app.use('/api/v1', routes);

/* Middleware */
app.use((request, response,next) => {
    response.status(status.NOT_FOUND).send("Pagina não encontrada");
})
app.use((error, request, response,next) => {
    response.status(status.INTERNAL_SERVER_ERROR).json({ error });
})

/*parametro para forçar criação das tabelas { force: true } */
sequelize.sync().then(() => {
      const port = process.env.PORT || 3000

      app.set('port', port)

      const server = http.createServer(app)

      server.listen(port)
})