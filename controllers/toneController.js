const Tones = require("../models/tones");
const { dataNotFound } = require("../helper/helper");
const { Op } = require("sequelize");

exports.getAllTones = async (req, res, next) => {
  try {
    const query = req.query;
    const where = new Object();
    for (const key in query) {
      if (key == "search" && query[key].length) {
        where["file_name"] = { [Op.like]: "%" + query[key] + "%" };
        continue;
      }
      where[key] = query[key];
    }
    const tones = await Tones.findAll({
      where,
      order: [["createdAt", "DESC"]],
    });
    return res.send({ status: true, data: tones });
  } catch (error) {
    return next(error);
  }
};

exports.downloadTone = async (req, res, next) => {
  try {
    const id = req.params.toneId;
    const tone = await Tones.findByPk(id);
    dataNotFound(tone, "Invalid Tone", 404);
    await tone.update({ downloads: parseInt(tone.downloads) + 1 });
    return res.send({ status: true, message: "success" });
  } catch (error) {
    next(error);
  }
};
