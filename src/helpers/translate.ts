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
          LocalStorageBackend,
          XHR
        ],
        backendOptions: [
          {
            prefix: "dashboard_",
            expirationTime: 7 * 24 * 60 * 60 * 1000,
            store: window.localStorage
          },
          {
            loadPath: "/locales/{{lng}}/{{ns}}.json"
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
      t("key");
    }
  );

export default i18next;
