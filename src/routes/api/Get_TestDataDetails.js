"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "GET",
    path: "/api/gettestdatadetails",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          //   // TODO: Get the current authenticate user's ID
          var params = request.query;

          const UserName = params.UserName;
          const NAMTextTestData = params.NAMTextTestData;
          const CreateDateTestData = params.CreateDateTestData;
          const FormHeaderID = params.FormHeaderID;
          const FormDetailsDisplayedText = params.FormDetailsDisplayedText;

          //   const { text } = request.payload;
          //   console.log(text);

          //   // execute the query
          const res = await db.gettestdatadetails.SQL(
            UserName,
            NAMTextTestData,
            CreateDateTestData,
            FormHeaderID,
            FormDetailsDisplayedText
          );

          // return the recordset object
          return res.recordset;
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
