import React from "react";

interface SectionBlockProps {
  title: string;
  paragraphs: string[];
  image: string;
  reverse: boolean;
}

const SectionBlock: React.FC<SectionBlockProps> = ({
  title,
  paragraphs,
  image,
  reverse,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row w-full h-fit shadow-2xl ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image - full width, no padding */}
      <div className="w-full md:w-1/2">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Text Block */}
      <div
        className={`w-full md:w-1/2 flex items-center justify-center shadow-2xl bg-white px-6 md:px-12 py-10 text-brown-text text-center`}
      >
        <div className={`max-w-xl`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
          {paragraphs.map((para, idx) => (
            <p key={idx} className="mb-4 text-base md:text-xl leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionBlock;
