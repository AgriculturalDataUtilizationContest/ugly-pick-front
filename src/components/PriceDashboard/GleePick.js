import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { Vertical, Horizontal } from "../../style/CommunalStyle";
import { fetchCropRetailAndSimilar, getCropImage } from "../../api/api";
import { formatToKRW, getCropEngName } from "../../utils/utils";
import NonImg from "../../assets/NonImg.png";
import PriceCardChart from "./PriceCardChart";

export default function GleePick({ crop }) {
  const [otherItem, setOtherItem] = useState(null);
  const [retailPrice, setRetailPrice] = useState([]);
  const theme = useTheme();
  const [cropImg, setCropImg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCropRetailAndSimilar(getCropEngName(crop));
      const img = await getCropImage(crop);
      setCropImg(img);
      setOtherItem(response.data.otherCrops);
      setRetailPrice(response.data.retailPrice);
    };
    fetchData();
  }, [crop]);
  return !(otherItem && retailPrice) ? (
    <Vertical
      sx={{ height: "100vh", alignItems: "center", justifyContent: "center" }}
    >
      <CircularProgress />
    </Vertical>
  ) : (
    <Vertical sx={{ gap: "24px" }}>
      <Card>
        <Typography
          variant="subtitle"
          fontWeight={700}
          textAlign="center"
          mb={2}
          sx={{ color: theme.palette.primary.gray2 }}
        >
          GLEE PICK
        </Typography>
        <PlaceholderBox height="120px">
          <Box component="img" src={cropImg} sx={{ height: "120px" }} />
        </PlaceholderBox>
        <Vertical sx={{ textAlign: "center", mt: 2, mb: 3 }}>
          <Typography variant="h6" fontWeight={700}>
            {crop}
          </Typography>
          <Typography variant="caption" color="gray">
            {getCropEngName(crop)}
          </Typography>
        </Vertical>
        <Horizontal sx={{ justifyContent: "space-between", px: 2 }}>
          <Vertical>
            <Typography variant="body2" fontWeight={600}>
              소매가격
            </Typography>
            <Typography variant="caption" color="gray">
              Market Price
            </Typography>
          </Vertical>
          <Vertical alignItems="flex-end">
            <Typography variant="body2" fontWeight={700}>
              {formatToKRW(retailPrice[retailPrice.length - 1])}원
            </Typography>
          </Vertical>
        </Horizontal>
        <Box sx={{ height: "60px" }}>
          <PriceCardChart data={retailPrice} />
        </Box>
      </Card>

      <Card
        sx={{
          maxHeight: "500px",
          overflow: "auto",
          flexShrink: "0",
        }}
      >
        <Typography
          variant="subtitle"
          textAlign="center"
          pb={2}
          mb={2}
          sx={{
            color: theme.palette.primary.gray2,
            borderBottom: "0.4px solid #F1F1F1;",
          }}
        >
          NEXT ITEM
        </Typography>
        <Vertical
          sx={{
            gap: 2,
          }}
        >
          {otherItem.map((itm, idx) => (
            <Horizontal
              key={idx}
              sx={{ justifyContent: "space-between", px: 2 }}
            >
              <Horizontal gap={1}>
                <PlaceholderBox width="28px" height="28px">
                  <Box
                    component="img"
                    src={
                      itm.cropsImage.startsWith("https")
                        ? itm.cropsImage
                        : NonImg
                    }
                  />
                </PlaceholderBox>
                <Vertical>
                  <Typography variant="body2" fontWeight={600}>
                    {itm.cropKorName}
                  </Typography>
                  <Typography variant="caption" color="gray">
                    {itm.cropEngName}
                  </Typography>
                </Vertical>
              </Horizontal>
              <Typography variant="body2" width="100px" fontWeight={700}>
                {formatToKRW(itm.cropCost)} 원
              </Typography>
            </Horizontal>
          ))}
        </Vertical>
      </Card>
    </Vertical>
  );
}

const Card = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
  display: "flex",
  flexDirection: "column",
}));

const PlaceholderBox = styled(Box)(({ height, width, mt }) => ({
  height: height || "auto",
  width: width || "100%",
  backgroundColor: "#f3f3f3",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#999",
  marginTop: mt || 0,
}));
