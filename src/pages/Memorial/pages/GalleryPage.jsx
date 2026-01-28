import { useEffect, useRef, useState } from "react";
// ... כל הייבואים של התמונות נשארים אותו דבר, לא שיניתי ...
import Roi1 from "../../../assets/roiImages/roi1.png";
import Roi2 from "../../../assets/roiImages/roi2.png";
import Roi3 from "../../../assets/roiImages/roi3.png";
import Roi4 from "../../../assets/roiImages/roi4.png";
import Roi5 from "../../../assets/roiImages/roi5.png";
import Roi6 from "../../../assets/roiImages/roi6.png";
import Roi7 from "../../../assets/roiImages/roi7.jpg";
import Roi9 from "../../../assets/roiImages/roi9.jpg";
import Roi10 from "../../../assets/roiImages/roi10.jpg";
import RoiAndArie from "../../../assets/roiImages/roiAndArie.jpg";
import RoiAndArieHapoel from "../../../assets/roiImages/RoiAndArieHapoel.jpeg";
import RoiAndBetti from "../../../assets/roiImages/roiAndBetti.jpg";
import RoiAndBetti2 from "../../../assets/roiImages/roiAndBetti2.jpg";
import RoiAndBettiHapoel from "../../../assets/roiImages/roiAndBettiHapoel.jpg";
import RoiAndEden from "../../../assets/roiImages/roiAndEden.jpg";
import RoiAndEden2 from "../../../assets/roiImages/roiAndEden2.jpg";
import RoiAndEden3 from "../../../assets/roiImages/roiAndEden3.jpg";
import RoiAndEden4 from "../../../assets/roiImages/roiAndEden4.jpg";
import RoiAndNitzan from "../../../assets/roiImages/roiAndNitzan.jpg";
import RoiAndNitzan2 from "../../../assets/roiImages/roiAndNitzan2.jpg";
import RoiAndNitzan3 from "../../../assets/roiImages/roiAndNitzan3.jpg";
import RoiAndNitzan4 from "../../../assets/roiImages/roiAndNitzan4.jpg";
import RoiAndNitzan5 from "../../../assets/roiImages/roiAndNitzan5.jpg";
import RoiAndNitzan6 from "../../../assets/roiImages/roiAndNitzan6.jpg";
import RoiAndNitzan7 from "../../../assets/roiImages/roiAndNitzan7.jpg";
import RoiAndTomer from "../../../assets/roiImages/roiAndTomer.jpg";
import RoiAndTomerAndEden from "../../../assets/roiImages/roiAndTomerAndEden.jpg";
import RoiAndTomerAndEden2 from "../../../assets/roiImages/roiAndTomerAndEden2.jpg";
import RoiArmy from "../../../assets/roiImages/roiArmi.jpg";
import RoiArmy2 from "../../../assets/roiImages/roiArmi2.jpg";
import RoiArmy3 from "../../../assets/roiImages/roiArmi3.jpg";
import RoiDawiFamily from "../../../assets/roiImages/roiDawiFamily.jpg";
import RoiFamily1 from "../../../assets/roiImages/roiFamily1.jpg";
import RoiFamily2 from "../../../assets/roiImages/roiFamily2.jpg";
import RoiFamily3 from "../../../assets/roiImages/roiFamily3.jpg";
import RoiFamily4 from "../../../assets/roiImages/roiFamily4.jpg";
import RoiHapoel from "../../../assets/roiImages/roiHapoel.jpg";
import RoiMechina1 from "../../../assets/roiImages/roiMechina1.jpg";
import RoiMechina2 from "../../../assets/roiImages/roiMechina2.jpg";
import imageSettings from "../../../data/imageSettings.json";
import styles from "./GalleryPage.module.css"; // שים לב לנתיב

const memories = [
  { id: 1, img: Roi1, caption: "רועי במדים" },
  { id: 2, img: Roi2, caption: "חיוך של אור" },
  { id: 3, img: Roi3, caption: "רגע של גאווה" },
  { id: 4, img: Roi4, caption: "תמיד בלב" },
  { id: 5, img: Roi5, caption: "שמחת נעורים" },
  { id: 6, img: Roi6, caption: "חיוך שמחזק" },
  { id: 7, img: Roi7, caption: "החיוך שכבש כל לב" },
  { id: 9, img: Roi9, caption: "תמיד איתנו" },
  { id: 10, img: Roi10, caption: "רגעים של אור" },
  { id: 11, img: RoiHapoel, caption: "אהבת הפועל" },
  { id: 12, img: RoiArmy, caption: "לוחם של אמת" },
  { id: 13, img: RoiArmy2, caption: "חבר לנשק" },
  { id: 14, img: RoiArmy3, caption: "אחוות לוחמים" },
  { id: 15, img: RoiMechina1, caption: "המכינה – דרך ארץ" },
  { id: 16, img: RoiMechina2, caption: "רוח של נתינה" },
  { id: 17, img: RoiAndNitzan, caption: "רועי וניצן" },
  { id: 18, img: RoiAndNitzan2, caption: "אהבה גדולה" },
  { id: 19, img: RoiAndNitzan3, caption: "רגע של אושר" },
  { id: 20, img: RoiAndNitzan4, caption: "זיכרון מתוק" },
  { id: 21, img: RoiAndNitzan5, caption: "חיים משותפים" },
  { id: 22, img: RoiAndNitzan6, caption: "יחד לנצח" },
  { id: 23, img: RoiAndNitzan7, caption: "אהבת אמת" },
  { id: 24, img: RoiAndEden, caption: "רועי ועדן" },
  { id: 25, img: RoiAndEden2, caption: "האחות עדן" },
  { id: 26, img: RoiAndEden3, caption: "אהבת אחים" },
  { id: 27, img: RoiAndEden4, caption: "משפחה בלב" },
  { id: 28, img: RoiAndTomer, caption: "רועי ותומר" },
  { id: 29, img: RoiAndTomerAndEden, caption: "האחים יחד" },
  { id: 30, img: RoiAndTomerAndEden2, caption: "משפחה קרובה" },
  { id: 31, img: RoiAndArie, caption: "רועי עם אבא אריה" },
  { id: 32, img: RoiAndArieHapoel, caption: "עם אבא במשחק" },
  { id: 33, img: RoiAndBetti, caption: "רועי עם אמא בטי" },
  { id: 34, img: RoiAndBetti2, caption: "אמא בטי ורועי" },
  { id: 35, img: RoiAndBettiHapoel, caption: "משפחתיות ביציע" },
  { id: 36, img: RoiDawiFamily, caption: "חיבוק משפחתי" },
  { id: 37, img: RoiFamily1, caption: "רגע משפחתי" },
  { id: 38, img: RoiFamily2, caption: "שמחת משפחה" },
  { id: 39, img: RoiFamily3, caption: "המשפחה היקרה" },
  { id: 40, img: RoiFamily4, caption: "יחד תמיד" },
];

const GalleryPage = () => {
  const storageKey = "galleryPinPositions";
  const imageOverridesKey = "galleryImageOverrides";
  const touchTracker = useRef({});
  const [pinPositions] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [imageOverrides] = useState(() => {
    try {
      const saved = localStorage.getItem(imageOverridesKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [activeId, setActiveId] = useState(null);

  const resolveImageSettings = (id) => {
    const base = imageSettings.gallery?.[id] || {
      position: "center center",
      zoom: 1,
    };
    const overrides = imageOverrides[id] || {};
    return { ...base, ...overrides };
  };

  const handleTouchStart = (id, event) => {
    const touch = event.touches[0];
    touchTracker.current[id] = {
      startY: touch.clientY,
      startTime: Date.now(),
      isScrolling: false,
    };
  };

  const handleTouchMove = (id) => {
    const info = touchTracker.current[id];
    if (info && !info.isScrolling) {
      info.isScrolling = true;
    }
  };

  const handleTouchEnd = (id, event) => {
    const info = touchTracker.current[id];
    if (!info) {
      return;
    }

    const timeDiff = Date.now() - info.startTime;
    const isScrolling = info.isScrolling;
    touchTracker.current[id] = null;

    // Only toggle if it was a quick tap without scrolling
    if (!isScrolling && timeDiff < 300) {
      event.preventDefault();
      setActiveId((prev) => (prev === id ? null : id));
    }
  };

  const handleClick = (id) => {
    // Desktop click handler
    if (window.matchMedia("(hover: hover)").matches) {
      setActiveId((prev) => (prev === id ? null : id));
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    const targets = document.querySelectorAll("[data-reveal]");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.galleryTitle} data-reveal>
        רגעים שנעוצים בלב
      </h2>
      <div className={styles.galleryGrid}>
        {memories.map((item) => (
          <div
            key={item.id}
            className={`${styles.galleryItem} ${
              activeId === item.id ? styles.galleryItemActive : ""
            }`}
            data-reveal
            onTouchStart={(event) => handleTouchStart(item.id, event)}
            onTouchMove={() => handleTouchMove(item.id)}
            onTouchEnd={(event) => handleTouchEnd(item.id, event)}
            onClick={() => handleClick(item.id)}
          >
            {(pinPositions[item.id] || "center") === "center" && (
              <>
                <span
                  className={`${styles.galleryPin} ${styles.galleryPinCenter}`}
                />
                <span
                  className={`${styles.galleryPinShadow} ${styles.galleryPinShadowCenter}`}
                />
              </>
            )}
            {(pinPositions[item.id] || "center") === "corners" && (
              <>
                <span
                  className={`${styles.galleryPin} ${styles.galleryPinLeft}`}
                />
                <span
                  className={`${styles.galleryPinShadow} ${styles.galleryPinShadowLeft}`}
                />
                <span
                  className={`${styles.galleryPin} ${styles.galleryPinRight}`}
                />
                <span
                  className={`${styles.galleryPinShadow} ${styles.galleryPinShadowRight}`}
                />
              </>
            )}
            <div className={styles.galleryPhotoFrame}>
              <img
                src={item.img}
                alt={item.caption}
                style={{
                  objectPosition: resolveImageSettings(item.id).position,
                  transform: `scale(${resolveImageSettings(item.id).zoom ?? 1})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
