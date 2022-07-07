'use strict';

/**
 * auditorio service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auditorio.auditorio');
