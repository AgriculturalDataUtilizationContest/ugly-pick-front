import { Box, styled } from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";

const cropCategoryMap = {
  고구마: "식량작물",
  감자: "식량작물",
  배추: "채소",
  양배추: "채소",
  상추: "채소",
  수박: "채소",
  참외: "채소",
  호박: "채소",
  딸기: "채소",
  무: "채소",
  파: "채소",
  양파: "채소",
  사과: "과일",
  배: "과일",
  감귤: "과일",
};

export default function CropSelect({ setIsValid, crop, setCrop }) {
  const [category, setCategory] = useState("");

  const categories = useMemo(
    () => [...new Set(Object.values(cropCategoryMap))],
    []
  );

  const crops = useMemo(() => {
    return Object.entries(cropCategoryMap)
      .filter(([_, cat]) => cat === category)
      .map(([name]) => name);
  }, [category]);

  useEffect(() => {
    setIsValid(!!category && !!crop);
  }, [category, crop, setIsValid]);

  return (
    <Box sx={{ display: "flex", gap: "16px", width: "400px" }} mt={1}>
      <CustomSelect
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setCrop("");
        }}
      >
        <option value="">카테고리 선택</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </CustomSelect>

      <CustomSelect
        value={crop}
        onChange={(e) => setCrop(e.target.value)}
        disabled={!category}
      >
        <option value="">작물 선택</option>
        {crops.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </CustomSelect>
    </Box>
  );
}

const CustomSelect = styled("select")(({ theme }) => ({
  width: "128px;",
  padding: "8px",
  borderRadius: "4px",
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  fontSize: "13px",
  "&:focus": {
    outline: "none",
  },
  "&:disabled": {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.text.disabled,
  },
}));
