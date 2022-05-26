"use strict";

/**
 *  multimedia controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::multimedia.multimedia",
  ({ strapi }) => ({
    async findAll(ctx, next) {
      try {
        const data = await strapi
          .service("api::multimedia.multimedia")
          .reduceData();
        ctx.body = data;
      } catch (err) {
        ctx.badRequest("Nav controller error", { moreDetails: err });
      }
    },
  })
);
