import spanishTranslations from "./extensions/translations/es.json";
import favicon from "./extensions/icons/favicon.png";
export default {
  config: {
    auth: {
      logo: favicon,
    },
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ["es"],
    theme: {
      colors: {
        alternative100: "#C6F6D5",
        alternative200: "#9AE6B4",
        alternative500: "#38A169",
        alternative600: "#2F855A",
        alternative700: "#276749",
        buttonNeutral0: "#ffffff",
        buttonPrimary500: "#38A169",
        buttonPrimary600: "#276749",
        danger100: "#fcecea",
        danger200: "#f5c0b8",
        danger500: "#ee5e52",
        danger600: "#d02b20",
        danger700: "#b72b1a",
        neutral0: "#ffffff",
        neutral100: "#f6f6f9",
        neutral1000: "#181826",
        neutral150: "#eaeaef",
        neutral200: "#dcdce4",
        neutral300: "#c0c0cf",
        neutral400: "#a5a5ba",
        neutral500: "#8e8ea9",
        neutral600: "#666687",
        neutral700: "#4a4a6a",
        neutral800: "#32324d",
        neutral900: "#212134",
        primary100: "#C6F6D5",
        primary200: "#9AE6B4",
        primary500: "#38A169",
        primary600: "#2F855A",
        primary700: "#276749",
        secondary100: "#eaf5ff",
        secondary200: "#b8e1ff",
        secondary500: "#66b7f1",
        secondary600: "#0c75af",
        secondary700: "#006096",
        success100: "#eafbe7",
        success200: "#c6f0c2",
        success500: "#5cb176",
        success600: "#328048",
        success700: "#2f6846",
        warning100: "#fdf4dc",
        warning200: "#fae7b9",
        warning500: "#f29d41",
        warning600: "#d9822f",
        warning700: "#be5d01",
      },
    },
    // Extend the translations
    translations: {
      es: spanishTranslations,
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() {},
};
