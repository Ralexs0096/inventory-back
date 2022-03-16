import { DataTypes } from 'sequelize'
import db from '../../db/config'

const IPaddres = db.define(
  'IpAddress',
  {
    id_ip_address: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'tbl_ip_address',
  }
)
