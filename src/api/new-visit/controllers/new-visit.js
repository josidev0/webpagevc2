"use strict";

/**
 * A set of functions called "actions" for `new-visit`
 */

module.exports = {
  async addVisit() {
    const response =
        await strapi.db.query("api::visit-counter.visit-counter").findOne({
          select : [ "id", "visits" ],
          where : {id : 1},
        });

    const update =
        await strapi.query("api::visit-counter.visit-counter").update({
          where : {id : response?.id || "1"},
          data : {visits : parseInt(response.visits) + 1},
        });

    response["new-visits"] = update?.visits;

    return response;
  },
};
