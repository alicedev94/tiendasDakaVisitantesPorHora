require("dotenv").config();
const urlApi = process.env.URL_API;

const config = {
  method: "GET",
  headers: {
    Authorization: process.env.AUTHORIZATION,
  },
};

module.exports = {
  urlApi,
  config,
};
