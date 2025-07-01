import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import styles from "./FilterOptionsSection.module.css";
import mandarinImg from "../../../../icons/DragDrop/mandarin.png";
import peachImg from "../../../../icons/DragDrop/peach.png";
import pearImg from "../../../../icons/DragDrop/pear.png";

const produceItems = [
  { name: "고구마", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-153.png", category: "grains" },
  { name: "감자", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image.png", category: "grains" },
  { name: "배추", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-1.png", category: "vegetables" },
  { name: "수박", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-2.png", category: "vegetables" },
  { name: "토마토", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-3.png", category: "vegetables" },
  { name: "방울토마토", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-4.png", category: "vegetables" },
  { name: "멜론", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-5.png", category: "vegetables" },
  { name: "시금치", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-6.png", category: "vegetables" },
  { name: "호박", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-7.png", category: "vegetables" },
  { name: "무", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-8.png", category: "vegetables" },
  { name: "상추", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-9.png", category: "vegetables" },
  { name: "딸기", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-10.png", category: "vegetables" },
  { name: "참외", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-11.png", category: "vegetables" },
  { name: "파", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-12.png", category: "vegetables" },
  { name: "양파", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-13.png", category: "vegetables" },
  { name: "사과", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-153-1.png", category: "fruits" },
  { name: "양배추", image: "https://c.animaapp.com/mchocbwgl3GYeg/img/image-1.png", category: "vegetables" },
  { name: "감귤", image: mandarinImg, category: "fruits" },
  { name: "복숭아", image: peachImg, category: "fruits" },
  { name: "배", image: pearImg, category: "fruits" },
];

export const FilterOptionsSection = ({ selectedCategory }) => {
  const filteredItems =
    selectedCategory === "all"
      ? produceItems
      : produceItems.filter((item) => item.category === selectedCategory);

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {filteredItems.map((item, index) => {
          const cardRef = React.createRef();

          return (
            <Card
              key={`produce-${index}`}
              className={styles.card}
              draggable
              ref={cardRef}
              onDragStart={(e) => {
              e.dataTransfer.setData("application/json", JSON.stringify(item));
              e.dataTransfer.setDragImage(e.currentTarget, 0, 0); // 카드 전체를 드래그 이미지로 설정
            }}
            >
              <CardContent className={styles.cardContent}>
                <div className={styles.itemContainer}>
                  <img
                    className={styles.itemImage}
                    alt={item.name}
                    src={item.image}
                  />
                  <div className={styles.itemName}>{item.name}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
