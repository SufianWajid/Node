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

          function rowObj(NAM, Code, date, currentUser) {
            this.NAM = NAM;
            this.Code = Code;
            this.date = date;
            this.currentUser = currentUser;
          }

          function _base64ToArrayBuffer(base64) {
            var binary_string = window.atob(base64);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
              bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
          }

          var audio64 = text.Code;
          var audioBian = _base64ToArrayBuffer(text.Code);
          if (audio64 == "0") {
            audioBian = null;
          }

          var obj = new rowObj(
            text.NAM,
            audioBian,
            text.date,
            text.currentUser
          );

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
