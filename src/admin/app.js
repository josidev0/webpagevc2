import favicon from "./extensions/icons/favicon.png";
import spanishTranslations from "./extensions/translations/es.json";

export default {
  config: {
    auth: {
      logo: favicon,
    },
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: [ "es" ],

    // Extend the translations
    translations: {
      es: spanishTranslations,
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: {release: false},
  },

  bootstrap() {},
};
