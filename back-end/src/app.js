import 'dotenv/config';
import cors from 'cors';

import express from 'express';
import routes from './routes';

import './database';

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
    }

    routes() {
        this.server.use('/api/v1', routes);
    }
}

export default new App().server;
