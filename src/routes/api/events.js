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
          const { text } = request.payload;
          console.log(text);

          function rowObj(
            Id,
            order,
            NAM,
            Code,
            date,
            currentUser,
            detail,
            picture64,
            person
          ) {
            this.Id = Id;
            this.order = order;
            this.NAM = NAM;
            this.Code = Code;
            this.date = date;
            this.currentUser = currentUser;
            this.detail = detail;
            this.picture64 = picture64;
            this.person = person;
          }
          function person(name) {
            this.name = name;
          }

          let person_name = "";
          if ("person" in text) {
            person_name = text.person.name;
          }

          var obj = new rowObj(
            text.Id,
            text.order,
            text.NAM,
            text.Code,
            text.date,
            text.user,
            text.detail,
            text.picture64,
            new person(person_name)
          );

          // execute the query
          const res = await db.events.getEvents(obj);

          // return the recordset object
          return "Record Inserted";
        } catch (err) {
          console.log(err);
          return err;
        }
      },
    },
  });
};
