"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/chat_update",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          //   // TODO: Get the current authenticate user's ID
          var params = request.query;

          //   const { text } = request.payload;

          //   // execute the query
          const res = await db.updatechat.UpdateChatSQL();

          var result = [];

          res.recordset.forEach(async (element) => {
            let u = {
              text: element.Message,
              user: {
                _id: element.UserId,
                name: element.UserName,
                avatar: element.UserAvatar,
              },
              createdAt: element.createdAt,
              _id: element.id,
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
