"use strict";

/**
 * multimedia router.
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/multimedia",
      handler: "multimedia.findAll",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
