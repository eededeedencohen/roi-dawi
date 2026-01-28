import React, { useEffect, useRef } from "react";
import RoiImage1 from "../../assets/roiImages/roi1.png";
import RoiImage2 from "../../assets/roiImages/roi2.png";
import RoiImage3 from "../../assets/roiImages/roi3.png";
import RoiImage4 from "../../assets/roiImages/roi4.png";
import RoiImage5 from "../../assets/roiImages/roi5.png";
import RoiImage6 from "../../assets/roiImages/roi6.png";
import styles from "./RoiDawi.module.css";

const RoiDawi = () => {
  const personalInfo = {
    name: "סמ״ר רועי דאוי הי״ד",
    dates: "5/11/2002 - 31/10/2023",
    role: "לוחם סיירת גבעתי",
  };

  const memories = [
    { id: 1, img: RoiImage2, caption: "החיוך שכבש כל לב" },
    { id: 2, img: RoiImage5, caption: "שמחת חיים אינסופית" },
    { id: 3, img: RoiImage6, caption: "תמיד איתנו" },
  ];

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    revealRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => {
      revealRefs.current.forEach((ref) => ref && observer.unobserve(ref));
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
        <div className={styles.heroContent} ref={addToRefs}>
          <h2 className={styles.unitTitle}>{personalInfo.role}</h2>
          <h1 className={styles.mainTitle}>{personalInfo.name}</h1>
          <p className={styles.dates}>{personalInfo.dates}</p>
          <div className={styles.quoteBadge}>״ורק תתחזקו מהכל״</div>
        </div>
      </header>

      {/* פרטי הנפילה */}
      <section className={styles.introSection} ref={addToRefs}>
        <div className={`${styles.introCard} ${styles.scrollReveal}`}>
          <p>
            רועי נפל באסון הנמר בקרב בצפון רצועת עזה יחד עם עוד עשרה מלוחמיו
            ביום החמישי ללחימה הקרקעית. בן זקונים לאריה ובטי, ואח קטן לעדן
            ותומר.
          </p>
        </div>
      </section>

      {/* מקטע 1: ילדות וספורט */}
      <section className={styles.storySection}>
        <div
          className={`${styles.storyRow} ${styles.scrollReveal}`}
          ref={addToRefs}
        >
          <div className={styles.imageContainer}>
            <img
              src={RoiImage6}
              alt="רועי וספורט"
              className={styles.storyImage}
            />
          </div>
          <div className={styles.textContainer}>
            <h3>ילדות של ספורט וירושלים</h3>
            <div className={styles.purpleDivider}></div>
            <p>
              רועי נולד וגדל בשכונת קטמון בירושלים. הספורט היה עמוד התווך בחייו:
              מגיל קטן התאמן בג׳ודו ונחל הצלחות רבות. האהבה לספורט הפכה אותו
              בנערותו לאוהד שרוף של הפועל ירושלים.
            </p>
            <p>
              חלומו הגדול היה לשלב בין שתי אהבותיו – ספורט ותקשורת – ולעבוד
              בערוץ הספורט.
            </p>
          </div>
        </div>

        {/* מקטע 2: ליאל גדעוני */}
        <div
          className={`${styles.storyRow} ${styles.reverse} ${styles.scrollReveal}`}
          ref={addToRefs}
        >
          <div className={styles.imageContainer}>
            <img
              src={RoiImage3}
              alt="בדרך של ליאל"
              className={styles.storyImage}
            />
          </div>
          <div className={styles.textContainer}>
            <h3>בדרכו של ליאל ז"ל</h3>
            <div className={styles.purpleDivider}></div>
            <p>
              את סרט הגמר שלו בתיכון הקדיש רועי לזכרו של סמ״ר ליאל גדעוני הי״ד.
              קווי הדמיון מצמררים: שניהם מאותה שכונה, אותו תיכון, אותה מחנכת,
              ושניהם נולדו באותו התאריך – 5/11.
            </p>
            <p>
              רועי אימץ את המשפט של ליאל: ״תחייכו כי חיוך זה שמחה ושמחה זה הכוח
              להמשיך הלאה״, והתגייס לגבעתי בעקבותיו.
            </p>
          </div>
        </div>

        {/* מקטע 3: המכינה וניצן */}
        <div
          className={`${styles.storyRow} ${styles.scrollReveal}`}
          ref={addToRefs}
        >
          <div className={styles.imageContainer}>
            <img
              src={RoiImage2}
              alt="רועי וניצן"
              className={styles.storyImage}
            />
          </div>
          <div className={styles.textContainer}>
            <h3>מנהיגות ואהבה</h3>
            <div className={styles.purpleDivider}></div>
            <p>
              במכינת "דרך ארץ" רועי הפך ל"גרסה 2.0" – חזק יותר, מנהיג ובטוח. שם
              גם הכיר את ניצן, אהבת חייו.
            </p>
            <p>
              במשך שלוש שנים היה להם קשר מדהים, מלא בטיולים בארץ, סופ"שים בים
              וחברות אמת מלאה בצחוק ואושר.
            </p>
          </div>
        </div>

        {/* מקטע 4: הלחימה */}
        <div
          className={`${styles.storyRow} ${styles.reverse} ${styles.scrollReveal}`}
          ref={addToRefs}
        >
          <div className={styles.imageContainer}>
            <img
              src={RoiImage4}
              alt="לוחם גבעתי"
              className={styles.storyImage}
            />
          </div>
          <div className={styles.textContainer}>
            <h3>חרבות ברזל</h3>
            <div className={styles.purpleDivider}></div>
            <p>
              ב-7/10 הוקפץ רועי מהבית. במשך שלושה ימים נלחם בגבורה בכפר עזה,
              טיהר בתים וחילץ תושבים תחת אש.
            </p>
            <p>
              תושבת הקיבוץ סיפרה בשבעה: "הבן שלכם שחרר אותי ואת הילדים שלי".
            </p>
          </div>
        </div>
      </section>

      {/* המכתב */}
      <section className={styles.letterSection} ref={addToRefs}>
        <div className={`${styles.letterContent} ${styles.scrollReveal}`}>
          <h2>הצוואה של רועי</h2>
          <p className={styles.letterIntro}>
            מתוך מכתב שכתב ב-9/10, רגע לפני הכניסה לעזה:
          </p>
          <div className={styles.quoteBox}>
            "החיוך עולה בכל רגע אפשרי, לראות את כל מי שנמצא פה זו ארץ ישראל
            שלמענה אני עושה את זה"
          </div>
          <h3 className={styles.finalWords}>״ורק תתחזקו מהכל״</h3>
          <p className={styles.familyNote}>
            זה המסר שלנו: לקום, לצמוח ולהתחזק למען מי שהקריב את חייו.
          </p>
        </div>
      </section>

      {/* גלריה */}
      <section className={styles.gallerySection}>
        <h2 className={styles.galleryTitle}>רגעים של אור</h2>
        <div className={styles.grid}>
          {memories.map((item, i) => (
            <div
              key={item.id}
              className={`${styles.gridItem} ${styles.scrollReveal}`}
              ref={addToRefs}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img src={item.img} alt={item.caption} />
              <div className={styles.captionOverlay}>{item.caption}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.memorialText}>
          יהי זכרו ברוך ותהי נשמתו צרורה בצרור החיים
        </div>
      </footer>
    </div>
  );
};

export default RoiDawi;
