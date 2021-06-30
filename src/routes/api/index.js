"use strict";

const events = require("./events");
const getlist = require("./getlist");
const userdata = require("./userdata");
const deleterow = require("./deleterow");
const getall = require("./getall");
const gettestdatadetails = require("./Get_TestDataDetails");
const inserttestdatadetails = require("./Insert_TestDataDetails");
const deletetestdatadetails = require("./Delete_TestDataDetails");

module.exports.register = async (server) => {
  await events.register(server);
  await getlist.register(server);
  await userdata.register(server);
  await deleterow.register(server);
  await getall.register(server);
  await gettestdatadetails.register(server);
  await inserttestdatadetails.register(server);
  await deletetestdatadetails.register(server);
};
