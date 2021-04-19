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

          const { user } = req.params;
          console.log("request : " + user);

          //   const { text } = request.payload;
          //   console.log(text);

          //   // execute the query
          const res = await db.getlist.getlistSQL(Id);

          // return the recordset object
          return res.recordsets;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
