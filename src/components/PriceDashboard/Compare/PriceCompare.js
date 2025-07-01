import React, { useEffect, useState } from "react";
import { Vertical, Horizontal } from "../../../style/CommunalStyle";
import { Box, CircularProgress, Grid, styled, Typography } from "@mui/material";
import UglyPostImg from "../../../assets/UglyPost.svg";
import { formatToKRW, getCropEngName, KoreanDate } from "../../../utils/utils";
import { pxToRem } from "../../../theme/typography";
import { compareInfo } from "../../../utils/common";
import DigitContainer from "./DigitContainer";
import Recommand from "./Recommand";
import { fetchPriceCompareInfo } from "../../../api/api";

export default function PriceCompare({ crop, category }) {
  const todayDate = KoreanDate();
  const [priceInfo, setPriceInfo] = useState("");
  const [recommandList, setRecommandList] = useState([]);

  const [count, setCount] = useState(5);

  const handleInputValue = (e) => {
    const value = e.target.value;

    setCount(value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const priceData = await fetchPriceCompareInfo(
        getCropEngName(crop),
        "price"
      );
      setPriceInfo(priceData.data);

      const recommandData = await fetchPriceCompareInfo(category, "category");
      setRecommandList(recommandData.data.cropList);
    };
    fetchData();
  }, [crop, category]);

  return !priceInfo ? (
    <Vertical
      sx={{ height: "100vh", alignItems: "center", justifyContent: "center" }}
    >
      <CircularProgress />
    </Vertical>
  ) : (
    <Vertical>
      <Horizontal sx={{ mb: "43px" }}>
        <Typography variant="title" sx={{ marginRight: "30px" }}>
          {compareInfo.title}
        </Typography>
        <Typography variant="caption">{compareInfo.subtitle}</Typography>
      </Horizontal>
      <Grid
        container
        spacing={2}
        sx={{
          borderBottom: "1px solid rgba(213, 213, 213, 0.39)",
          pb: "30px",
        }}
      >
        <Grid size={{ md: 5 }}>
          <UglyPick>
            <UglyPost
              component="object"
              data={UglyPostImg}
              type="image/svg+xml"
              id="ugly-post"
            />
            <Typography variant="subtitle" sx={{ mb: "3px" }}>
              못난이 상품을 지금 사면 이만큼이나 절약할 수 있어요
            </Typography>
            <Typography variant="sub" sx={{ mb: "7px" }}>
              차액과 할인율을 확인해보세요
            </Typography>
            <Horizontal
              sx={{ alignItems: "flex-end", flexWrap: "wrap", mb: "60px" }}
            >
              <PriceWrapper>
                {priceInfo.difference}
                <Typography variant="unit" sx={{ marginLeft: "10px" }}>
                  원
                </Typography>
              </PriceWrapper>
              <PriceWrapper>
                {priceInfo.discountRate}
                <Typography variant="unit" sx={{ marginLeft: "10px" }}>
                  %
                </Typography>
              </PriceWrapper>
              <Typography
                variant="support"
                sx={{
                  color: "#27B06E",
                  mb: "5px",
                  cursor: "pointer",
                  mt: "5px",
                }}
              >
                내일의 가격이 궁금하다면 ? {">"}
              </Typography>
            </Horizontal>
            <Typography variant="subtitle" sx={{ mr: "30px", mb: "4px" }}>
              단위 당 얼마인지 측정해보세요
            </Typography>
            <Typography variant="sub" sx={{ mb: "15px" }}>
              원하는 수량을 선택하면 예상 구매가가 바로 계산돼요.
            </Typography>
            <Horizontal>
              <CountWrapper sx={{ mr: "30px" }}>
                <select onChange={handleInputValue} value={count}>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </select>
                <Typography
                  variant="sub"
                  sx={{ ml: "5px", fontSize: "11px", fontWeight: "600" }}
                >
                  kg
                </Typography>
              </CountWrapper>
              <PriceWrapper
                sx={{
                  width: "200px",
                  display: "inline-flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  p: "0 16px",
                }}
              >
                {formatToKRW(count * priceInfo.uglyPrice)}
              </PriceWrapper>
              <Typography
                variant="sub"
                sx={{
                  ml: "5px",
                  fontSize: "11px",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "flex-end",
                }}
              >
                원(won)
              </Typography>
            </Horizontal>
          </UglyPick>
        </Grid>
        <Grid
          size={{ md: 7 }}
          sx={{
            boxShadow: "0px 4px 40.9px 0px rgba(0, 0, 0, 0.05)",
            p: "10px 10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" sx={{ mb: "15px" }}>
            {todayDate}
          </Typography>
          <DigitContainer price={priceInfo.uglyPrice} topic="ugly price" />
          <DigitContainer price={priceInfo.marketPrice} topic="market price" />
        </Grid>
      </Grid>
      <RecommandContainer>
        <Typography variant="subtitle" sx={{ mb: "3px" }}>
          다음에는 이런 품목이 변동돼요!
        </Typography>
        <Typography variant="sub" sx={{ mb: "7px" }}>
          지금 사면 이득! 가격 변동 전 미리 준비하세요!
        </Typography>
        <Horizontal sx={{ overflowX: "auto", mt: "20px" }}>
          {recommandList.map((item, index) => (
            <Recommand key={index} info={item} />
          ))}
        </Horizontal>
      </RecommandContainer>
    </Vertical>
  );
}

const UglyPick = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "8px",
  boxShadow: "0px 4px 40.9px 0px rgba(0, 0, 0, 0.05)",
  width: "100%",
  height: "410px",
  padding: "100px 17px 0 17px",
  display: "flex",
  flexDirection: "column",
}));

const UglyPost = styled(Box)`
  position: absolute;
  top: 15px;
  left: -23px;
`;

const PriceWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.gray1,
  color: "#27B06E",
  fontSize: pxToRem(37),
  fontWeight: "700",
  marginRight: "12px",
  padding: "4px",
  borderRadius: "5px",
}));

const CountWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  > select {
    outline: none;
    border: none;
    border-bottom: 1px solid #8e8e8e;
    padding: 5px;
    color: #8e8e8e;
    text-align: center;
    font-family: "Pretendard variable";
    font-size: ${pxToRem(37)};
    font-style: normal;
    font-weight: 700;

    > option {
      font-size: ${pxToRem(12)};
    }
  }
`;

const RecommandContainer = styled(Vertical)`
  margin-top: 30px;
`;
