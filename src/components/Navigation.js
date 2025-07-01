import { Box, Grid, Input, styled, Typography, useTheme } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeBtn from "../assets/HomeBtn.svg";
import Search from "../assets/search.svg";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const theme = useTheme();
  const mainColor = theme.palette.primary.main;
  const isForecastPage = ["/forecast", "/select"].includes(location.pathname);

  useEffect(() => {
    if (!searchRef.current) return;

    searchRef.current.style.visibility = "hidden";
  }, [location.pathname]);
  return (
    <Container container spacing={2} pb={3}>
      <Grid size={{ md: 5 }}>
        <Box
          component="img"
          src={HomeBtn}
          sx={{ cursor: "pointer", height: "80px" }}
          onClick={() => navigate("/")}
        />
      </Grid>
      <Grid
        size={{ md: 7 }}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <SearchContainer ref={searchRef}>
          <Box component="img" src={Search} />
          <SearchInput placeholder="search" disableUnderline />
        </SearchContainer>
        <NavBtn
          variant="caption"
          sx={{
            fontWeight: location.pathname === "/" ? 700 : 400,
            color: location.pathname === "/" ? mainColor : "#6B7280",
          }}
          onClick={() => navigate("/")}
        >
          Home
        </NavBtn>

        <NavBtn
          variant="caption"
          sx={{
            fontWeight: isForecastPage ? 700 : 400,
            color: isForecastPage ? mainColor : "#6B7280",
          }}
          onClick={() => navigate("/select")}
        >
          Forecast
        </NavBtn>

        <NavBtn
          variant="caption"
          sx={{
            fontWeight: location.pathname === "/search" ? 700 : 400,
            color: location.pathname === "/search" ? mainColor : "#6B7280",
          }}
          onClick={() => navigate("/search")}
        >
          search
        </NavBtn>
      </Grid>
    </Container>
  );
}

const Container = styled(Grid)`
  height: 90px;
  border-bottom: 1px solid rgba(51, 51, 51, 0.12);
  padding: 0 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchContainer = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;

  > img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
  }
`;

const SearchInput = styled(Input)`
  width: 26vw;
  min-width: 200px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 29px;
  border: 0.6px solid #d5d5d5;
  padding-left: 45px;
`;

const NavBtn = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  color: "#6B7280",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
}));
