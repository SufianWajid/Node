"use strict";

const sql = require("./sql");
const sql2 = require("./sql2");

module.exports.register = async (server) => {
  // register plugins
  await server.register(sql);
  await server.register(sql2);
};
