'use strict';

/**
 *  visit-counter controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::visit-counter.visit-counter');
