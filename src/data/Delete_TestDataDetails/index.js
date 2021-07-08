"use strict";

const { MAX } = require("mssql");
const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("Delete_TestDataDetails");

  const SQL = async (UserName, NAMTextTestData, CreateDateTestData) => {
    // Get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // configure sql query parameters

    request.input("UserName", sql.VarChar(MAX), UserName);
    request.input("NAMTextTestData", sql.VarChar(MAX), NAMTextTestData);
    request.input("CreateDateTestData", sql.VarChar(MAX), CreateDateTestData);

    // return the executed query
    return request.query(sqlQueries.Delete_TestDataDetails);
  };

  return {
    SQL,
  };
};

module.exports = { register };
