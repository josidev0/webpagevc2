"use strict";

const { menuQuery, docsQuery } = require("../../../../utils/query");
const {
  MenuReducedData,
  DocsReducedData,
} = require("../../../../utils/reduced-data");

/**
 * all-docs service.
 */

module.exports = {
  navData: async () => {
    try {
      const data = await strapi.entityService.findMany(
        "api::menu.menu",
        menuQuery
      );
      return MenuReducedData(data);
    } catch (err) {
      return err;
    }
  },
};
