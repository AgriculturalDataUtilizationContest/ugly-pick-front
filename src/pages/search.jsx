// src/pages/Search.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/forecast?query=${encodeURIComponent(searchTerm)}`);
    } else {
      alert("검색어를 입력해주세요.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Search Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="검색어 입력"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: 8, width: 300, marginRight: 8 }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          검색
        </button>
      </form>
    </div>
  );
};