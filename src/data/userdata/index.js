"use strict";

const { MAX } = require("mssql");
const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("userdata");

  const getuserlist = async (data) => {
    // get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // configure sql query parameters

    request.input("UserName", sql.VarChar(256), data.UserName);
    request.input("Email", sql.VarChar(256), data.Email);
    request.input("EmailConfirmed", sql.bit, data.EmailConfirmed);
    request.input("PasswordHash", sql.VarChar(MAX), data.PasswordHash);
    request.input("PhoneNumber", sql.VarChar(MAX), data.PhoneNumber);
    request.input("PhoneNumberConfirmed", sql.bit, data.PhoneNumberConfirmed);

    // return the executed query
    return request.query(sqlQueries.getuserlist);
  };

  return {
    getuserlist,
  };
};

module.exports = { register };
