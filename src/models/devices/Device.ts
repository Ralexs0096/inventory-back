import { DataTypes } from 'sequelize'
import db from '../../db/config'

const { INTEGER, STRING } = DataTypes

const Device = db.define(
  'Device',
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    device: {
      type: STRING,
    },
    device_name: {
      type: STRING,
      allowNull: true,
    },
    device_type: {
      type: INTEGER,
    },
  },
  {
    tableName: 'tbl_device',
  }
)

export default Device
