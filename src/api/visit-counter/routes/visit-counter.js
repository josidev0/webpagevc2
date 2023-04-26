'use strict';

/**
 * visit-counter router.
 */

const {createCoreRouter} = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::visit-counter.visit-counter');
