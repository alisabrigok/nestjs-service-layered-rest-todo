import i18n = require("i18n");

i18n.configure({
  locales: ["en", "tr"],
  directory: __dirname + "/../locales",
  defaultLocale: "en",
  objectNotation: true,
  updateFiles: false,
});

export default i18n;
