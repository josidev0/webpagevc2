"use strict";

/**
 * A set of functions called "actions" for `nav`
 */

module.exports = {
  async findAll(ctx, next) {
    try {
      const data = await strapi.service("api::nav.nav").navData();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Nav controller error", { moreDetails: err });
    }
  },
};
