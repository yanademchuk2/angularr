import React from "react";
import { useLanguageContext } from "../context/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageContext();

  return (
    <div>
      <button onClick={() => setLanguage("ua")} disabled={language === "ua"}>
        UA
      </button>
      <button onClick={() => setLanguage("en")} disabled={language === "en"}>
        EN
      </button>
    </div>
  );
};
