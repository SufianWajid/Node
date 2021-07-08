"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/deletetestdatadetails",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          var params = request.query;
          const UserName = params.UserName;
          const NAMTextTestData = params.NAMTextTestData;
          const CreateDateTestData = params.CreateDateTestData;

          // execute the query
          const res = await db.deletetestdatadetails.SQL(
            UserName,
            NAMTextTestData,
            CreateDateTestData
          );

          // return the recordset object
          return "Record Deleted";
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
