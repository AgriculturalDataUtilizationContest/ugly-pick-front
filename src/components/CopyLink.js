import React from "react";
import { useLocation } from "react-router-dom";

export default function CopyLink() {
  const location = useLocation();
  const baseUrl = `${window.location.protocol}//${window.location.host}`;
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      링크 복사하기 [{baseUrl}
      {location.pathname}]
      <button
        onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)}
      >
        클릭
      </button>
    </div>
  );
}
