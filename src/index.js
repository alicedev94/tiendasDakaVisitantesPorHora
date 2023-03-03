/*
    objetivos
        - monitor
        - exec 30min
        - optimizar insert
*/
const { bulkLoad, cleanTable } = require("./controllers/sequelizeController");
require('dotenv').config();
const howOften = process.env.UPDATE_TIME;

async function updateTable() {
  cleanTable(function() {
    bulkLoad();
  });
}

setInterval( async () => {
  await updateTable();
}, howOften);


