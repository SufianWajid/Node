"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/deleteformheadercodebyid",

    config: {
      handler: async (request) => {
        try {
          const db = request.server.plugins.sql.client;

          var data = request.query;

          const id = data.id;
          const res = await db.deleteformheadercode.SQL(id);

          return true;
          // return res.recordset;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
