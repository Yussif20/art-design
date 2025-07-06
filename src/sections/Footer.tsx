import { useTranslation } from "react-i18next";
import { FaXTwitter, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <footer
      className={`bg-brown-footer text-white px-4 py-12 md:px-16 text-center md:${
        isArabic ? "text-right font-ar" : "text-left font-en"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-y-12 gap-x-8 ${
          isArabic ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Location */}
        <div className="w-full md:w-[30%]">
          <h3 className="text-lg md:text-xl font-medium mb-4">
            {t("footer.location.title")}
          </h3>
          <p>{t("footer.location.address")}</p>
        </div>

        {/* Business Hours */}
        <div className="w-full md:w-[30%]">
          <h3 className="text-lg md:text-xl font-medium mb-4">
            {t("footer.hours.title")}
          </h3>
          {(t("footer.hours.days", { returnObjects: true }) as string[]).map(
            (day, idx) => (
              <p key={idx}>{day}</p>
            )
          )}
        </div>

        {/* Social */}
        <div className="w-full md:w-[30%]">
          <h3 className="text-lg md:text-xl font-medium mb-4">
            {t("footer.social.title")}
          </h3>
          <ul className="space-y-2">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaXTwitter />
              <span>@AtheerAbdulrhmn</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaInstagram />
              <span>ad_artdesign1</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaPhone />
              <span>0502508949</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaEnvelope />
              <span>artdesigndetails18@gmail.com</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaEnvelope />
              <span>Artdetails78@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
