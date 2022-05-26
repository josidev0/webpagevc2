"use strict";

/**
 * dv-carousel service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::dv-carousel.dv-carousel",
  ({ strapi }) => ({
    async reduceData() {
      try {
        const data = await strapi.entityService.findMany(
          "api::dv-carousel.dv-carousel",
          {
            populate: {
              images: {
                fields: ["id", "name", "url"],
              },
            },
          }
        );
        return data;
      } catch (err) {
        return err;
      }
    },
  })
);
