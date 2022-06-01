"use strict";

/**
 *  dv-carousel controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  async findAll(ctx, next) {
    try {
      const data = await strapi.service("api::event.event").reduceData();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Events controller error", { moreDetails: err });
    }
  },
}));
