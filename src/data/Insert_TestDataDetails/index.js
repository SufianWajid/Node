"use strict";

const { MAX } = require("mssql");
const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("Insert_TestDataDetails");

  const SQL = async (model) => {
    // get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();
    console.log("Hittttt :" + model.ID);

    // configure sql query parameters
    request.input("ID", sql.VarChar(MAX), model.ID);

    request.input("UserName", sql.VarChar(256), model.UserName);
    request.input("NAMTextTestData", sql.VarChar(256), model.NAMTextTestData);
    request.input(
      "CreateDateTestData",
      sql.VarChar(256),
      model.CreateDateTestData
    );
    request.input("FormHeaderID", sql.VarChar(256), model.FormHeaderID);
    request.input(
      "FormDetailsDisplayedText",
      sql.VarChar(256),
      model.FormDetailsDisplayedText
    );
    request.input("Value", sql.VarChar(256), model.Value);

    // return the executed query
    return request.query(sqlQueries.Insert_TestDataDetailsSQL);
  };

  return {
    SQL,
  };
};

module.exports = { register };
