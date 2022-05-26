"use strict";

/**
 * multimedia service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::multimedia.multimedia",
  ({ strapi }) => ({
    async reduceData() {
      try {
        const data = await strapi.entityService.findMany(
          "api::multimedia.multimedia",
          {
            fields: [
              "descripcion",
              "mision",
              "vision",
              "team",
              "attributions_responsibilities",
              "show_description",
              "show_team",
              "show_attributions",
            ],
          }
        );
        return data;
      } catch (err) {
        return err;
      }
    },
  })
);
