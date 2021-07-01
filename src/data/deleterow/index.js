"use strict";

const { MAX } = require("mssql");
const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("deleterow");

  const deleterow = async (Id) => {
    // Get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // configure sql query parameters

    request.input("Id", sql.VarChar(MAX), Id);

    // return the executed query
    return request.query(sqlQueries.deleterowSQL);
  };

  return {
    deleterow,
  };
};

module.exports = { register };
