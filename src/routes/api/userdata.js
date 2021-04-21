"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "POST",
    path: "/api/userdata",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          //   // TODO: Get the current authenticate user's ID
          // var user = request.query;
          // console.log("request : " + user.user);
          // const userId = user.user;

          const { data } = request.payload;
          console.log(data);

          //   // execute the query
          const res = await db.userdata.getuserlist();

          // return the recordset object
          return "record set";
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
