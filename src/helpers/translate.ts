import i18next from "i18next";
import Backend from "i18next-chained-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import XHR from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

i18next
  .use(Backend)
  .use(initReactI18next)
  .init(
    {
      backend: {
        backends: [
          LocalStorageBackend, // primary
          XHR // fallback
        ],
        backendOptions: [
          {
            // prefix for stored languages
            prefix: "dashboard_",

            // expiration
            expirationTime: 7 * 24 * 60 * 60 * 1000,

            // can be either window.localStorage or window.sessionStorage. Default: window.localStorage
            store: window.localStorage
          },
          {
            loadPath: "/locales/{{lng}}/{{ns}}.json" // xhr load path for my own fallback
          }
        ]
      },
      fallbackLng: "fa",
      debug: true,
      ns: ["public", "home"],
      defaultNS: "public"
    },
    (err, t) => {
      if (err) return console.log("something went wrong loading", err);
      t("key"); // -> same as i18next.t
    }
  );

export default i18next;
