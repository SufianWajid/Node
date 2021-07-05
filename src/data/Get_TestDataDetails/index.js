"use strict";

const { MAX } = require("mssql");
const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("Get_TestDataDetails");

  const SQL = async (
    UserName,
    NAMTextTestData,
    CreateDateTestData,
    FormHeaderID,
    FormDetailsDisplayedText
  ) => {
    // Get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();
    request.input("UserName", sql.VarChar(256), UserName);
    request.input("NAMTextTestData", sql.VarChar(256), NAMTextTestData);
    request.input("CreateDateTestData", sql.VarChar(256), CreateDateTestData);
    request.input("FormHeaderID", sql.VarChar(256), FormHeaderID);
    request.input(
      "FormDetailsDisplayedText",
      sql.VarChar(256),
      FormDetailsDisplayedText
    );
    // configure sql query parameters

    // request.input("currentUser", sql.VarChar(50), text);

    // return the executed query
    return request.query(sqlQueries.Get_TestDataDetailsSQL);
  };

  return {
    SQL,
  };
};

module.exports = { register };
