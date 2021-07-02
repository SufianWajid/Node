"use strict";

const events = require("./events");
const getlist = require("./getlist");
const userdata = require("./userdata");
const deleterow = require("./deleterow");
const getall = require("./getall");
const gettestdatadetails = require("./Get_TestDataDetails");
const inserttestdatadetails = require("./Insert_TestDataDetails");
const deletetestdatadetails = require("./Delete_TestDataDetails");
const getformdetails = require("./Get_FormDetails");
const insertformdetails = require("./Insert_FormDetails");
const deleteformDetails = require("./Delete_FormDetails");
const getformheader = require("./Get_FormHeader");
const insertformheader = require("./Insert_FormHeader");
const getformheaderId = require("./Get_FormHeader_Id");

const sql = require("mssql");

const client = async (server, config) => {
  let pool = null;

  const closePool = async () => {
    try {
      // try to close the connection pool
      await pool.close();

      // set the pool to null to ensure
      // a new one will be created by getConnection()
      pool = null;
    } catch (err) {
      // error closing the connection (could already be closed)
      // set the pool to null to ensure
      // a new one will be created by getConnection()
      pool = null;
      server.log(["error", "data"], "closePool error");
      server.log(["error", "data"], err);
    }
  };

  const getConnection = async () => {
    try {
      if (pool) {
        // has the connection pool already been created?
        // if so, return the existing pool
        return pool;
      }
      // create a new connection pool

      pool = await sql.connect(config);

      // catch any connection errors and close the pool
      pool.on("error", async (err) => {
        server.log(["error", "data"], "connection pool error");
        server.log(["error", "data"], err);
        await closePool();
      });
      return pool;
    } catch (err) {
      // error connecting to SQL Server
      server.log(["error", "data"], "error connecting to sql server");
      server.log(["error", "data"], err);
      pool = null;
    }
  };

  // this is the API the client exposes to the rest
  // of the application
  return {
    events: await events.register({ sql, getConnection }),
    getlist: await getlist.register({ sql, getConnection }),
    userdata: await userdata.register({ sql, getConnection }),
    deleterow: await deleterow.register({ sql, getConnection }),
    getall: await getall.register({ sql, getConnection }),
    gettestdatadetails: await gettestdatadetails.register({
      sql,
      getConnection,
    }),
    inserttestdatadetails: await inserttestdatadetails.register({
      sql,
      getConnection,
    }),
    deletetestdatadetails: await deletetestdatadetails.register({
      sql,
      getConnection,
    }),
    getformdetails: await getformdetails.register({
      sql,
      getConnection,
    }),
    insertformdetails: await insertformdetails.register({
      sql,
      getConnection,
    }),
    deleteformDetails: await deleteformDetails.register({
      sql,
      getConnection,
    }),
    getformheader: await getformheader.register({
      sql,
      getConnection,
    }),
    insertformheader: await insertformheader.register({
      sql,
      getConnection,
    }),
    getformheaderId: await getformheaderId.register({
      sql,
      getConnection,
    }),
  };
};

module.exports = client;
