import { DATE, FLOAT, INTEGER, Model } from 'sequelize';
import db from '.';
import User from './UserModel';

export default class WeightHistory extends Model {
  declare id: number;
  declare userId: number;
  declare weight: number;
  declare date: Date;
}

WeightHistory.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: INTEGER,
      allowNull: false,
    },
    weight: {
      type: FLOAT,
      allowNull: false,
    },
    date: {
      type: DATE,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'WeightHistory',
    tableName: 'weight_history',
  },
);

// WeightHistory.belongsTo(User, {
//   foreignKey: 'userId',
//   as: 'user',
// });
