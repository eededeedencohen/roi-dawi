import { useEffect, useState } from "react";
import styles from "../Memorial.module.css";

const LIT_KEY = "roi_memorial_candle_lit";
const COUNTER_API_BASE = "https://cart.edencohen.dev/api/v1/cander-counter";

const CandlePage = () => {
  const [count, setCount] = useState(0);
  const [isLit, setIsLit] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch(`${COUNTER_API_BASE}/amount`);
        if (!response.ok) {
          throw new Error("Failed to fetch candle count");
        }
        const data = await response.json();
        const value = Number.parseInt(
          data?.data?.amount ?? data?.amount ?? data?.count,
          10,
        );
        setCount(Number.isNaN(value) ? 0 : value);
      } catch {
        setCount(0);
      }
      setIsLit(window.localStorage.getItem(LIT_KEY) === "true");
    };
    load();
  }, []);

  const handleLight = async () => {
    if (isLit) {
      return;
    }

    let nextCount = count || 0;
    try {
      const response = await fetch(`${COUNTER_API_BASE}/increment`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to increment candle count");
      }
      const data = await response.json();
      const value = Number.parseInt(
        data?.data?.amount ?? data?.amount ?? data?.count,
        10,
      );
      nextCount = Number.isNaN(value) ? nextCount : value;
    } catch {
      // keep current count on failure
    }
    setCount(nextCount);
    setIsLit(true);
    window.localStorage.setItem(LIT_KEY, "true");
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
