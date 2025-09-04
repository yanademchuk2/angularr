import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

export const Home = () => {
  const { t } = useLanguage();

  return (
    <div>
      <LanguageSwitcher />
      <h1>{t("hello")}</h1>
      <p>{t("welcome")}</p>
    </div>
  );
};
