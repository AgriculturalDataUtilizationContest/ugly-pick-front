// UhiIssueCheck.jsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  styled,
} from "@mui/material";
import { Vertical, Horizontal } from "../../../style/CommunalStyle";
import NonImg from "../../../assets/NonImg.png";
import { getRecentIssue } from "../../../api/api";
import { getCropEngName } from "../../../utils/utils";

export default function IssueCheck({ crop }) {
  const [issueInfo, setIssueInfo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRecentIssue(getCropEngName(crop));
      setIssueInfo(response);
    };
    fetchData();
  }, [crop]);
  return !issueInfo ? (
    <Vertical
      sx={{ height: "100vh", alignItems: "center", justifyContent: "center" }}
    >
      <CircularProgress />
    </Vertical>
  ) : (
    <Vertical sx={{ position: "relative", gap: "30px" }}>
      {/* 상단 타이틀 */}
      <Vertical sx={{ gap: "10px" }}>
        <Typography variant="title">농산물 이슈, 한눈에 확인!</Typography>
        <Typography variant="caption">
          A급 상품과 비교해보세요. <br />
          못난이 농산물이 얼마나 경제적인 선택인지 한눈에 확인할 수 있어요.
        </Typography>
      </Vertical>

      {/* 좌측 영역: 이슈 체크박스 */}
      <Horizontal sx={{ justifyContent: "space-between" }}>
        <Box sx={{ flex: 1, pr: "30px" }}>
          <IssueBox>
            <PointerLabel>
              <Typography
                variant="subtitle"
                sx={{ color: "white", fontWeight: 700 }}
              >
                Uh! Issue Check
              </Typography>
            </PointerLabel>

            <Vertical sx={{ mt: "40px", gap: "10px" }}>
              <Typography variant="body2" fontWeight="bold">
                최근 이슈 키워드 한눈에 보세요
              </Typography>
              <Typography variant="caption" color="gray">
                2025년 7월 기준, 오른쪽 키워드 리스트와 함께 빠르게 체크해보세요
              </Typography>

              <Vertical
                sx={{
                  backgroundColor: "#f5f5f5",
                  p: "20px",
                  borderRadius: "8px",
                  gap: "10px",
                  maxHeight: "400px",
                  overflow: "auto",
                }}
              >
                <Box>
                  <Typography variant="caption">
                    {issueInfo.cropIssue}
                  </Typography>
                </Box>
              </Vertical>

              {/* 워드클라우드 자리는 비워둠 */}
              <WordCloudPlaceholder>
                <Box
                  component="img"
                  src={JSON.parse(issueInfo.wordCloud)[0]}
                  alt="Word Cloud"
                />
              </WordCloudPlaceholder>
            </Vertical>
          </IssueBox>
        </Box>

        {/* 우측 뉴스 영역 */}
        <Vertical
          sx={{
            width: "360px",
            gap: "10px",
            maxHeight: "600px",
            overflow: "auto",
          }}
        >
          <GreenBtn>관련 뉴스 기사를 찾아보세요!</GreenBtn>
          {issueInfo.news.map((item, idx) => (
            <NewsCard key={idx} news={item} />
          ))}
        </Vertical>
      </Horizontal>
    </Vertical>
  );
}

const IssueBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: "30px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
  position: "relative",
}));

const PointerLabel = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "8px 18px",
  clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
  position: "absolute",
  top: "-18px",
  left: "12px",
}));

const GreenBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  fontWeight: "bold",
  padding: "12px",
  fontSize: "15px",
}));

const NewsCard = ({ img, title, desc, news }) => {
  return (
    <Horizontal
      sx={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        padding: "12px",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={img || NonImg}
        sx={{ width: "70px", height: "70px", borderRadius: "8px", mr: "12px" }}
      />
      <Vertical sx={{ flex: 1 }}>
        <Typography variant="body2" fontWeight="bold" noWrap>
          {title}
        </Typography>
        <Typography variant="caption" color="gray" noWrap>
          {desc}
        </Typography>
        <Typography
          variant="caption"
          sx={{ textAlign: "right", color: "#007BFF", cursor: "pointer" }}
        >
          더 알아보기 &gt;
        </Typography>
      </Vertical>
    </Horizontal>
  );
};

const WordCloudPlaceholder = styled(Box)(() => ({
  height: "180px",
  backgroundColor: "#fafafa",
  // border: "1px dashed #ccc",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px",
  color: "gray",
}));
