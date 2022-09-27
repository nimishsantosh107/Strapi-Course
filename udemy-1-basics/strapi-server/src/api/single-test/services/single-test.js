'use strict';

/**
 * single-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::single-test.single-test');
