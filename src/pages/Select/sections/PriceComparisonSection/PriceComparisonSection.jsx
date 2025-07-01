import React from "react";
import { Button } from "../../../../components/ui/button";
import styles from "./PriceComparisonSection.module.css";

export const PriceComparisonSection = ({ onReset, onAnalyze }) => {
  return (
    <div className={styles.container}>
      <Button variant="outline" className={styles.resetButton} onClick={onReset}>
        초기화
      </Button>

      <Button className={styles.analyzeButton} onClick={onAnalyze}>
        분석하기
      </Button>
    </div>
  );
};