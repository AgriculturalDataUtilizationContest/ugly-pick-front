import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Paper,
} from "@mui/material";

export default function Itemlist({ priceData }) {
  // 배열 → 날짜를 key로 하는 객체로 변환
  const retailMap = priceData.retailPrice.reduce((acc, cur) => {
    acc[cur.date] = cur.price;
    return acc;
  }, {});
  const uglyMap = priceData.uglyPrice.reduce((acc, cur) => {
    acc[cur.date] = cur.price;
    return acc;
  }, {});

  const dates = Object.keys(retailMap); // 날짜 목록
  const today = new Date()
    .toLocaleDateString("ko-KR", {
      month: "2-digit",
      day: "2-digit",
    })
    .replace(". ", "/")
    .replace(".", "");

  return (
    <TableContainer component={Paper} sx={{ border: "none", mt: "30px" }}>
      <Table sx={{ border: "none" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>ITEM LIST</TableCell>
            {dates.map((date) => (
              <TableCell key={date} align="center" sx={{ fontWeight: "bold" }}>
                {date}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* 못난이 상품 */}
          <TableRow sx={{ backgroundColor: "rgba(44, 151, 119, 0.04)" }}>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <span style={{ fontSize: "20px" }}>🥕</span>
                <Typography>못난이 상품 소매 가격</Typography>
              </Box>
            </TableCell>
            {dates.map((date) => (
              <TableCell
                key={date}
                align="center"
                sx={{
                  fontWeight: date === today ? "bold" : "normal",
                  backgroundColor:
                    date === today ? "rgba(44, 151, 119, 0.2)" : "transparent",
                }}
              >
                {uglyMap[date] != null
                  ? Math.round(uglyMap[date]).toLocaleString()
                  : "-"}
              </TableCell>
            ))}
          </TableRow>

          {/* 시장 상품 */}
          <TableRow>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <span style={{ fontSize: "20px", filter: "grayscale(100%)" }}>
                  🥕
                </span>
                <Typography>시장 상품 소매 가격</Typography>
              </Box>
            </TableCell>
            {dates.map((date) => (
              <TableCell key={date} align="center">
                {retailMap[date] != null
                  ? Math.round(retailMap[date]).toLocaleString()
                  : "-"}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
