"use strict";

/**
 * A set of functions called "actions" for `all-docs`
 */

module.exports = {
  async findAll(ctx, next) {
    try {
      const data = await strapi
        .service("api::all-magazines.all-magazines")
        .allMagazines();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("All magazines controller error", { moreDetails: err });
    }
  },
};
