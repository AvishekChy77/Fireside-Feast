import React from "react";

const SectionHeader = ({ heading, subheading }) => {
  return (
    <div className=" text-center my-10">
      <p className=" text-[#D99904] italic text-lg">---{subheading}---</p>
      <h2 className=" text-4xl border-y-2 mt-2 py-2 max-w-fit mx-auto">
        {heading}
      </h2>
    </div>
  );
};

export default SectionHeader;
