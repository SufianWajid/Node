"use strict";

const { MAX } = require("mssql");
const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("SendChat");

  const SendChatSQL = async (params) => {
    // Get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // configure sql query parameters

    request.input("text", sql.VarChar(50), params.text);
    request.input("userid", sql.VarChar(50), params.User_id);
    request.input("username", sql.VarChar(50), params.User_name);
    request.input("useravatar", sql.VarChar(50), params.User_avatar);
    request.input("date", sql.VarChar(50), params.createdAt);
    request.input("id", sql.VarChar(50), params._id);

    // return the executed query
    return request.query(sqlQueries.SendChatSQL);
  };

  return {
    SendChatSQL,
  };
};

module.exports = { register };
