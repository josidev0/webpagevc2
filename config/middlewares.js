module.exports = [
  "strapi::errors",
  "strapi::poweredBy",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["*"],
      headers: "*",
    },
  },
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": ["'self'", "cdn.jsdelivr.net", "blob:"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
