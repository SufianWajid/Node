"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/getformheader",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          //   // TODO: Get the current authenticate user's ID
          var data = request.query;

          const user = data.user;

          //   const { text } = request.payload;

          //   // execute the query
          const res = await db.getformheader.SQL(user);

          // return the recordset object
          return res.recordset;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
