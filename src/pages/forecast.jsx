// src/pages/Forecast.jsx
import React from "react";
import { useLocation } from "react-router-dom";

export const Forecast = () => {
  // 쿼리 파라미터에서 searchTerm 받기
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("query") || "";

  return (
    <div style={{ padding: 20 }}>
      <h1>Forecast Page</h1>
      {query ? (
        <p>Showing forecast results for: <strong>{query}</strong></p>
      ) : (
        <p>No search term provided. Showing default forecast.</p>
      )}
      {/* 여기서 날씨 데이터 API 연동 등을 구현하세요 */}
    </div>
  );
};
