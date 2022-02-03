const { DataTypes, Model } = require("sequelize/dist");
const connection = require("../db/connection");
const Categories = require("./categories");
const Types = require("./types");

class Tones extends Model {}
Tones.init(
  {
    file_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    downloads: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize: connection,
    modelName: "Tones",
    tableName: "tones",
  }
);

Categories.hasMany(Tones, { foreignKey: "categoryId" });
Tones.belongsTo(Categories, { foreignKey: "categoryId" });

Types.hasMany(Tones, { foreignKey: "typeId" });
Tones.belongsTo(Types, { foreignKey: "typeId" });

module.exports = Tones;
