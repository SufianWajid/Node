"use strict";

const { MAX } = require("mssql");
const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("Get_FormHeader");

  const SQL = async (user) => {
    // Get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // configure sql query parameters

    request.input("user", sql.VarChar(50), user);

    // return the executed query
    return request.query(sqlQueries.Get_FormHeaderSQL);
  };

  return {
    SQL,
  };
};

module.exports = { register };
