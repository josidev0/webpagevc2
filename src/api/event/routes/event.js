"use strict";

/**
 * dv-carousel router.
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/events",
      handler: "event.findAll",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
