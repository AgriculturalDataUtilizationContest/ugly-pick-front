export function formatToKRW(number) {
  return number?.toLocaleString("ko-KR");
}

export function isNumeric(value) {
  return value !== "" && !isNaN(value);
}

export function formatSignedNumber(num) {
  const sign = num >= 0 ? "+" : "-";
  const absValue = Math.abs(num).toFixed(1); // 소수점 1자리 고정
  return `${sign}${absValue}`;
}

export function KoreanDate() {
  const date = new Date();

  // 한국 시간으로 변환
  const koreaDate = new Date(
    date.toLocaleString("en-US", { timeZone: "Asia/Seoul" })
  );

  const year = koreaDate.getFullYear();
  const month = koreaDate.getMonth() + 1;
  const day = koreaDate.getDate();
  const weekdayNames = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const weekday = weekdayNames[koreaDate.getDay()];

  const formattedDate = `${year}년 ${month}월 ${day}일 ${weekday}`;

  return formattedDate;
}

const cropNameMap = {
  고구마: "Sweet Potato",
  파: "Green Onion",
  양파: "Onion",
  사과: "Apple",
  배: "Pear",
  감귤: "Tangerine",
  참외: "Oriental Melon",
  감자: "Potato",
  양배추: "Cabbage",
  배추: "Chinese Cabbage",
  수박: "Watermelon",
  상추: "Lettuce",
  호박: "Pumpkin",
  딸기: "Strawberry",
  무: "Radish",
};

export function getCropEngName(korName) {
  return cropNameMap[korName] || "Unknown Crop";
}

const cropCategoryMap = {
  고구마: "식량작물",
  파: "채소",
  양파: "채소",
  사과: "과일",
  배: "과일",
  감귤: "과일",
  참외: "채소",
  감자: "식량작물",
  양배추: "채소",
  배추: "채소",
  수박: "채소",
  상추: "채소",
  호박: "채소",
  딸기: "채소",
  무: "채소",
};

export function getCropCategory(korName) {
  return cropCategoryMap[korName] || null;
}
export const smoothScroll = (target, distance, duration) => {
  const start = target.scrollLeft;
  const startTime = performance.now();

  const animate = (time) => {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1); // 0 ~ 1
    target.scrollLeft = start + distance * easeInOutQuad(progress);
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  requestAnimationFrame(animate);
};
