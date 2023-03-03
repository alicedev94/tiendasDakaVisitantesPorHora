const { config } = require("../lib/apiPorter");

const fetchData = async (urlApi) => {
  const res = await fetch(urlApi, config);
  const { data } = await res.json();
  return data;
};

module.exports = {
  fetchData,
};
