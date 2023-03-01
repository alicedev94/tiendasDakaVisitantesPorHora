const { VisitorsPerHour, visitorsSchema } = require("../models/VisitorsPerHour");

function setupModels(sequelize) {
  VisitorsPerHour.init(visitorsSchema, VisitorsPerHour.config(sequelize));
}

module.exports = setupModels;
