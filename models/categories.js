const { Sequelize, DataTypes, Model } = require("sequelize");
const connection = require("../db/connection");

class Categories extends Model {}

Categories.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize: connection, // We need to pass the connection instance
    modelName: "Categories", // We need to choose the model name
    tableName: "categories",
  }
);

module.exports = Categories;
