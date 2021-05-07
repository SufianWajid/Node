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

          function rowObj(
            order,
            NAM,
            Code,
            date,
            currentUser,
            detail,
            old,
            picture64,
            person
          ) {
            this.order = order;
            this.NAM = NAM;
            this.Code = Code;
            this.date = date;
            this.currentUser = currentUser;
            this.detail = detail;
            this.old = old;
            this.picture64 = picture64;
            this.person = person;
          }
          function person(name) {
            this.name = name;
          }

          let old = text.old;
          if (old == null) {
            old = text.NAM;
          }

          var obj = new rowObj(
            text.order,
            text.NAM,
            text.Code,
            text.date,
            text.currentUser,
            text.detail,
            old,
            text.picture64,
            new person(text.person.name)
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
