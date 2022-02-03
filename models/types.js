const { Sequelize, DataTypes, Model } = require("sequelize");
const connection = require("../db/connection");

class Types extends Model {}

Types.init(
  {
    // Model attributes are defined here
    type_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize: connection, // We need to pass the connection instance
    modelName: "Types", // We need to choose the model name
    tableName: "types",
  }
);

module.exports = Types;
