"use strict";

const { docsQuery } = require("../../../../utils/query");
const { DocsReducedData } = require("../../../../utils/reduced-data");

/**
 * all-docs service.
 */

module.exports = {
  allMagazines: async () => {
    try {
      const data = await strapi.entityService.findMany(
        "api::magazine.magazine",
        {
          fields: ["id", "title", "url", "description"],
          populate: {
            cover: {
              fields: ["id", "url"],
            },
          },
        }
      );

      return data;
    } catch (err) {
      return err;
    }
  },
};
