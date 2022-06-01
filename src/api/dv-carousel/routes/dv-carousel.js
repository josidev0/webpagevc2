"use strict";

/**
 * dv-carousel router.
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/dv-carousel",
      handler: "dv-carousel.findAll",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
