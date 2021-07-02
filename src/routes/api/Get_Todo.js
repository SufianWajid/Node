"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/gettodo",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          //   // TODO: Get the current authenticate user's ID
          var params = request.query;

          const user = params.user;
          const date = params.date;
          const NAM = params.NAM;

          //   const { text } = request.payload;

          //   // execute the query
          const res = await db.getformheaderId.SQL(user, date, NAM);

          // return the recordset object
          return res.recordset[0].ID;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
