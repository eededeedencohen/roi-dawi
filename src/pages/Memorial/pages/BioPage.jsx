import { useEffect, useState } from "react";
import RoiHapoel from "../../../assets/roiImages/roiHapoel.jpg";
import RoiAndArieHapoel from "../../../assets/roiImages/RoiAndArieHapoel.jpeg";
import RoiMechina from "../../../assets/roiImages/roiMechina1.jpg";
import RoiMechinaAlt from "../../../assets/roiImages/roiMechina2.jpg";
import RoiAndNitzan from "../../../assets/roiImages/roiAndNitzan3.jpg";
import RoiAndNitzan2 from "../../../assets/roiImages/roiAndNitzan2.jpg";
import RoiAndNitzan4 from "../../../assets/roiImages/roiAndNitzan4.jpg";
import RoiAndNitzan5 from "../../../assets/roiImages/roiAndNitzan5.jpg";
import RoiAndEden from "../../../assets/roiImages/roiAndEden2.jpg";
import RoiAndTomer from "../../../assets/roiImages/roiAndTomer.jpg";
// import RoiFamily from "../../../assets/roiImages/roiAndTomerAndEden2.jpg";
import RoiFamily from "../../../assets/roiImages/roiDawiFamily.jpg";
import imageSettings from "../../../data/imageSettings.json";
import styles from "../Memorial.module.css";

const STORAGE_KEY = "roiImageOverrides";

const BioPage = () => {
  const mechinaImages = [RoiMechina, RoiMechinaAlt];
  const [mechinaIndex, setMechinaIndex] = useState(0);
  const hapoelImages = [RoiHapoel, RoiAndArieHapoel];
  const [hapoelIndex, setHapoelIndex] = useState(0);
  const nitzanImages = [
    RoiAndNitzan,
    RoiAndNitzan2,
    RoiAndNitzan4,
    RoiAndNitzan5,
  ];
  const [nitzanIndex, setNitzanIndex] = useState(0);
  const [overrides, setOverrides] = useState(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });
  const { bio } = imageSettings;
  const mergedSettings = {
    ...bio,
    ...overrides,
  };
  const [editorState, setEditorState] = useState({
    isOpen: false,
    key: "",
    position: "center 20%",
    zoom: "1",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMechinaIndex((prev) => (prev + 1) % mechinaImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [mechinaImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHapoelIndex((prev) => (prev + 1) % hapoelImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [hapoelImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNitzanIndex((prev) => (prev + 1) % nitzanImages.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [nitzanImages.length]);

  const handleImageEdit = (event, key) => {
    event.preventDefault();
    const current = mergedSettings[key] || {};
    setEditorState({
      isOpen: true,
      key,
      position: current.position || "center 20%",
      zoom: String(current.zoom ?? 1),
    });
  };

  const handleCloseEditor = () => {
    setEditorState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSaveEditor = () => {
    const zoom = Number.parseFloat(editorState.zoom);
    if (Number.isNaN(zoom) || zoom <= 0) {
      return;
    }

    const nextOverrides = {
      ...overrides,
      [editorState.key]: {
        position: editorState.position,
        zoom,
      },
    };
    setOverrides(nextOverrides);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextOverrides));
    handleCloseEditor();
  };

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>סיפור חייו</h2>
      </div>

      <p className={styles.paragraph}>
        רועי, בן זקונים לאריה ובטי, אח קטן לעדן ותומר, נולד בשכונת קטמון
        בירושלים. ביסודי למד בביה״ס יהודה הלוי ולאחר מכן עבר לתיכון גבעת גונן
        במגמת תקשורת.
      </p>

      <div className={styles.bioPair}>
        <div className={styles.bioPairCard}>
          <div className={styles.highlightCard}>
            <h3 className={styles.highlightTitle}>
              <i className="fa-solid fa-basketball"></i> נשמה אדומה
            </h3>
            <p className={styles.highlightText}>
              רועי היה אוהד "שרוף" של הפועל ירושלים. הוא הכיר כל שחקן בליגה, נסע
              לכל מגרש בארץ ואף היה מתעורר באמצע הלילה לצפות במשחקי NBA.
            </p>
            <p className={styles.highlightText}>
              בכל שנה הקפיד לרוץ במרתון ירושלים. חלומו הגדול היה לשלב את שתי
              אהבותיו - ספורט ותקשורת - ולהפוך לשדרן ספורט.
            </p>
            <div className={styles.noteBox}>
              <p className={styles.noteTitle}>הברכה האחרונה:</p>
              <p>
                ימים ספורים לפני נפילתו, לקראת יום הולדתו ה-21 שלא זכה לחגוג,
                הקליטו עבורו שחקני הפועל ירושלים ברכת מזל טוב מרגשת.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bioPairImage}>
          <div className={styles.imageCard}>
            <img
              src={hapoelImages[hapoelIndex]}
              alt="רועי במשחק הפועל"
              className={`${styles.imageFade} ${styles.imageTopFocus}`}
              style={{
                objectPosition: mergedSettings.hapoel.position,
                transform: `scale(${mergedSettings.hapoel.zoom})`,
              }}
              onContextMenu={(event) => handleImageEdit(event, "hapoel")}
              key={hapoelImages[hapoelIndex]}
            />
          </div>
        </div>
      </div>

      <div className={styles.bioPair}>
        <div className={styles.bioPairCard}>
          <div className={styles.highlightCardAlt}>
            <h3 className={styles.highlightTitleAlt}>
              <i className="fa-solid fa-person-hiking"></i> "הנסיך" של המכינה
            </h3>
            <p className={styles.highlightText}>
              רועי הגיע למכינת "דרך ארץ" (שלוחת אשלים) ועבר שם תהליך התבגרות
              משמעותי. חבריו כינו אותו "הנסיך" - זה שכולם סומכים עליו, "שחקן
              נשמה" אמיתי.
            </p>
            <p className={styles.quoteText}>
              "בחור רגוע עם חיוך מאיר עיניים, מלא נתינה, שמחה, שיח עמוק ולב
              פתוח"
              <span>- נועם, המדריכה במכינה</span>
            </p>
            <p className={styles.highlightFootnote}>
              מורשת: בהשראת ערכיו, הקימו בוגרי המכינה את מיזם "סיירת מישהו" -
              להתנדבות ועשייה חברתית.
            </p>
          </div>
        </div>
        <div className={styles.bioPairImage}>
          <div className={styles.imageCard}>
            <img
              src={mechinaImages[mechinaIndex]}
              alt="רועי במכינה"
              className={styles.imageFade}
              style={{
                objectPosition: mergedSettings.mechina.position,
                transform: `scale(${mergedSettings.mechina.zoom})`,
              }}
              onContextMenu={(event) => handleImageEdit(event, "mechina")}
              key={mechinaImages[mechinaIndex]}
            />
          </div>
        </div>
      </div>

      <div className={styles.familySection}>
        <h3 className={styles.sectionSubtitle}>הנסיך של המשפחה</h3>
        <div className={styles.familyGrid}>
          <div className={styles.familyCard}>
            <div className={styles.familyCardImageWrapper}>
              <img
                src={RoiAndEden}
                alt="רועי ועדן"
                className={styles.familyImageEden}
                style={{
                  objectPosition: mergedSettings.eden.position,
                  transform: `scale(${mergedSettings.eden.zoom})`,
                }}
                onContextMenu={(event) => handleImageEdit(event, "eden")}
              />
            </div>
            <div className={styles.familyHeader}>
              <i className="fa-solid fa-heart"></i>
              <h4>האחות עדן</h4>
            </div>
            <p>
              עדן, אחותו הגדולה, מכנה אותו "הנסיך של המשפחה". היא מספרת שרועי
              היה מקור גאווה עבורה ועבור ההורים. הקשר ביניהם היה עמוק וחזק,
              וכשפרצה המלחמה, גם עדן גויסה למילואים, שותפה לגורל של אחיה הלוחם.
            </p>
          </div>
          <div className={styles.familyCard}>
            <div className={styles.familyCardImageWrapper}>
              <img
                src={RoiAndTomer}
                alt="רועי ותומר"
                className={styles.familyImageTomer}
                style={{
                  objectPosition: mergedSettings.tomer.position,
                  transform: `scale(${mergedSettings.tomer.zoom})`,
                }}
                onContextMenu={(event) => handleImageEdit(event, "tomer")}
              />
            </div>
            <div className={styles.familyHeader}>
              <i className="fa-solid fa-user-shield"></i>
              <h4>האח תומר</h4>
            </div>
            <p>
              תומר, האח הגדול, מספר שרועי היה עבורו "שותף סוד". הקשר בין האחים
              היה מיוחד במינו.
            </p>
            <div className={styles.infoNote}>
              <i className="fa-solid fa-circle-info"></i>
              <strong>סגירת מעגל מצמררת:</strong> ליאל גדעוני ז"ל, שהיה המודל
              לחיקוי של רועי, לימד את תומר שיעורים פרטיים במתמטיקה לפני גיוסו.
            </div>
          </div>
        </div>
        <div className={styles.familyPhotoCard}>
          <img
            src={RoiFamily}
            alt="רועי עם תומר ועדן"
            style={{
              objectPosition: mergedSettings.family.position,
              transform: `scale(${mergedSettings.family.zoom})`,
            }}
            onContextMenu={(event) => handleImageEdit(event, "family")}
          />
          <p>רועי עם הוריו: אריה ובטי, אחיו עדן ותומר ובת זוגו ניצן</p>
        </div>
      </div>

      <div className={styles.secondaryGrid}>
        <div className={styles.bioColumn}>
          <h3 className={styles.sectionSubtitle}>המכינה וניצן</h3>
          <p className={styles.paragraph}>
            רועי הגיע למכינה קדם צבאית "דרך ארץ" מתוך רצון לפיתוח אישי. הוא יצא
            משם "רועי פרו-מקס" - גרסה משופרת, חזקה ועוצמתית של עצמו. במכינה הכיר
            את אהבת חייו, ניצן.
          </p>
          <p className={styles.paragraph}>
            לניצן ורועי היה קשר מדהים של שלוש שנים. הם אהבו לטייל בארץ, לבלות את
            הסופ"שים בים (ניצן גולשת מאשקלון), והיו החברים הכי טובים. החברות
            ביניהם הייתה מלאה בשמחת חיים, אושר וצחוק.
          </p>
        </div>
        <div className={`${styles.imageCard} ${styles.squareImageCard}`}>
          <img
            src={nitzanImages[nitzanIndex]}
            alt="רועי וניצן"
            className={styles.imageFade}
            key={nitzanImages[nitzanIndex]}
          />
        </div>
      </div>

      <div className={styles.darkFeature}>
        <h3>הקשר השמיימי לליאל גדעוני ז"ל</h3>
        <p>
          את סרט הגמר שלו בתקשורת הקדישו רועי וחבריו לסמ"ר ליאל גדעוני הי"ד שנפל
          ב"צוק איתן". רועי אימץ את משפטו של ליאל:
          <strong>״תחייכו כי חיוך זה שמחה ושמחה זה הכוח להמשיך הלאה״</strong>
          כדרך חיים.
        </p>
        <div className={styles.darkFeatureColumns}>
          <ul>
            <li>שניהם גדלו באותה שכונה (קטמון)</li>
            <li>למדו באותו תיכון אצל אותה מחנכת</li>
            <li>אהדו את אותה קבוצה (הפועל ירושלים)</li>
          </ul>
          <ul>
            <li>שניהם נולדו באותו תאריך: 5/11</li>
            <li>רועי התגייס לגבעתי בעקבות ליאל</li>
            <li>ליאל לימד את תומר מתמטיקה</li>
            <li>שניהם נהרגו ברצועת עזה הארורה למען עם ישראל</li>
          </ul>
        </div>
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

export default BioPage;
