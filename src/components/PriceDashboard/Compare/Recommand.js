import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { Horizontal, Vertical } from "../../../style/CommunalStyle";
import { pxToRem } from "../../../theme/typography";
import { formatSignedNumber, formatToKRW } from "../../../utils/utils";
import TrendUp from "../../../assets/trendingUp.svg";
import NonImg from "../../../assets/NonImg.png";

export default function Recommand(props) {
  const { info } = props;

  return (
    <Container sx={{ mr: "20px" }}>
      <Horizontal
        sx={{
          justifyContent: "space-between",
          pb: "15px",
          borderBottom: "1px solid rgba(213, 213, 213, 0.39)",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box
            component="img"
            src={
              info.cropsImage?.startsWith("https") ? info.cropsImage : NonImg
            }
            alt="작물 이미지"
            sx={{ width: "32px", height: "32px", mr: "20px" }}
          />
          <Vertical>
            <Typography variant="subtitle" sx={{ mb: "8px" }}>
              {info.cropName}
            </Typography>
            <Typography
              variant="title"
              sx={{ fontSize: pxToRem(28), mb: "5px" }}
            >
              {formatToKRW(info.cropPrice)}{" "}
              <Typography variant="subtitle" sx={{ color: "#636466" }}>
                원
              </Typography>
            </Typography>
            <Horizontal sx={{ alignItems: "center" }}>
              <Box component="img" src={TrendUp} />
              <Typography
                variant="subtitle"
                sx={{ color: "#606060", m: "0 5px" }}
              >
                어제보다
              </Typography>
              <Typography variant="sub">
                {formatSignedNumber(info.increaseRate)}%
              </Typography>
            </Horizontal>
          </Vertical>
        </Box>
        <Typography variant="sub">{info.cropCategory}</Typography>
      </Horizontal>
      <Typography
        variant="sub"
        sx={{ textAlign: "center", mt: "10px", cursor: "pointer" }}
        onClick={() =>
          (window.location.href = `/forecast?crop=${info.cropName}`)
        }
      >
        더 알아보기 &gt;
      </Typography>
    </Container>
  );
}

const Container = styled(Vertical)`
  padding: 16px;
  height: 160px;
  width: ${pxToRem(360)};
  flex-shrink: 0;
  padding: 10px;
  /* border: 0.5px solid rgba(213, 213, 213, 0.39); */
  border-radius: 4px;
  background: #fff;
  /* card */
  box-shadow: 0px 4px 40.9px 0px rgba(0, 0, 0, 0.05);
`;
