"use strict";

const { MAX } = require("mssql");
const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("Insert_FormHeader");

  const SQL = async (model) => {
    // get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    console.log(model.UserName);

    // configure sql query parameters
    request.input("ID", sql.VarChar(MAX), model.ID);
    request.input("UserName", sql.VarChar(MAX), model.UserName);
    request.input("Naming", sql.VarChar(MAX), model.Naming);
    request.input("isActive", sql.VarChar(MAX), model.isActive);
    request.input("dateCreated", sql.VarChar(MAX), model.dateCreated);
    request.input("orderNumber", sql.VarChar(MAX), model.orderNumber);

    // return the executed query
    return request.query(sqlQueries.Insert_FormHeaderSQL);
  };

  return {
    SQL,
  };
};

module.exports = { register };
