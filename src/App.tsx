import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Values from "./sections/Values";
import Footer from "./sections/Footer";

const App = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language;

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <main className={` ${currentLang === "ar" ? "font-ar" : "font-en"}`}>
        <Hero />
        <About />
        <Values />
      </main>
      <Footer />
    </>
  );
};

export default App;
