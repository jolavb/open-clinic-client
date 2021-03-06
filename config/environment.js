/* jshint node: true */

module.exports = function (environment) {
  'use strict';
  const ENV = {
    modulePrefix: 'open-clinic-client',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    apiHost: 'http://localhost:3000/',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    ENV.rootURL = '/open-clinic-client';
    ENV.locationType = 'hash';
    ENV.apiHost = 'http://production.79uggubqnv.us-east-2.elasticbeanstalk.com';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootUrl = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.rootURL = '/open-clinic-client';
    ENV.locationType = 'hash';
    ENV.apiHost = 'https://openclinic.link';
  }

  return ENV;
};
