import React from "react";

export const LineRoundedChevronDown = ({ className }) => {
  return (
    <svg
      className={`line-rounded-chevron-down ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4.16667 7.08334L10 12.9167L15.8333 7.08334"
        stroke="#211F54"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
};