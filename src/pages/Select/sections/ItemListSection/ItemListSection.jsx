import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import styles from "./ItemListSection.module.css";
import { FilterOptionsSection } from "../FilterOptionsSection/FilterOptionsSection";

export const ItemListSection = () => {
  const categories = [
    { id: "all", label: "전체" },
    { id: "vegetables", label: "채소류" },
    { id: "fruits", label: "과일류" },
    { id: "grains", label: "식량작물" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <Card className={styles.container}>
      <CardContent className={styles.content}>
        <Tabs
          value={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value)}
          className={styles.tabs}
        >
          <TabsList className={styles.tabsList}>
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                style={category.id === "grains" ? { width: "140px" } : {}}
                className={`
                  ${styles.tabTrigger}
                  ${category.id === "all" ? styles.tabTriggerAll : styles.tabTriggerCategory}
                  ${selectedCategory === category.id ? styles.tabTriggerActive : styles.tabTriggerInactive}
                `}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* 선택된 카테고리를 FilterOptionsSection에 전달 */}
        <FilterOptionsSection selectedCategory={selectedCategory} />
      </CardContent>
    </Card>
  );
};
