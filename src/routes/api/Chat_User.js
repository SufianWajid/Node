"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/chat_user",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          //   // TODO: Get the current authenticate user's ID
          var params = request.query;

          //   const { text } = request.payload;

          //   // execute the query
          const res = await db.userchat.UserChatSQL(params);

          var result = [];

          res.recordset.forEach(async (element) => {
            let u = {
              id: element.Id,
              name: element.UserName,
            };

            result.push(u);
          });

          // return the recordset object
          return result;
        } catch (err) {
          return false;
        }
      },
    },
  });
};
