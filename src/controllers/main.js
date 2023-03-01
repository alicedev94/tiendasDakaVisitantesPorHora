const sequelize = require("../lib/sequelize");
const { models } = require("../lib/sequelize");

const findAll = async () => {
  const rta = await sequelize.models.visitorsPerHour.findAll();
  return rta;
};

const bulkLoad = async (data) => {
  const rta = await sequelize.models.visitorsPerHour.create(data);
  return rta;
};

module.exports = {
  findAll,
  bulkLoad,
};
