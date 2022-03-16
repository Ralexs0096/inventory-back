import { DataTypes } from 'sequelize'
import db from '../../db/config'

const Types = db.define(
  'Types',
  {
    id_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'tbl_device_type',
  }
)

export default Types
