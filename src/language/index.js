import Vue from "vue";
import VueI18n from "vue-i18n";
import storage from "@/assets/js/localstorage";

Vue.use(VueI18n);

const DEFAULT_LANG = "zh";
const LOCALE_KEY = "localeLanguage";

const locales = {
  zh: require("./zh.json"),
  en: require("./en.json"),
};

const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  messages: locales,
});

export const steup = (lang) => {
  if (lang === undefined) {
    lang = storage.fetch(LOCALE_KEY);
    if (locales[lang] === undefined) {
      lang = DEFAULT_LANG;
    }
  }

  storage.save(LOCALE_KEY, lang);

  Object.keys(locales).forEach((lang) => {
    document.body.classList.remove(`lang-${lang}`);
  });
  document.body.classList.add(`lang-${lang}`);
  document.body.setAttribute("lang", lang);

  Vue.config.lang = lang;
  i18n.locale = lang;
};

const init = Vue.prototype._init;
Vue.prototype._init = function(options) {
  init.call(this, {
    i18n,
    ...options,
  });
};

steup();
window.i18n = i18n;

export default i18n;
