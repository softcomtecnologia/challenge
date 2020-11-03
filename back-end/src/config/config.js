module.exports = {
    development: {
      database: {
        host: "localhost",
        port: 3306,
        name: "node_express_challenge",
        dialect: "mysql",
        user: "root",
        password: ""
      }
    },
    production: {
      database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
      }
    }
  };