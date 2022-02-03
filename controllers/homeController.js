const Categories = require("../models/categories");
const connection = require("../db/connection");
const Tones = require("../models/tones");
exports.getTypes = async () => {};

exports.getDashboard = async (req, res, next) => {
  try {
    const home = {};
    home["categories_notification"] = await Categories.findAll({
      order: [connection.random()],
      limit: 5,
    });
    home["category_ringtone"] = await Categories.findAll({
      limit: 5,
      order: [connection.random()],
    });
    home["tones"] = await Tones.findAll({
      order: [connection.random()],
      limit: 8,
    });
    return res.send({ status: true, data: home });
  } catch (error) {
    return next(error);
  }
};

exports.getAllCategories = async (req, res, next) => {
  try {
    const typeId = req.query.typeId;
    let include = new Array();
    if (typeId) {
      include.push({ model: Tones, where: { typeId: typeId }, attributes: [] });
    }
    const categories = await Categories.findAll({ include });
    return res.send({ status: true, data: categories });
  } catch (error) {
    next(error);
  }
};
