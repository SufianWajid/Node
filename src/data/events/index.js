"use strict";

const { MAX } = require("mssql");
const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("events");

  const getEvents = async (text) => {
    // get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // configure sql query parameters
    request.input("Id", sql.VarChar(MAX), text.Id);
    request.input("text", sql.VarChar(50), text.NAM);
    request.input("textCode", sql.VarChar(MAX), text.Code);
    request.input("date", sql.VarChar(50), text.date);
    request.input("currentUser", sql.VarChar(50), text.currentUser);
    request.input("detail", sql.VarChar(500), text.detail);
    request.input("old", sql.VarChar(50), text.old);
    request.input("picture64", sql.VarChar(MAX), text.picture64);
    request.input("order", sql.VarChar(10), text.order);
    request.input("person_name", sql.VarChar(50), text.person.name);

    // return the executed query
    return request.query(sqlQueries.getEvents);
  };

  return {
    getEvents,
  };
};

module.exports = { register };
