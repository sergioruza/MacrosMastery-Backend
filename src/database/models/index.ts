import { Sequelize } from 'sequelize';
import * as config from '../config/connection';

const sequelize = new Sequelize(config);

export default sequelize;
