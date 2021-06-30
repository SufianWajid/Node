"use strict";

module.exports.register = function _callee(server) {
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          server.route({
            method: "GET",
            path: "/api/getformdetails",
            config: {
              handler: function handler(request) {
                var db, user, userId, res;
                return regeneratorRuntime.async(function handler$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        // get the sql client registered as a plugin
                        db = request.server.plugins.sql.client; //   // TODO: Get the current authenticate user's ID

                        user = request.query;
                        userId = user.user; //   const { text } = request.payload;
                        //   console.log(text);
                        //   // execute the query

                        _context.next = 6;
                        return regeneratorRuntime.awrap(db.getformdetails.SQL(userId));

                      case 6:
                        res = _context.sent;
                        return _context.abrupt("return", res.recordset);

                      case 10:
                        _context.prev = 10;
                        _context.t0 = _context["catch"](0);
                        console.log(_context.t0);

                      case 13:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, null, null, [[0, 10]]);
              }
            }
          });

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};