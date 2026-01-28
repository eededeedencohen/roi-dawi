import GivatiLogo from "../../../assets/roiImages/Givati.png";
import styles from "./MilitaryPage.module.css"; // שים לב לנתיב

const MilitaryPage = () => {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.militaryHeader} data-reveal>
        <img src={GivatiLogo} alt="סמל גבעתי" className={styles.militaryLogo} />
        <h2 className={styles.militaryTitle}>שירות וגבורה</h2>
        <p>חטיבת גבעתי | גדוד צבר</p>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineItem} data-reveal>
          <div className={styles.timelineDate}>מרץ 2021</div>
          <div className={styles.timelineCard}>
            <h3>הגיוס</h3>
            <p>
              רועי התגייס לחטיבת גבעתי, בעקבות המודל שלו ליאל גדעוני ז"ל. "בחרתי
              להתגייס לגבעתי בגלל ליאל, אי אפשר לברוח מהחיבור", אמר בעת גיוסו.
            </p>
            <p>
              לאחר סיום קורס מ"כים, שירת כמפקד כיתה בפלוגת החוד. הוא היה מפקד
              מזן נדיר - כזה שמדבר עם פקודיו בגובה העיניים, דואג להם כאילו היו
              אחיו הקטנים, ומהווה דוגמא אישית בכל רגע.
            </p>
          </div>
        </div>

        <div className={styles.timelineItem} data-reveal>
          <div className={styles.timelineDateAccent}>7 באוקטובר 2023</div>
          <div className={styles.timelineCard}>
            <h3>פרוץ המלחמה והקרב בכפר עזה</h3>
            <p>
              רועי היה בבית והיה אמור לצאת לטיול משתחררים ב-8/10. עם פרוץ
              המתקפה, הוקפץ מיד דרומה. במשך שלושה ימים נלחם בקיבוץ כפר עזה יחד
              עם לוחמיו מגדוד צבר, כשהם מטהרים בתים, מחסלים מחבלים ומשחררים
              תושבים מהממ"דים.
            </p>
            <blockquote className={styles.timelineQuote}>
              ״אני תושבת כפר עזה, זיהיתי את התמונה של רועי בטלויזיה באתי לספר
              לכם שהבן שלכם שחרר אותי ואת הילדים שלי מהממד״.
              <span>- עדות במהלך השבעה</span>
            </blockquote>
          </div>
        </div>

        <div className={styles.timelineItem} data-reveal>
          <div className={styles.timelineDateDark}>31 באוקטובר 2023</div>
          <div className={styles.timelineCard}>
            <h3>הנפילה - אסון הנמר</h3>
            <p>
              רועי נפל בקרב בצפון הרצועה, ביום החמישי לתמרון הקרקעי, באסון הנמר.
              נמ"ר ההנדסה בו נסעו נפגע מטיל נ"ט, ורועי נהרג יחד עם עשרה מלוחמיו.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilitaryPage;
