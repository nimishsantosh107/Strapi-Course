'use strict';

/**
 * single-array service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::single-array.single-array');
