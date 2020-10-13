// lib/config/database.ts
import { Sequelize } from 'sequelize';
import * as path from 'path'

const config = require('./config')

export const database = new Sequelize(config);
