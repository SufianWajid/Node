"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "POST",
    path: "/api/deleterow",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          var params = request.query;

          // execute the query
          const res = await db.deleterow.deleterow(params.user, params.NAM);

          // return the recordset object
          return "Record Deleted";
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
