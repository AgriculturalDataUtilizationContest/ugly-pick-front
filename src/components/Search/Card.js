import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { Vertical } from "../../style/CommunalStyle";
import NonImg from "../../assets/NonImg.png";

export default function Card({ info, num }) {
  const { cropsImage, cropName, cropCategory } = info;
  return (
    <Container sx={{ left: `${num * 300 + 500}px` }}>
      <RankBadge>{num + 1}</RankBadge>

      <EmojiBox
        component="img"
        src={cropsImage?.startsWith("https") ? cropsImage : NonImg}
      />

      <Vertical textAlign="center" mt={1}>
        <Typography variant="subtitle">{cropName}</Typography>
        <Typography variant="caption" color="gray">
          {cropCategory}
        </Typography>
      </Vertical>

      <MoreBox>
        <Typography variant="caption" color="gray">
          더 알아보기 &gt;
        </Typography>
      </MoreBox>
    </Container>
  );
}

const Container = styled(Box)(({ theme }) => ({
  width: "280px",
  height: "250px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
  padding: "16px 12px 12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  cursor: "pointer",
}));

const RankBadge = styled(Box)`
  background-color: #2c9777;
  color: white;
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 14px;
  font-weight: 700;
`;

const EmojiBox = styled(Box)`
  height: 100px;
  border: 0.5px solid #e5f4f0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MoreBox = styled(Box)(() => ({
  borderTop: "1px solid #F1F1F1",
  marginTop: "12px",
  paddingTop: "8px",
  width: "100%",
  textAlign: "center",
}));
