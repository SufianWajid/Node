"use strict";

module.exports.register = async (server) => {
  server.route({
    method: "POST",
    path: "/api/events",

    config: {
      handler: async (request) => {
        try {
          // get the sql client registered as a plugin
          const db = request.server.plugins.sql.client;

          // TODO: Get the current authenticate user's ID
          const Id = 1;
          const { text } = request.payload;
          console.log(text);

          function rowObj(NAM, Code, date) {
            this.NAM = NAM;
            this.Code = Code;
            this.date = date;
          }

          let d = text.date;

          d =
            d.getFullYear() +
            "-" +
            ("00" + (d.getMonth() + 1)).slice(-2) +
            "-" +
            ("00" + d.getDate()).slice(-2) +
            " " +
            ("00" + d.getHours()).slice(-2) +
            ":" +
            ("00" + d.getMinutes()).slice(-2) +
            ":" +
            ("00" + d.getSeconds()).slice(-2);

          var obj = new rowObj(text.NAM, text.Code, text.date);

          console.log("d : " + d);
          console.log(obj);

          // execute the query
          const res = await db.events.getEvents(obj);

          // return the recordset object
          return "Record Inserted";
        } catch (err) {
          console.log(err);
        }
      },
    },
  });
};
