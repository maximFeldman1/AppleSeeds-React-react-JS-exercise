import React, { useState } from "react";

const Text = ({ items }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      {isReadMore ? items.text.slice(0, items.length) : items.text}
      <span style={{ color: "blue" }} onClick={toggleReadMore}>
        {isReadMore ? "...read more" : " show less"}
      </span>
    </div>
  );
};

export default Text;
