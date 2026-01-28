import { useState } from "react";
import RoiHero from "../../../assets/roiImages/roi1.png";
import imageSettings from "../../../data/imageSettings.json";
import styles from "../Memorial.module.css";

const STORAGE_KEY = "roiImageOverrides";

const HomePage = ({ onNavigate }) => {
  const [overrides, setOverrides] = useState(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });
  const mergedSettings = {
    ...imageSettings.homeHero,
    ...(overrides.homeHero || {}),
  };
  const [editorState, setEditorState] = useState({
    isOpen: false,
    position: mergedSettings.position || "center 20%",
    zoom: String(mergedSettings.zoom ?? 1),
    height: String(mergedSettings.height ?? 260),
  });

  const handleImageEdit = (event) => {
    event.preventDefault();
    setEditorState({
      isOpen: true,
      position: mergedSettings.position || "center 20%",
      zoom: String(mergedSettings.zoom ?? 1),
      height: String(mergedSettings.height ?? 260),
    });
  };

  const handleCloseEditor = () => {
    setEditorState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSaveEditor = () => {
    const zoom = Number.parseFloat(editorState.zoom);
    const height = Number.parseInt(editorState.height, 10);
    if (Number.isNaN(zoom) || zoom <= 0) {
      return;
    }
    if (Number.isNaN(height) || height <= 0) {
      return;
    }

    const nextOverrides = {
      ...overrides,
      homeHero: {
        position: editorState.position,
        zoom,
        height,
      },
    };
    setOverrides(nextOverrides);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextOverrides));
    handleCloseEditor();
  };

  const handleCopyJson = () => {
    const zoom = Number.parseFloat(editorState.zoom);
    const height = Number.parseInt(editorState.height, 10);
    const payload = {
      homeHero: {
        position: editorState.position,
        zoom: Number.isNaN(zoom) ? (mergedSettings.zoom ?? 1) : zoom,
        height: Number.isNaN(height) ? (mergedSettings.height ?? 260) : height,
      },
    };

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
    }
  };
  return (
    <section className={styles.homeSection}>
      <div className={styles.heroSection}>
        <div
          className={styles.heroImageWrapper}
          style={{ height: `${mergedSettings.height || 260}px` }}
        >
          <img
            src={RoiHero}
            alt="סמ״ר רועי דאוי"
            className={styles.heroImage}
            style={{
              objectPosition: mergedSettings.position || "center 20%",
              "--hero-zoom": String(mergedSettings.zoom ?? 1),
            }}
            onContextMenu={handleImageEdit}
          />
          <h1 className={styles.heroImageTitle}>סמ״ר רועי דאוי הי״ד</h1>
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>לוחם בגדוד צבר, חטיבת גבעתי</p>

          <div className={styles.heroInfoRow}>
            <div className={styles.heroInfoItem}>
              <span className={styles.heroInfoLabel}>נולד</span>
              5/11/2002
              <br />
              ל׳ במרחשסוון תשס״ג
            </div>
            <div className={styles.heroDivider}></div>
            <div className={styles.heroInfoItem}>
              <span className={styles.heroInfoLabel}>נפל בקרב</span>
              31/10/2023
              <br />
              ט״ז במרחשוון תשפ"ד
            </div>
          </div>

          <div className={styles.heroQuote}>
            <blockquote>״ורק תתחזקו מהכל״</blockquote>
            <span>מתוך מכתבו האחרון</span>
          </div>
        </div>
      </div>

      <div className={styles.introSection}>
        <h2 className={styles.introTitle}>בן הזקונים, הלוחם, החבר</h2>
        <p className={styles.introText}>
          רועי נפל באסון הנמר בקרב בצפון רצועת עזה יחד עם עוד עשרה מלוחמיו ביום
          החמישי ללחימה בעזה. רועי היה אדם שחיוך תמיד נסוך על פניו, בעל רוח
          איתנה ולב רחב שראה תמיד את הטוב באנשים.
        </p>
        <button
          className={styles.primaryButton}
          onClick={() => onNavigate("bio")}
        >
          לקריאת סיפור חייו
        </button>
      </div>

      {editorState.isOpen && (
        <div className={styles.editorOverlay} onClick={handleCloseEditor}>
          <div
            className={styles.editorModal}
            onClick={(event) => event.stopPropagation()}
          >
            <h4 className={styles.editorTitle}>עריכת תמונה</h4>
            <label className={styles.editorLabel}>
              מיקום (object-position)
              <input
                className={styles.editorInput}
                type="text"
                value={editorState.position}
                onChange={(event) =>
                  setEditorState((prev) => ({
                    ...prev,
                    position: event.target.value,
                  }))
                }
              />
            </label>
            <label className={styles.editorLabel}>
              זום (scale)
              <input
                className={styles.editorInput}
                type="number"
                step="0.01"
                min="0.5"
                value={editorState.zoom}
                onChange={(event) =>
                  setEditorState((prev) => ({
                    ...prev,
                    zoom: event.target.value,
                  }))
                }
              />
            </label>
            <label className={styles.editorLabel}>
              גובה (px)
              <input
                className={styles.editorInput}
                type="number"
                step="1"
                min="120"
                value={editorState.height}
                onChange={(event) =>
                  setEditorState((prev) => ({
                    ...prev,
                    height: event.target.value,
                  }))
                }
              />
            </label>
            <div className={styles.editorActions}>
              <button
                type="button"
                className={styles.editorCancel}
                onClick={handleCloseEditor}
              >
                ביטול
              </button>
              <button
                type="button"
                className={styles.editorCancel}
                onClick={handleCopyJson}
              >
                העתקת JSON
              </button>
              <button
                type="button"
                className={styles.editorSave}
                onClick={handleSaveEditor}
              >
                שמירה
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomePage;
