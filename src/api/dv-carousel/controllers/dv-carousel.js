"use strict";

/**
 *  dv-carousel controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::dv-carousel.dv-carousel",
  ({ strapi }) => ({
    async findAll(ctx, next) {
      try {
        const data = await strapi
          .service("api::dv-carousel.dv-carousel")
          .reduceData();
        ctx.body = data;
      } catch (err) {
        ctx.badRequest("DV carousel controller error", { moreDetails: err });
      }
    },
  })
);
