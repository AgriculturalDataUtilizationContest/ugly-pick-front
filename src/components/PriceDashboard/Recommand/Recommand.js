import React, { useEffect, useRef, useState } from "react";
import { Horizontal, Vertical } from "../../../style/CommunalStyle";
import {
  Box,
  Button,
  CircularProgress,
  styled,
  Typography,
} from "@mui/material";
import { recommandInfo } from "../../../utils/common";

import NonImg from "../../../assets/NonImg.png";
import LeftBtn from "../../../assets/LeftBtn.svg";
import RightBtn from "../../../assets/RightBtn.svg";
import { getRecommandList } from "../../../api/api";
import { getCropEngName, smoothScroll } from "../../../utils/utils";

export default function Recommand({ crop }) {
  const [marketList, setMarketList] = useState([]);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 375 * 2;
    if (!scrollRef.current) return;
    const distance = direction === "left" ? -scrollAmount : scrollAmount;
    smoothScroll(scrollRef.current, distance, 600);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRecommandList(getCropEngName(crop));
      setMarketList(response.markets);
    };
    fetchData();
  }, [crop]);
  return !marketList ? (
    <Vertical
      sx={{ height: "100vh", alignItems: "center", justifyContent: "center" }}
    >
      <CircularProgress />
    </Vertical>
  ) : (
    <Vertical sx={{ position: "relative" }}>
      <Horizontal sx={{ mb: "80px" }}>
        <Typography variant="title" sx={{ marginRight: "30px" }}>
          {recommandInfo.title}
        </Typography>
        <Typography variant="caption">{recommandInfo.subtitle}</Typography>
      </Horizontal>
      <Horizontal
        sx={{
          overflowX: "auto",
          width: "calc(100% + 50px)",
          marginLeft: "-25px",
        }}
        ref={scrollRef}
      >
        {marketList.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </Horizontal>
      <NavigateBtn
        position="left"
        onClick={() => scroll("left")}
        img={LeftBtn}
      />
      <NavigateBtn
        position="right"
        onClick={() => scroll("right")}
        img={RightBtn}
      />
    </Vertical>
  );
}

const Item = (props) => {
  const { marketImage, marketName, marketExplaination, marketUrl } = props;
  return (
    <Vertical
      sx={{
        width: "340px",
        flexShrink: "0",
        mr: "35px",
        boxShadow: "0px 4px 40.9px 0px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
        cursor: "pointer",
      }}
      onClick={() => (window.location.href = marketUrl)}
    >
      <Box
        component="img"
        src={marketImage === null ? NonImg : marketImage}
        sx={{ height: "280px", borderRadius: "12px 12px 0 0" }}
      />
      <Vertical sx={{ p: "10px 20px" }}>
        <Typography variant="title" sx={{ mb: "6px" }}>
          {marketName.length > 35
            ? marketName.slice(0, 35) + "..."
            : marketName}
        </Typography>
        <Typography variant="caption">{marketExplaination}</Typography>
        <AdditionBtn onClick={() => (window.location.href = marketUrl)}>
          더 알아보기
        </AdditionBtn>
      </Vertical>
    </Vertical>
  );
};

const NavigateBtn = ({ img, position, onClick }) => {
  return (
    <Box
      component="img"
      src={img}
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        cursor: "pointer",
        zIndex: 3,
        ...(position === "left" ? { left: "-20px" } : { right: "-20px" }),
      }}
    />
  );
};

const AdditionBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  marginTop: "12px",
}));
