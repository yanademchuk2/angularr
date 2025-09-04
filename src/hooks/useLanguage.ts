import { useLanguageContext } from "../context/LanguageContext";

const translations: Record<string, Record<string, string>> = {
  hello: { ua: "Привіт", en: "Hello" },
  welcome: { ua: "Ласкаво просимо", en: "Welcome" },
};

export const useLanguage = () => {
  const { language } = useLanguageContext();

  const t = (key: string) => translations[key]?.[language] || key;

  return { language, t };
};
