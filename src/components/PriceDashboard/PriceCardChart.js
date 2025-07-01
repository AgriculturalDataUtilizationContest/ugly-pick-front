import React from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Box } from "@mui/material";
import { useResizeDetector } from "react-resize-detector";

export default function PriceChartOnly({ data }) {
  const { ref, width } = useResizeDetector();

  return (
    <Box ref={ref} sx={{ width: "100%", height: 100 }}>
      {width && (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data.map((p) => ({ price: p }))}>
            <XAxis hide />
            <Tooltip formatter={(value) => `${value.toLocaleString()}원`} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#2C9777"
              strokeWidth={2}
              fill="url(#colorPrice)"
              dot={false}
            />
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2C9777" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#2C9777" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      )}
    </Box>
  );
}
