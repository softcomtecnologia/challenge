module.exports = {
    dialect: 'postgres',
    host: '192.168.99.100',
    port: 5433,
    username: 'postgres',
    password: 'docker',
    database: 'db_desafio_softcom',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};

// host: process.env.DB_HOST,
// username: process.env.DB_USER,
// password: process.env.DB_PASS,
// database: process.env.DB_NAME,
