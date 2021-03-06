"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/getall",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          //   // TODO: Get the current authenticate user's ID
          var user = request.query;

          const userId = user.user;

          //   const { text } = request.payload;
          //   console.log(text);

          //   // execute the query
          const res = await db.getall.getallSQL(userId);

          // return the recordset object
          return res.recordsets;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
