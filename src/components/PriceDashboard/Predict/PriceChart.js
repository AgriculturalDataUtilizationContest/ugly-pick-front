import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceArea,
} from "recharts";
import { Box, Typography } from "@mui/material";
import { useResizeDetector } from "react-resize-detector";
import "./style.css";

const data = [
  { date: "10/11", ugly: 10, market: 10 },
  { date: "10/11", ugly: 14, market: 20 },
  { date: "10/11", ugly: 16, market: 24 },
  { date: "06/09", ugly: 15, market: 21 },
  { date: "06/10", ugly: 20, market: 28 },
  { date: "06/11", ugly: 18, market: 23 },
  { date: "06/12", ugly: 17, market: 22 },
  { date: "06/13", ugly: 19, market: 26 },
];

// 현재 시점 기준 ReferenceArea 시작 인덱스
const currentIndex = data.findIndex((d) => d.date === "06/10");

export default function PriceChart({ priceData }) {
  const { width, ref } = useResizeDetector();
  return (
    priceData && (
      <div ref={ref} style={{ width: "100%", marginTop: "40px" }}>
        <LineChart width={width} height={300} data={priceData}>
          <CartesianGrid stroke="#eee" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fontWeight: 600 }}
            stroke="#999"
          />
          <YAxis
            tick={{ fontSize: 12 }}
            stroke="#999"
            domain={[0, 35]}
            tickFormatter={(v) => `${v}원`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            iconType="circle"
            layout="vertical"
            formatter={(value) => {
              if (value === "ugly") return "못난이 상품 소매 가격";
              if (value === "market") return "시장 상품 소매 가격";
              return value;
            }}
            wrapperStyle={{
              top: "-20px",
              left: "30px",
            }}
          />
          {/* 미래 시점 배경 강조 */}
          <ReferenceArea
            x1={priceData[currentIndex].date}
            x2={priceData[priceData.length - 1].date}
            strokeOpacity={0}
            fill="rgba(44, 151, 119, 0.08)"
          />
          {/* 시장 상품 라인 */}
          <Line
            // type="monotone"
            dataKey="market"
            stroke="#747474"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: "white", stroke: "#747474" }}
            activeDot={{ r: 5 }}
          />
          {/* 못난이 상품 라인 */}
          <Line
            // type="monotone"
            dataKey="ugly"
            stroke="#27B06E"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: "white", stroke: "#27B06E" }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </div>
    )
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;
  const ugly = payload.find((p) => p.dataKey === "ugly");
  const market = payload.find((p) => p.dataKey === "market");
  return (
    <Box
      sx={{
        background: "white",
        border: "1px solid #ddd",
        p: 1,
        borderRadius: 1,
      }}
    >
      <Typography fontSize={13} color="#666">
        {label}
      </Typography>
      {market && (
        <Typography fontSize={13} color="#666">
          시장 상품 소매가격 <strong>{market.value.toLocaleString()}원</strong>
        </Typography>
      )}
      {ugly && (
        <Typography fontSize={13} color="#2C9777">
          못난이 상품 소매가격 <strong>{ugly.value.toLocaleString()}원</strong>
        </Typography>
      )}
    </Box>
  );
};
