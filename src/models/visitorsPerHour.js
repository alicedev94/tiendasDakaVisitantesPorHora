const { Sequelize, Model, DataTypes } = require("sequelize");

const table_name = "visitantes_por_hora";

const visitorsSchema = {
  fechaHora: {
    allowNull: true,
    type: DataTypes.DATE,
    field: "fecha_hora",
  },
  dispositivo: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  valor: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  sucursal: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  fechaActualizacion: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "fecha_actualizacion",
    defaultValue: Sequelize.NOW,
  },
};

class VisitorsPerHour extends Model {
  static associate() {
    // pass
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: table_name,
      modelName: "visitorsPerHour",
      timestamps: false,
    };
  }
}

module.exports = {
  table_name,
  visitorsSchema,
  VisitorsPerHour,
};
