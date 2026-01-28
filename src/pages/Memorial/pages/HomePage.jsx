import RoiHero from "../../../assets/roiImages/roiLast.webp";
import styles from "../Memorial.module.css";

const HomePage = ({ onNavigate }) => {
  return (
    <section className={styles.homeSection}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroImageWrapper}>
            <img
              src={RoiHero}
              alt="סמ״ר רועי דאוי"
              className={styles.heroImage}
            />
          </div>
          <h1 className={styles.heroTitle}>סמ״ר רועי דאוי הי״ד</h1>
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
    </section>
  );
};

export default HomePage;
