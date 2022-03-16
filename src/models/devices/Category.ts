import { DataTypes } from 'sequelize'
import db from '../../db/config'

const Category = db.define(
  'Category',
  {
    id_category: {
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
    tableName: 'tbl_device_category',
  }
)

export default Category
