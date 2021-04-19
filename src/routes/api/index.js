"use strict";

const events = require("./events");
const getlist = require("./getlist");

module.exports.register = async (server) => {
  await events.register(server);
  await getlist.register(server);
};
