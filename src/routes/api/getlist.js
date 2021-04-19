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
          const Id = "user100";

          console.log("request : " + request);
          //   const { text } = request.payload;
          //   console.log(text);

          //   // execute the query
          const res = await db.getlist.getlistSQL(Id);

          // return the recordset object
          //   return res.recordsets;
          return request.user;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
