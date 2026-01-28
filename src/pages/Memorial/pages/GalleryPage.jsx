import { useRef, useState } from "react";
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
import styles from "../Memorial.module.css";

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
  const tapTracker = useRef({});
  const [pinPositions, setPinPositions] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [imageOverrides, setImageOverrides] = useState(() => {
    try {
      const saved = localStorage.getItem(imageOverridesKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [editorOpen, setEditorOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [tempPin, setTempPin] = useState("center");
  const [imageEditorState, setImageEditorState] = useState({
    posX: 50,
    posY: 50,
    zoom: "1",
  });

  const positionToXY = (position) => {
    if (!position) {
      return { x: 50, y: 50 };
    }
    const [rawX = "center", rawY = "center"] = position.split(" ");
    const mapToken = (token, axis) => {
      if (token.endsWith("%")) {
        const value = Number.parseFloat(token.replace("%", ""));
        return Number.isNaN(value) ? 50 : Math.min(100, Math.max(0, value));
      }
      if (token === "left") {
        return 0;
      }
      if (token === "right") {
        return 100;
      }
      if (token === "top") {
        return 0;
      }
      if (token === "bottom") {
        return 100;
      }
      return axis === "x" ? 50 : 50;
    };
    return { x: mapToken(rawX, "x"), y: mapToken(rawY, "y") };
  };

  const xyToPosition = (x, y) => `${Math.round(x)}% ${Math.round(y)}%`;

  const resolveImageSettings = (id) => {
    const base = imageSettings.gallery?.[id] || {
      position: "center center",
      zoom: 1,
    };
    const overrides = imageOverrides[id] || {};
    return { ...base, ...overrides };
  };

  const openEditor = (id) => {
    setActiveId(id);
    setTempPin(pinPositions[id] || "center");
    const merged = resolveImageSettings(id);
    const { x, y } = positionToXY(merged.position || "center center");
    setImageEditorState({
      posX: x,
      posY: y,
      zoom: String(merged.zoom ?? 1),
    });
    setEditorOpen(true);
  };

  const closeEditor = () => {
    setEditorOpen(false);
    setActiveId(null);
  };

  const saveEditor = () => {
    if (!activeId) {
      closeEditor();
      return;
    }
    const next = { ...pinPositions, [activeId]: tempPin };
    setPinPositions(next);
    localStorage.setItem(storageKey, JSON.stringify(next));

    const zoom = Number.parseFloat(imageEditorState.zoom);
    const position = xyToPosition(imageEditorState.posX, imageEditorState.posY);
    const updatedImageOverrides = {
      ...imageOverrides,
      [activeId]: {
        position,
        zoom: Number.isNaN(zoom) ? 1 : zoom,
      },
    };
    setImageOverrides(updatedImageOverrides);
    localStorage.setItem(
      imageOverridesKey,
      JSON.stringify(updatedImageOverrides),
    );
    closeEditor();
  };

  const handleCopyImageJson = () => {
    if (!activeId) {
      return;
    }
    const zoom = Number.parseFloat(imageEditorState.zoom);
    const position = xyToPosition(imageEditorState.posX, imageEditorState.posY);
    const payload = {
      gallery: {
        [activeId]: {
          position,
          zoom: Number.isNaN(zoom) ? 1 : zoom,
        },
      },
    };
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
    }
  };

  const handleTripleTap = (id) => {
    const now = Date.now();
    const info = tapTracker.current[id] || { last: 0, count: 0 };
    if (now - info.last < 420) {
      info.count += 1;
    } else {
      info.count = 1;
    }
    info.last = now;
    tapTracker.current[id] = info;
    if (info.count >= 3) {
      info.count = 0;
      tapTracker.current[id] = info;
      if (window.matchMedia("(hover: none)").matches) {
        openEditor(id);
      }
    }
  };

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.galleryTitle} data-reveal>
        רגעים שתלויים בלב
      </h2>
      <div className={styles.galleryGrid}>
        {memories.map((item) => (
          <div
            key={item.id}
            className={styles.galleryItem}
            data-reveal
            onContextMenu={(event) => {
              event.preventDefault();
              openEditor(item.id);
            }}
            onTouchEnd={() => handleTripleTap(item.id)}
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
      {editorOpen && (
        <div className={styles.editorOverlay} onClick={closeEditor}>
          <div
            className={styles.editorModal}
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className={styles.editorTitle}>מיקום הסיכות</h3>
            <label className={styles.editorLabel}>
              בחר מיקום:
              <select
                className={styles.editorInput}
                value={tempPin}
                onChange={(event) => setTempPin(event.target.value)}
              >
                <option value="center">סיכה באמצע</option>
                <option value="corners">שתי סיכות בפינות</option>
              </select>
            </label>
            <label className={styles.editorLabel}>
              מיקום אופקי (ימינה/שמאלה)
              <input
                className={styles.editorInput}
                type="range"
                min="0"
                max="100"
                value={imageEditorState.posX}
                onChange={(event) =>
                  setImageEditorState((prev) => ({
                    ...prev,
                    posX: Number(event.target.value),
                  }))
                }
              />
            </label>
            <label className={styles.editorLabel}>
              מיקום אנכי (למעלה/למטה)
              <input
                className={styles.editorInput}
                type="range"
                min="0"
                max="100"
                value={imageEditorState.posY}
                onChange={(event) =>
                  setImageEditorState((prev) => ({
                    ...prev,
                    posY: Number(event.target.value),
                  }))
                }
              />
            </label>
            <label className={styles.editorLabel}>
              זום תמונה (scale)
              <input
                className={styles.editorInput}
                type="number"
                step="0.01"
                min="0.5"
                value={imageEditorState.zoom}
                onChange={(event) =>
                  setImageEditorState((prev) => ({
                    ...prev,
                    zoom: event.target.value,
                  }))
                }
              />
            </label>
            <div className={styles.editorActions}>
              <button className={styles.editorCancel} onClick={closeEditor}>
                ביטול
              </button>
              <button
                className={styles.editorCancel}
                onClick={handleCopyImageJson}
              >
                העתקת JSON
              </button>
              <button className={styles.editorSave} onClick={saveEditor}>
                שמירה
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPage;
