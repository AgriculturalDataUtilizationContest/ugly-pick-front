import { Box, styled, Typography, useTheme } from "@mui/material";
import React from "react";
import { Horizontal, Vertical } from "../../../style/CommunalStyle";
import Digit from "./Digit";

export default function DigitContainer(props) {
  const { price, topic } = props;
  const theme = useTheme();

  const getTopicInfo = () => {
    if (topic === "ugly price") {
      const topicInfo = {
        topicColor: theme.palette.primary.main,
        digitColor: theme.palette.primary.main,
        topicCategory: "UGLEE PRICE  못난이 농산물 소매가격",
      };
      return topicInfo;
    } else {
      const topicInfo = {
        topicColor: "#434343",
        digitColor: theme.palette.primary.black,
        topicCategory: "Market Price  시장 농산물 소매가격",
      };
      return topicInfo;
    }
  };

  const topicInfo = getTopicInfo();

  return (
    price && (
      <Vertical sx={{ mb: "25px" }}>
        <TopicContainer
          sx={{
            display: "inline-flex",
            justifyContent: "center",
            p: "7px",
            bgcolor: topicInfo.topicColor,
          }}
        >
          <Typography variant="support" sx={{ color: "white" }}>
            {topicInfo.topicCategory}
          </Typography>
        </TopicContainer>
        <Container>
          {Array.from({ length: 5 }, (_, i) => {
            const str = String(price);
            const pad = 5 - str.length;
            return i < pad ? "blank" : Number(str[i - pad]);
          }).map((digit, index) => (
            <Digit key={index} value={digit} color={topicInfo.digitColor} />
          ))}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "72px",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="sub"
              sx={{ fontSize: "11px", fontWeight: "600" }}
            >
              1kg/원(won)
            </Typography>
            <Typography variant="subtitle" sx={{ color: "#8E8E8E" }}>
              원(won)
            </Typography>
          </Box>
        </Container>
      </Vertical>
    )
  );
}

const TopicContainer = styled(Box)``;

const Container = styled(Horizontal)(({ theme }) => ({
  backgroundColor: theme.palette.primary.gray1,
  height: "125px",
  justifyContent: "center",
  alignItems: "center",
}));
