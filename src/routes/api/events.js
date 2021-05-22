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

          let person_name = "";
          if ("person" in text) {
            person_name = text.person.name;
          }

          let datenew = new Date(text.date);

          var d1 = new Date();
          var d2 = new Date(datenew);

          d1 = d1.getDate() + d1.getMonth().toString() + d1.getFullYear();
          d2 = d2.getDate() + d2.getMonth().toString() + d2.getFullYear();
          if (d1 != d2) {
            datenew = new Date(datenew.setHours(datenew.getHours() + 24));
          }

          var obj = new rowObj(
            text.order,
            text.NAM,
            text.Code,
            datenew.toISOString(),
            text.user,
            text.detail,
            old,
            text.picture64,
            new person(person_name)
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
