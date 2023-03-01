/*
    objetivos
        -
        -
*/
const { findAll, bulkLoad } = require("./controllers/main");
async function rta() {
  const rta = await findAll();
  rta.map((row) =>
    bulkLoad({
      fechaHora: null,
      dispositivo: "DEVICE",
      valor: 0,
      sucursal: "SUC",
      fechaActualizacion: "2023-03-01T18:43:16.710Z",
    })
  );
}

rta();
