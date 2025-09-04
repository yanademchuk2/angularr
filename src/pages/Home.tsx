<<<<<<< HEAD
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
=======
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our React application!</p>
    </div>
  );
}
>>>>>>> dfb1a47c5086ad1bc37f5a4635dae4878d66ff69
