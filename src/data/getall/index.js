"use strict";

const { MAX } = require("mssql");
const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("getall");

  const getallSQL = async (text) => {
    // Get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // configure sql query parameters

    request.input("currentUser", sql.VarChar(50), text);

    // return the executed query
    return request.query(sqlQueries.getallSQL);
  };

  return {
    getallSQL,
  };
};

module.exports = { register };
