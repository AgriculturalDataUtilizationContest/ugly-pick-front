import { useEffect, useState } from "react";
import { Horizontal, Vertical } from "../../../style/CommunalStyle";
import { Box, Tooltip, tooltipClasses, Typography } from "@mui/material";
import { calculation, predictInfo } from "../../../utils/common";
import { getCropEngName } from "../../../utils/utils";
import { getFuturePriceInfo, getPastPriceInfo } from "../../../api/api";
import PriceChart from "./PriceChart";
import Itemlist from "./Itemlist";
import ContactSupport from "../../../assets/contact_support.svg";
import styled from "@emotion/styled";

export default function PricePredict({ crop }) {
  const [priceData, setPriceData] = useState(null);
  const [futureData, setFutureData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const engName = getCropEngName(crop);

      const pastInfo = await getPastPriceInfo(engName);
      const futureInfo = await getFuturePriceInfo(engName);

      const fullRetail = [
        ...pastInfo.retailPrice,
        ...futureInfo.retailPrice,
      ].map(({ date, price }) => ({
        date,
        price: Math.round(price), // 첫째자리 반올림
      }));

      const fullUgly = [...pastInfo.uglyPrice, ...futureInfo.uglyPrice].map(
        ({ date, price }) => ({
          date,
          price: Math.round(price), // 첫째자리 반올림
        })
      );

      const mergedChartData = mergePriceData(fullRetail, fullUgly);
      setPriceData(mergedChartData);
      setFutureData(futureInfo);
    };
    fetchData();
  }, [crop]);
  return (
    priceData && (
      <Vertical>
        <Horizontal
          sx={{
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mb: "20px",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Typography variant="title" sx={{ mr: "30px" }}>
              {predictInfo.title}
            </Typography>
            <Typography variant="caption">{predictInfo.subtitle}</Typography>
          </Box>
          <CustomTooltip title={calculation} placement="top-start">
            <Typography
              variant="sub"
              sx={{ mb: "5px", display: "flex", cursor: "pointer" }}
            >
              어떻게 예측했는지 궁금해요
              <Box component="img" src={ContactSupport} ml="5px" />
            </Typography>
          </CustomTooltip>
        </Horizontal>
        <PriceChart crop={crop} priceData={priceData} />
        <Itemlist priceData={futureData} />
      </Vertical>
    )
  );
}

function mergePriceData(retailPriceArr, uglyPriceArr) {
  const dateMap = new Map();

  // 1. market (retailPrice 기준)
  for (const item of retailPriceArr) {
    const { date, price } = item;
    if (!dateMap.has(date)) dateMap.set(date, {});
    dateMap.get(date).market = price;
  }

  // 2. ugly
  for (const item of uglyPriceArr) {
    const { date, price } = item;
    if (!dateMap.has(date)) dateMap.set(date, {});
    dateMap.get(date).ugly = price;
  }

  // 3. 변환된 배열로 반환 (날짜 오름차순 정렬)
  return Array.from(dateMap.entries())
    .map(([date, prices]) => ({
      date,
      market: prices.market ?? null,
      ugly: prices.ugly ?? null,
    }))
    .sort((a, b) => new Date("2024/" + a.date) - new Date("2024/" + b.date)); // 날짜 비교 위해 연도 임의 추가
}

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    width: "260px",
    height: "25px",
    padding: "auto",
    color: theme.palette.primary.main,
    fontWeight: "600",
    fontSize: theme.typography.pxToRem(12),
    boxShadow: theme.shadows[1],
  },
}));
