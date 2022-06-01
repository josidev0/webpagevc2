"use strict";

/**
 * dv-carousel service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::event.event", ({ strapi }) => ({
  async reduceData() {
    try {
      const data = await strapi.entityService.findMany("api::event.event", {
        fields: ["id", "name", "url", "date", "time", "place", "description"],
        populate: {
          image: {
            fields: ["id", "name", "url"],
          },
        },
      });
      return data;
    } catch (err) {
      return err;
    }
  },
}));
