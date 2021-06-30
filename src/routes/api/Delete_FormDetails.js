"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/deleteformDetails",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          var params = request.query;
          // execute the query
          const res = await db.deleteformDetails.SQL(params.ID);

          // return the recordset object
          return "Record Deleted : " + params.ID;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
