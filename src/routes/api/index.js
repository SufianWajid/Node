"use strict";

const events = require("./events");
const getlist = require("./getlist");
const userdata = require("./userdata");
const deleterow = require("./deleterow");
const getall = require("./getall");
const gettestdatadetails = require("./Get_TestDataDetails");
const inserttestdatadetails = require("./Insert_TestDataDetails");
const deletetestdatadetails = require("./Delete_TestDataDetails");
const getformdetails = require("./Get_FormDetails");
const insertformdetails = require("./Insert_FormDetails");
const deleteformDetails = require("./Delete_FormDetails");
const getformheader = require("./Get_FormHeader");
const insertformheader = require("./Insert_FormHeader");
const getformheaderId = require("./Get_FormHeader_Id");
const getformheadercodesbyid = require("./Get_FormHeaderCodes");
const deleteformheadercodebyid = require("./Delete_FormHeaderCodes");

module.exports.register = async (server) => {
  await events.register(server);
  await getlist.register(server);
  await userdata.register(server);
  await deleterow.register(server);
  await getall.register(server);
  await gettestdatadetails.register(server);
  await inserttestdatadetails.register(server);
  await deletetestdatadetails.register(server);
  await getformdetails.register(server);
  await insertformdetails.register(server);
  await deleteformDetails.register(server);
  await getformheader.register(server);
  await insertformheader.register(server);
  await getformheaderId.register(server);
  await getformheadercodesbyid.register(server);
  await deleteformheadercodebyid.register(server);
};
