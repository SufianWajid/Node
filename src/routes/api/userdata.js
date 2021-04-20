"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/userdata",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql2.client;

          //   // TODO: Get the current authenticate user's ID
          // var user = request.query;
          // console.log("request : " + user.user);
          // const userId = user.user;

          //   const { text } = request.payload;
          //   console.log(text);

          //   // execute the query
          const res = await db.userdata.getuserlist();

          // return the recordset object
          return res.recordset;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
