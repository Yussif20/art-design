import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const switchLanguage = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };

  return (
    <button
      className="absolute top-5 right-5 cursor-pointer text-md bg-white/10 px-3 py-1 rounded"
      onClick={switchLanguage}
    >
      {isArabic ? "EN" : "AR"}
    </button>
  );
};

export default LanguageSwitcher;
