"use strict";

const { MAX } = require("mssql");
const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("Delete_FormDetails");

  const SQL = async (ID) => {
    // Get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // configure sql query parameters

    request.input("ID", sql.VarChar(MAX), ID);

    // return the executed query
    return request.query(sqlQueries.Delete_FormDetails);
  };

  return {
    SQL,
  };
};

module.exports = { register };
