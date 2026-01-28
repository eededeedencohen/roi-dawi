import { useEffect, useState } from "react";
import styles from "../Memorial.module.css";

const STORAGE_KEY = "roi_memorial_candles";

const CandlePage = () => {
  const [count, setCount] = useState(0);
  const [isLit, setIsLit] = useState(false);

  useEffect(() => {
    const stored = Number.parseInt(
      window.localStorage.getItem(STORAGE_KEY) || "1420",
      10,
    );
    setCount(Number.isNaN(stored) ? 1420 : stored);
  }, []);

  const handleLight = () => {
    if (isLit) {
      return;
    }

    const nextCount = (count || 1420) + 1;
    setCount(nextCount);
    setIsLit(true);
    window.localStorage.setItem(STORAGE_KEY, String(nextCount));
  };

  return (
    <section className={styles.candleSection} data-reveal>
      <h2>הדלקת נר לזכרו</h2>
      <div className={styles.candleWrapper} data-reveal>
        <div className={styles.candleBody}></div>
        <div className={styles.candleWick}></div>
        {isLit && <div className={styles.candleFlame}></div>}
      </div>

      <button
        className={`${styles.candleButton} ${isLit ? styles.candleButtonDone : ""}`}
        onClick={handleLight}
        disabled={isLit}
        data-reveal
      >
        {isLit ? "הנר דולק" : "הדלק נר"}
      </button>

      <p className={styles.candleText} data-reveal>
        {isLit ? "יהי זכרו ברוך" : "לחץ להדלקת נר וירטואלי"}
      </p>

      <div className={styles.candleCount} data-reveal>
        {count.toLocaleString("he-IL")} אנשים הדליקו נר
      </div>
    </section>
  );
};

export default CandlePage;
