import { useTheme } from "@mui/material";
import React from "react";
import { Digit as SegmentDigit } from "react-led-digit";

export default function Digit(props) {
  const { value, color } = props;

  const theme = useTheme();

  const green = theme.palette.primary.main;
  const gray = theme.palette.primary.gray1;

  let alignColor, alignValue;

  if (value === "blank") {
    alignValue = 0;
    alignColor = gray;
  } else {
    alignValue = value;
    alignColor = color === green ? green : "black";
  }

  return (
    props && (
      <div
        style={{
          padding: "10px 15px",
          borderRadius: "4px",
          backgroundColor: "#ffffff",
          margin: "7px",
        }}
      >
        <SegmentDigit
          value={alignValue}
          segmentStyle={{
            thickness: "6px",
            spacing: "1px",
            length: "25px",
            colorOff: green,
            color: alignColor,
          }}
        />
      </div>
    )
  );
}
