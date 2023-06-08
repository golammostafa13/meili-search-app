import React from "react";
import DescriptionItem from "./DescriptionItem";

const Description = ({ item }) => {
  return (
    <div className="w-2/3">
      {Object.keys(item).map((title, idx) => {
        if (title === "id") return null;
        return <DescriptionItem title={title} value={item[title]} key={idx} />;
      })}
    </div>
  );
};

export default Description;
