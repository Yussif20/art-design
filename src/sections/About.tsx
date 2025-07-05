import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const About = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic]);

  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];

  return (
    <section
      id="about-us"
      className={`px-6 py-20 max-w-4xl mx-auto text-center `}
    >
      <h2 className="text-3xl font-bold mb-6 text-brown-text">
        {t("about.header")}
      </h2>
      <div className="space-y-4 text-brown-text leading-relaxed text-lg">
        {paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
