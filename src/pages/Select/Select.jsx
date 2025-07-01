import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DragAndDropSection } from "./sections/DragAndDropSection";
import { FilterOptionsSection } from "./sections/FilterOptionsSection/FilterOptionsSection";
import { ItemListSection } from "./sections/ItemListSection";
import { PriceComparisonSection } from "./sections/PriceComparisonSection/PriceComparisonSection";
import { Loading } from "./sections/Loading";
import styles from "./Select.module.css";

export const Select = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const navigate = useNavigate();

  // 드롭 이벤트 핸들링
  const handleDrop = (event) => {
    event.preventDefault();
    try {
      const jsonData = event.dataTransfer.getData("application/json");
      if (!jsonData) return;
      const data = JSON.parse(jsonData);
      setSelectedItem(data);
    } catch (error) {
      console.error("드롭 데이터 파싱 실패:", error);
    }
  };

  const handleReset = () => {
    setSelectedItem(null);
  };

  const handleAnalyze = () => {
    if (selectedItem) {
      setLoading(true); // 로딩 시작
      setTimeout(() => {
        navigate(`/forecast?crop=${encodeURIComponent(selectedItem.name)}`);
      }, 2000); // 2초 후 이동
    }
  };

  if (loading) {
    return <Loading />; // 로딩 화면 표시
  }

  return (
    <main className={styles.main} data-model-id="331:2157">
      <div className={styles.contentLayout}>
        {/* Left column with drop zone */}
        <div
          className={styles.leftColumn}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <DragAndDropSection droppedItem={selectedItem} />
        </div>

        {/* Right column with item list, filters, buttons */}
        <div className={styles.rightColumn}>
          <ItemListSection />
          <FilterOptionsSection />
          <PriceComparisonSection
            onReset={handleReset}
            onAnalyze={handleAnalyze}
          />
        </div>
      </div>
    </main>
  );
};
