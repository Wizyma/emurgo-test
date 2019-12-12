import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translations from './language';

const resources = Object.keys(translations)
.map(key => ({
  lang: key, 
  // @ts-ignore
  resource: translations[key],
})).map(({ lang, resource }) => ({
  [lang]: {
    translation: {
      ...resource,
    }
  }
})).reduce((obj, current) => {
  const key = Object.keys(current)[0];
  return {
  ...obj,
  [key]: current[key],
  }
}, {})

// @ts-ignore
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    keySeparator: "*",
    fallbackLng: "en",
    interpolation: {
      escapeValue: true
    },
    react: {
      useSuspense: false,
    }
  });

  export default i18n;
