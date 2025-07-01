import React from "react";

export const LineRoundedPassword = ({ color = "#4A3AFF", className }) => {
  return (
    <svg
      className={`line-rounded-password ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M14.1667 7.61627H5.83333C4.68274 7.61627 3.75 8.54901 3.75 9.69961V15.9496C3.75 17.1002 4.68274 18.0329 5.83333 18.0329H14.1667C15.3173 18.0329 16.25 17.1002 16.25 15.9496V9.69961C16.25 8.54901 15.3173 7.61627 14.1667 7.61627Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />

      <path
        className="path"
        d="M10 1.36627C8.89493 1.36627 7.83513 1.80526 7.05372 2.58666C6.27232 3.36806 5.83334 4.42787 5.83334 5.53294V7.61627H14.1667V5.53294C14.1667 4.42787 13.7277 3.36806 12.9463 2.58666C12.1649 1.80526 11.1051 1.36627 10 1.36627V1.36627Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
};