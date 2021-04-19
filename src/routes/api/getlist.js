"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/getlist",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          //   // TODO: Get the current authenticate user's ID
          //   const Id = 1;
          //   const { text } = request.payload;
          //   console.log(text);

          //   // execute the query
          const res = await db.getlist.getlistSQL();

          // return the recordset object
          return res;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
