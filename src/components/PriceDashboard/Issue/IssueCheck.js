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
import { getLinkPreviewInfo, getRecentIssue } from "../../../api/api";
import { getCropEngName } from "../../../utils/utils";

export default function IssueCheck({ crop }) {
  const [issueInfo, setIssueInfo] = useState(null);
  const [newsInfo, setNewsInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const issueResponse = await getRecentIssue(getCropEngName(crop));
      setIssueInfo(issueResponse);

      const slicedNews = issueResponse.news.slice(0, 5);
      const newsResponse = await getLinkPreviewInfo(slicedNews);
      setNewsInfo(newsResponse);
      console.log(newsResponse);
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

            <Vertical sx={{ mt: "20px", gap: "10px" }}>
              <Typography variant="body2" fontWeight="bold">
                최근 이슈 키워드 한눈에 보세요
              </Typography>
              <Typography variant="caption" color="gray">
                2025년 8월 기준, 오른쪽 키워드 리스트와 함께 빠르게 체크해보세요{" "}
                <br />
                이슈 키워드는 매주 월요일에 업데이트 됩니다.
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
          {!newsInfo || newsInfo.length === 0 ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
              }}
            >
              <CircularProgress />
            </div>
          ) : (
            newsInfo.map((item, idx) => <NewsCard key={idx} news={item.data} />)
          )}
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

const NewsCard = ({ news }) => {
  return (
    <Horizontal
      sx={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        padding: "12px",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => (window.location.href = news.url)}
    >
      <Box
        component="img"
        src={news.image || NonImg}
        sx={{ width: "70px", height: "70px", borderRadius: "8px", mr: "12px" }}
      />
      <Vertical sx={{ flex: 1 }}>
        <Typography variant="subtitle">
          {news.title.length > 15
            ? `${news.title.slice(0, 15)}...`
            : news.title}
        </Typography>
        <Typography
          variant="caption"
          sx={{ textAlign: "right", color: "#636363", cursor: "pointer" }}
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
