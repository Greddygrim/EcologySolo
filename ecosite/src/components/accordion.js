import React, { useState } from "react";

export const Accordion = (text, childText) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="accordion">
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {text}
      </div>
      <div
        style={{
          display: toggle ? "block" : "none",
        }}
      >
        {childText}
      </div>
    </div>
  );
};
