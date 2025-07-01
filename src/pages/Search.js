import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, useTheme, styled, Input } from "@mui/material";
import SearchBtn from "../assets/SearchBtn.svg";
import Card from "../components/Search/Card";
import { Horizontal, Vertical } from "../style/CommunalStyle";
import { getPopularCrops, getSeasonsCrops } from "../api/api";
import Recommand from "../components/PriceDashboard/Compare/Recommand";

export default function Search() {
  const theme = useTheme();
  const [popularList, setPopularList] = useState([]);
  const [seasonCropList, setSeasonCropList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularData = await getPopularCrops();
      setPopularList(popularData);
      const seasonData = await getSeasonsCrops();
      setSeasonCropList(seasonData);
    };
    fetchData();
  }, []);
  return (
    popularList &&
    seasonCropList && (
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          backgroundColor: "#F4F5F7",
        }}
      >
        {/* Title & Search */}
        <Box
          textAlign="center"
          px="105px"
          py={6}
          sx={{ backgroundColor: "#27B06E1F" }}
        >
          <Typography variant="title" color={theme.palette.primary.main}>
            Glee하게 고르자, 오늘의 착한 선택!
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mt: 2,
            }}
          >
            <SearchInput
              placeholder="오늘도 Glee하게! 어떤 농산물을 볼까요?"
              sx={{
                width: "800px",
                bgcolor: "white",
                borderRadius: 1,
              }}
              disableUnderline
            />
            <Box component="img" src={SearchBtn} sx={{ height: "60px" }} />
          </Box>
        </Box>

        {/* HOT Section */}
        <Grid
          container
          mb={6}
          px="105px"
          py={6}
          sx={{ backgroundColor: "#27B06E1F" }}
        >
          <Grid size={{ md: 3.5 }}>
            <Vertical>
              <Typography variant="title" mb={1}>
                요즘 HOT한 UH!GLEE 상품은?
              </Typography>
              <Typography variant="caption" mb={2}>
                이번주 가장 할인율이 높은 농산물을 찾아보세요!
              </Typography>
            </Vertical>
          </Grid>
          <Grid size={{ md: 8.5 }}>
            <Horizontal>
              {popularList.map((itm, idx) => (
                <Card key={idx} info={itm} num={idx} />
              ))}
            </Horizontal>
          </Grid>
        </Grid>

        {/* 시즌 특가 */}
        <Box px="105px" py={6}>
          <Vertical>
            <Typography variant="title" mb={1}>
              지금 시즌에는 이런게 잘나가요!
            </Typography>
            <Typography variant="caption" color="gray" mb={3}>
              지금 사면 이득! 가격 변동 전 미리 준비하세요!
            </Typography>
          </Vertical>
          <Horizontal>
            {seasonCropList.map((itm, idx) => (
              <Recommand info={itm} key={idx} />
            ))}
          </Horizontal>
        </Box>
      </Box>
    )
  );
}

const SearchInput = styled(Input)`
  font-size: "16px !important";
  height: 60px;
  flex-shrink: 0;
  border-radius: 29px;
  border: 0.6px solid #d5d5d5;
  padding-left: 45px;
`;
