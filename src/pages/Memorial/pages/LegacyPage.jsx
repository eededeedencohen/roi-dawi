import styles from "../Memorial.module.css";

const LegacyPage = () => {
  return (
    <section className={styles.legacySection}>
      <div className={styles.legacyHeader}>
        <h2>הצוואה של רועי</h2>
        <p>נכתב ב-9/10, לאחר היציאה מהקרבות בכפר עזה</p>
      </div>

      <div className={styles.legacyPaper}>
        <div className={styles.legacyPaperTop}></div>
        <div className={styles.legacyText}>
          <p className={styles.legacyIntro}>״אבא, אמא, ניצני, עדן ותומר...״</p>
          <p>
            "הייתם כל מה שיכולתי לאחל לעצמי ויותר... אם למות אז רק ככה, אני לא
            מתחרט על כלום. היה לי את השירות הכי טוב שאפשר לבקש."
          </p>
          <p className={styles.legacyHighlight}>
            "תבטיחו לי דבר אחד - שאמא תמשיך ללכת למשחקים של ה'פועל', אבל איתך
            (אבא) הפעם!"
          </p>
          <p>
            <i className="fa-solid fa-quote-right"></i>
            החיוך עולה בכל רגע אפשרי, לראות את כל מי שנמצא פה...
            <strong>זו ארץ ישראל שלמענה אני עושה את זה.</strong>
          </p>
          <hr />
          <p className={styles.legacyFinal}>״ורק תתחזקו מהכל״</p>
        </div>

        <div className={styles.legacyFooter}>
          <p>
            <strong>מסר מהמשפחה:</strong> מילים אלו הפכו לצוואתו. המסר שלנו לעם
            ישראל הוא לקום מהשבר, לצמוח ממנו ולהתחזק למען מי שהקריב את חייו בכדי
            שנוכל להיות עם חופשי בארצנו.
          </p>
          <div className={styles.legacyMusicBox}>
            <i className="fa-solid fa-music"></i>
            <div>
              <p>״אנ׳לא מחליף את החיים שלי בחיים״</p>
              <span>
                המשפחה בחרה להנציח את רועי עם המשפט הזה מהשיר "לחזור הביתה" של
                התקווה 6, שרועי אהב כל כך.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyPage;
