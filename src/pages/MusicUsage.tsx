import React from "react";
import PageTitle from "../components/PageTitle";
import ParagraphSection from "../components/ParagraphSection";
import { MusicUsageData } from "../musicusagedata/musicusagedata";

function MusicUsage() {
  return (
    <>
      {/* Background */}
      <div
        className="h-screen w-screen bg-show4 fixed -z-50
                   bg-cover bg-no-repeat bg-[70%] md:bg-center"
      />
      <div className="grid place-items-center animate-fadeInSlide mb-16">
        {/* Title */}
        <PageTitle title={"Music Usage"} />

        {/* General Info */}
        <ParagraphSection
          title={MusicUsageData[0].title}
          text={MusicUsageData[0].text}
          code={MusicUsageData[0].code}
        />

        <span
          className="w-80 md:w-96
                        h-[1px] bg-gray-500"
        />

        {/* How To Credit */}
        <ParagraphSection
          title={MusicUsageData[1].title}
          text={MusicUsageData[1].text}
          code={MusicUsageData[1].code}
        />

        <span
          className="w-80 md:w-96 md:my-8
                        h-[1px] bg-gray-500"
        />

        {/* Custom Maps/Charts for Rhythm Games */}
        <ParagraphSection
          title={MusicUsageData[2].title}
          text={MusicUsageData[2].text}
          code={MusicUsageData[2].code}
        />

        <span
          className="w-80 md:w-96 md:my-8
                        h-[1px] bg-gray-500"
        />

        {/* FAQ */}
        <div
          className="w-96 px-4 md:w-[36rem] lg:w-[48rem] xl:w-[64rem]
          text-sm md:text-lg space-y-4 md:space-y-8
          my-12 text-justify justify-center"
        >
          <h2
            className="text-3xl md:text-5xl
                font-bold"
          >
            FAQ
          </h2>
        </div>
      </div>
    </>
  );
}

export default MusicUsage;
