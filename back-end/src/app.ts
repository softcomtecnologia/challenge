import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes'

require('dotenv').config();

class App {
	public express: express.Application

	public constructor() {
		this.express = express()

		this.middlewares()
		this.database()
		this.routes()
	}

	private middlewares(): void {
		this.express.use(express.json())
		this.express.use(cors())
	}

	private database(): void {

	}

	private routes(): void {
		this.express.use(morgan("combined"))

		this.express.use(routes)
	}
}

export default new App().express
