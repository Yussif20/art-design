import { useTranslation } from "react-i18next";
import SectionBlock from "../components/SectionBlock";

const Values = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const visionParagraphs = t("values.visionParagraphs", {
    returnObjects: true,
  }) as string[];

  const missionParagraphs = t("values.missionParagraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="values" className="w-full">
      <SectionBlock
        title={t("values.visionTitle")}
        paragraphs={visionParagraphs}
        image="/hero.jpg" // replace with your actual image
        reverse={!isArabic}
      />
      <SectionBlock
        title={t("values.missionTitle")}
        paragraphs={missionParagraphs}
        image="/hero.jpg" // replace with your actual image
        reverse={!isArabic}
      />
    </section>
  );
};

export default Values;
