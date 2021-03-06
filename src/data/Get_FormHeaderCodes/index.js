"use strict";

const { MAX } = require("mssql");
const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("Get_FormHeaderCodes");

  const SQL = async (id) => {
    // Get a connection to SQL Server
    const cnx = await getConnection();
    // create a new request
    const request = await cnx.request();

    // configure sql query parameters

    request.input("id", sql.VarChar(50), id);

    // return the executed query
    return request.query(sqlQueries.Get_FormHeaderCodesSQL);
  };

  return {
    SQL,
  };
};

module.exports = { register };
