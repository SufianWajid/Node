"use strict";

const { MAX } = require("mssql");
const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
  // read in all the .sql files for this folder
  const sqlQueries = await utils.loadSqlQueries("Insert_FormDetails");

  const SQL = async (model) => {
    // get a connection to SQL Server
    const cnx = await getConnection();

    // create a new request
    const request = await cnx.request();

    // configure sql query parameters
    request.input("ID", sql.VarChar(MAX), model.ID);
    request.input("UserName", sql.VarChar(MAX), model.UserName);
    request.input("isActive", sql.VarChar(MAX), model.isActive);
    request.input("orderNumber", sql.VarChar(MAX), model.orderNumber);
    request.input("DisplayedText", sql.VarChar(MAX), model.DisplayedText);
    request.input("MakeHiglight", sql.VarChar(MAX), model.MakeHiglight);
    request.input("HighlightColor", sql.VarChar(MAX), model.HighlightColor);
    request.input("weekEnd", sql.VarChar(MAX), model.weekEnd);
    request.input("haveUnits", sql.VarChar(MAX), model.haveUnits);
    request.input("UnitsType", sql.VarChar(MAX), model.UnitsType);
    request.input("isTextbox", sql.VarChar(MAX), model.isTextbox);
    request.input("DefaultValue", sql.VarChar(MAX), model.DefaultValue);
    request.input("IDFormHeader", sql.VarChar(MAX), model.IDFormHeader);

    // return the executed query
    return request.query(sqlQueries.Insert_FormDetailsSQL);
  };

  return {
    SQL,
  };
};

module.exports = { register };
