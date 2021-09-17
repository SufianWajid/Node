"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/chat_send",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          //   // TODO: Get the current authenticate user's ID
          var params = request.query;

          //   const { text } = request.payload;

          var u = {
            text: params.text,
            user: {
              _id: params.User_id,
              name: params.User_name,
              avatar: params.User_avatar,
            },
            createdAt: params.createdAt,
            _id: params._id,
          };

          var setObject = {
            text: params.text,
            User_id: params.User_id,
            User_name: params.User_name,
            User_avatar: params.User_avatar,
            createdAt: params.createdAt,
            _id: params._id,
            SecondUser: params.SecondUser,
          };
          //   // execute the query
          const res = await db.sendchat.SendChatSQL(setObject);

          var result = [];

          // res.recordset.forEach(async (element) => {
          //   let u = {
          //     text: element.Message,
          //     user: {
          //       _id: element.UserId,
          //       name: element.UserName,
          //       avatar: element.UserAvatar,
          //     },
          //     createdAt: element.createdAt,
          //     _id: element.id,
          //   };

          //   result.push(u);
          // });

          // return the recordset object
          return true;
        } catch (err) {
          return false;
        }
      },
    },
  });
};
