import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const quoteLines = t("hero.quote", { returnObjects: true }) as string[];

  return (
    <section className="relative w-full h-[60vh] bg-cover bg-center text-white bg-[url(/hero.jpg)]">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Top Center Logo Text */}
      <div className="absolute top-8 w-full text-center space-y-1 z-10">
        <div className="font-en text-4xl md:text-6xl font-bold tracking-wider">
          A|D
        </div>
        <div className="font-en text-xl md:text-2xl tracking-widest">
          ART DESIGN
        </div>
        <div className="font-en text-sm md:text-lg uppercase">DETAILS</div>
        <div className="mt-2 text-sm md:text-md uppercase">
          {t("hero.designSteps")}
        </div>
      </div>

      {/* Center Quote Text */}
      <div className="absolute top-1/2  w-full px-4 md:px-8 z-10">
        <div
          className={`max-w-3xl text-white text-xl md:text-4xl leading-3 md:leading-7 tracking-normal md:tracking-wide uppercase font-semibold ${
            isArabic
              ? "md:text-right md:ml-auto text-center"
              : "md:text-left md:mr-auto text-center"
          }`}
        >
          {quoteLines.map((line, idx) => (
            <p key={idx} className="mb-2">
              {line}
            </p>
          ))}
        </div>
        <p
          className={`text-lg md:text-2xl opacity-90 ${
            isArabic
              ? "md:text-right md:ml-auto text-center"
              : "md:text-left md:mr-auto text-center"
          }`}
        >
          {t("hero.author")}
        </p>
      </div>
      {/* ABOUT US Link */}
      <a
        href="#about-us"
        className={`absolute bottom-10 z-10 flex items-center gap-2 border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition
          ${isArabic ? "left-4 md:left-10" : "right-4 md:right-10"}`}
      >
        {t("hero.about")}
        <span className="text-xl">{t("hero.arrow")}</span>
      </a>
    </section>
  );
};

export default Hero;
