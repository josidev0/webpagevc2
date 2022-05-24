"use strict";

/**
 * A set of functions called "actions" for `all-docs`
 */

module.exports = {
  async findAll(ctx, next) {
    try {
      const data = await strapi.service("api::all-docs.all-docs").allDocs();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("All docs controller error", { moreDetails: err });
    }
  },
};
