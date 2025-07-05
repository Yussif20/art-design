import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      hero: {
        designSteps: "Design ‐ Execution - Supervision",
        quote: [
          "Every space has a voice, and",
          "our mission is to let the",
          "world hear its story",
        ],
        author: "ENG: ATHEER ABDULRHMAN",
        about: "ABOUT US",
        arrow: "→",
      },
      about: {
        header: "About Us",
        paragraphs: [
          "Art of Design Details | A story we tell through spaces. Since our launch in 2022, we’ve focused on blending refined taste, clear vision, and precise execution to transform spaces into vibrant works of art.",
          "We offer integrated services in interior design, execution, furnishing, and providing exclusive accessories that reflect our clients’ tastes.",
          "And the unique details of their identity.",
          "We serve a wide range of clients including real estate companies, commercial projects, establishments, companies, and individuals. Our mark has been left on many interior design and execution projects including villas, apartments, and offices.",
          "At Art Design Details, we believe every space tells a story—and our mission is to tell it in the most beautiful way.",
        ],
      },
      values: {
        visionTitle: "Our Vision",
        visionParagraphs: [
          "Art Design aims to deliver interior design services that blend creativity with high quality, focusing on fine details that elevate every space into elegance and function. We strive to create refined environments that provide users with a luxurious, comfortable experience using innovative design, execution, and furnishing solutions tailored to all tastes and needs.",
          "We believe creativity is at the heart of every successful project—it gives interior designs a unique personality full of beauty and excellence, leaving a signature that exceeds expectations.",
        ],
        missionTitle: "Our Mission",
        missionParagraphs: [
          "We believe interior design is not just space organization, but a visual language that weaves daily life details into harmony between beauty and function. We focus on offering innovative solutions that reflect our clients’ personalities and meet practical needs with elegant touches that enhance quality of life.",
          "We work with passion and creativity to give every space a unique identity marked by our signature and beyond expectations.",
        ],
      },
      footer: {
        location: {
          title: "LOCATION",
          address: "Riyadh - Al-Aqiq",
        },
        hours: {
          title: "BUSINESS HOURS",
          days: [
            "Sunday: 9am – 5pm",
            "Monday: 9am – 5pm",
            "Tuesday: 9am – 5pm",
            "Wednesday: 9am – 5pm",
            "Thursday: 9am – 5pm",
          ],
        },
        social: {
          title: "GET SOCIAL",
        },
      },
    },
  },
  ar: {
    translation: {
      hero: {
        designSteps: "ﺗﺼﻤﻴﻢ ‐ تنفيذ - اشراف",
        quote: ["لكل مساحة صوت، ومهمتنا أن", "نجعل العالم يسمع حكايتها"],
        author: "المهندسة: اثير عبدالرحمن",
        about: "عنا",
        arrow: "←",
      },
      about: {
        header: "من نــحـن",
        paragraphs: [
          "فن تفاصيل التصميم | فن نحكيه من خلال المساحات منذ انطلاقتنا في عام 2022، في فن تفاصيل التصميم حرصنا على أن نجمع بين الذوق الرفيع، والرؤية الواضحة، والتنفيذ المتقن لنحوّل المساحات إلى تحف فنية تنبض بالحياة",
          "نقدم خدمات متكاملة في التصميم الداخلي، التنفيذ، التأثيث وتوفير الإكسسوارات الحصرية التي تعكس ذوق عملائنا",
          "وتفاصيل هويتهم",
          "نخدم شريحة واسعة من العملاء تشمل الشركات العقارية، المشاريع التجارية ، المنشآت والشركات ، والأفراد ، وتركنا بصمتنا في أكثر من مشروع تصميم داخلي ومجموعة متنوعة من مشاريع التنفيذ من الفلل والشقق والمكاتب",
          "في فن تفاصيل التصميم ، نؤمن أن كل مساحة تروي قصة، ومهمتنا أن نرويها بأجمل طريقة",
        ],
      },
      values: {
        visionTitle: "رؤيتنا",
        visionParagraphs: [
          "تسعى شركة فن تفاصيل التصميم إلى تقديم خدمات التصميم الداخلي التي تجمع بين الإبداع والجودة العالية، مع التركيز على التفاصيل الدقيقة التي ترتقي بكل مساحة إلى مستوى من الأناقة والعملية و نهدف إلى ابتكار بيئات داخلية تعكس ذوقًا رفيعًا وتمنح مستخدميها تجربة راقية ومريحة، من خلال حلول تصميم وتنفيذ وتأثيث مبتكرة تلبي مختلف الأذواق والاحتياجات.",
          "نؤمن بأن الإبداع هو جوهر كل مشروع ناجح، فهو ما يمنح التصاميم الداخلية شخصية فريدة تنبض بالجمال والتميز، ليبقى كل مشروع بصمة استثنائية تتجاوز التوقعات",
        ],
        missionTitle: "رسالتنا",
        missionParagraphs: [
          "نؤمن بأن التصميم الداخلي ليس مجرد تنسيق للمساحات، بل هو لغة تعبيرية تنسج تفاصيل الحياة اليومية بأسلوب يحقق الانسجام بين الجمال والوظيفة ، نحرص على تقديم حلول مبتكرة تعكس شخصية عملائنا، وتلبي احتياجاتهم العملية مع لمسات أنيقة تعزز من جودة الحياة",
          "نعمل بشغف وإبداع لنمنح كل مساحة هوية متفردة، تحمل توقيعنا الخاص وتفوق توقعات عملائنا",
        ],
      },
      footer: {
        location: {
          title: "الموقع",
          address: "الرياض - حي العقيق",
        },
        hours: {
          title: "ساعات العمل",
          days: [
            "الأحد: 9 صباحاً – 5 مساءً",
            "الاثنين: 9 صباحاً – 5 مساءً",
            "الثلاثاء: 9 صباحاً – 5 مساءً",
            "الأربعاء: 9 صباحاً – 5 مساءً",
            "الخميس: 9 صباحاً – 5 مساءً",
          ],
        },
        social: {
          title: "تواصل معنا",
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
