"use strict";

const events = require("./events");
const getlist = require("./getlist");
const userdata = require("./userdata");

module.exports.register = async (server) => {
  await events.register(server);
  await getlist.register(server);
  await userdata.register(server);
};
