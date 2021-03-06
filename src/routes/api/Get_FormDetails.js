"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/getformdetails",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          //   // TODO: Get the current authenticate user's ID
          var params = request.query;

          const Id = params.Id;

          //   const { text } = request.payload;
          //   console.log(text);

          //   // execute the query
          const res = await db.getformdetails.SQL(Id);

          // return the recordset object
          return res.recordset;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
