"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "POST",
    path: "/api/inserttestdatadetails",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          // TODO: Get the current authenticate user's ID
          const { model } = request.payload;

          // execute the query
          const res = await db.inserttestdatadetails.SQL(model);

          // return the recordset object
          return "Record Inserted";
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
