"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/getformheadercodesbyid",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          var data = request.query;

          const id = data.id;
          const res = await db.getformheadercodes.SQL(id);

          // return the recordset object
          return res.recordset;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
