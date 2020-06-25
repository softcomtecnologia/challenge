require('dotenv').config();
const path = require('path')

module.exports = {

	env: process.env.NODE_ENV,
	host: process.env.DB_HOST,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	dialect: process.env.DB_DIALECT,
	storage: path.join(__dirname, process.env.DB_STORAGE || '../../../db.sqlite'),
	options: {
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
		pool: {
			min: process.env.DB_POOL_MIN,
			max: process.env.DB_POOL_MAX,
			idle: process.env.DB_POOL_IDLE
		}
	}
}
