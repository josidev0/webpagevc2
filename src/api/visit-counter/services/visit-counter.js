"use strict";

/**
 * visit-counter service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::visit-counter.visit-counter");
