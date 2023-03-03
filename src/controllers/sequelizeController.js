const sequelize = require("../lib/sequelize");
const { models } = require("../lib/sequelize");

const { fetchData } = require("../controllers/apiPorterController");
const { urlApi } = require("../lib/apiPorter");

const bulkLoad = async () => {
  const data = await fetchData(urlApi);
  data.map((row) =>
    sequelize.models.visitorsPerHour.create({
      fechaHora: row.time,
      dispositivo: row.device_id,
      valor: row.value,
      sucursal: row.store_label,
    })
  );
};

const cleanTable = async (callback) => {
  sequelize.models.visitorsPerHour.destroy({
    truncate: true,
  });
  callback();
};

module.exports = {
  bulkLoad,
  cleanTable,
};
