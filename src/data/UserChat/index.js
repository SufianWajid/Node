"use strict";

const { MAX } = require("mssql");
const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("UserChat");

  const UserChatSQL = async (params) => {
    // Get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // configure sql query parameters

    request.input("keyword", sql.VarChar(50), params.keyword);
    request.input("user", sql.VarChar(50), params.user);

    // return the executed query
    return request.query(sqlQueries.UserChatSQL);
  };

  return {
    UserChatSQL,
  };
};

module.exports = { register };
