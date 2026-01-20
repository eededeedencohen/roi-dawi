import React, { useEffect, useRef } from "react";
import RoiImage1 from "../../assets/Images/roi1.png";
import RoiImage2 from "../../assets/Images/roi2.png";
import RoiImage3 from "../../assets/Images/roi3.png";
import RoiImage4 from "../../assets/Images/roi4.png";
import RoiImage5 from "../../assets/Images/roi5.png";
import RoiImage6 from "../../assets/Images/roi6.png";
import styles from "./RoiDawi.module.css";

const RoiDawi = () => {
  // --- כאן מגדירים את התמונות והמשפטים ---
  // אנא ערוך את המשפטים שיתאימו לאופיו של רועי ז"ל
  const memories = [
    {
      id: 1,
      img: RoiImage2,
      caption: "החיוך שכבש כל לב, האור שלא יכבה לעולם.",
    },
    {
      id: 2,
      img: RoiImage3,
      caption: "רגעים של אושר טהור, נזכור את שמחת החיים שלך.",
    },
    { id: 3, img: RoiImage4, caption: "לב רחב מלא בנתינה ואהבת חינם." },
    { id: 4, img: RoiImage5, caption: "הזיכרונות היפים הם הגשר שלנו אליך." },
    { id: 5, img: RoiImage6, caption: "תמיד איתנו, בכל מחשבה ובכל פעימת לב." },
  ];

  // רפרנסים לאלמנטים שאנחנו רוצים להנפיש בגלילה
  const revealRefs = useRef([]);
  revealRefs.current = [];

  // פונקציה עזר לאיסוף הרפרנסים
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // --- מנגנון הנפשה בגלילה (Intersection Observer) ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // כאשר האלמנט נכנס לשדה הראייה (אפילו קצת)
          if (entry.isIntersecting) {
            // הוספת קלאס שמפעיל את האנימציה ב-CSS
            entry.target.classList.add(styles.isVisible);
            // מפסיקים לעקוב אחרי אלמנט שכבר הונפש (לשיפור ביצועים)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // האנימציה תתחיל כש-15% מהאלמנט גלוי
      }
    );

    // הפעלת המעקב על כל האלמנטים שאספנו
    revealRefs.current.forEach((ref) => observer.observe(ref));

    // ניקוי בעת יציאה מהעמוד
    return () => {
      if (revealRefs.current) {
        revealRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <header className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <img
          src={RoiImage1}
          alt="רועי דאווי ז״ל"
          className={styles.heroImage}
        />

        {/* הוספנו את ה-ref לאלמנט שרוצים להנפיש */}
        <div className={styles.heroContent} ref={addToRefs}>
          <h1 className={styles.mainTitle}>רועי דאווי ז"ל</h1>
          <p className={styles.subTitle}>געגועים אינסופיים ללב ענק</p>
          <div className={styles.divider}></div>
        </div>
      </header>

      {/* Bio Section */}
      <section className={styles.bioSection}>
        {/* הוספת ref לכל הבלוק כדי שייכנס באנימציה */}
        <div
          className={`${styles.bioContainer} ${styles.scrollReveal}`}
          ref={addToRefs}
        >
          <h2 className={styles.sectionTitle}>מורשת של אור</h2>
          <p className={styles.bioText}>
            רועי היה אדם שכולו לב. בכל מקום שאליו הגיע, הפיץ אור ושמחה. החיוך
            שלו היה סימן ההיכר שלו, והנתינה שלו הייתה ללא גבולות. האתר הזה הוא
            פינה קטנה של זיכרון, המוקדשת לרגעים היפים שהשאיר אחריו.
            <br />
            אנחנו ממשיכים את דרכו, דרך של אהבה וחסד.
          </p>
        </div>
      </section>

      {/* Gallery Section with Captions */}
      <section className={styles.gallerySection}>
        <h2
          className={`${styles.sectionTitle} ${styles.scrollReveal}`}
          ref={addToRefs}
        >
          רסיסי זיכרונות
        </h2>
        <div className={styles.galleryGrid}>
          {memories.map((memory, index) => (
            // כל כרטיס מקבל ref משלו, ודיליי קטן באנימציה ליצירת אפקט מדורג
            <div
              key={memory.id}
              className={`${styles.imageCard} ${styles.scrollReveal}`}
              ref={addToRefs}
              style={{ transitionDelay: `${index * 0.15}s` }} // דיליי מדורג
            >
              <div className={styles.imageWrapper}>
                <img
                  src={memory.img}
                  alt={`זיכרון של רועי - ${memory.caption}`}
                  className={styles.galleryImg}
                />
                <div className={styles.imageOverlay}>
                  <p className={styles.captionText}>{memory.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Candle */}
      <footer className={styles.footer}>
        <div className={styles.candleContainer}>
          <div className={styles.candle}>
            <div className={styles.flame}></div>
          </div>
        </div>
        <p className={styles.footerText}>
          יהי זכרו ברוך ותהי נשמתו צרורה בצרור החיים
        </p>
      </footer>
    </div>
  );
};

export default RoiDawi;
