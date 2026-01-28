import styles from "../Memorial.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerCandle} aria-hidden="true">
          <div className={styles.footerFlame}></div>
          <div className={styles.footerWick}></div>
          <div className={styles.footerWax}></div>
        </div>
        <p className={styles.footerTitle}>יהי זכרו ברוך</p>
        <p className={styles.footerSubtitle}>
          נבנה באהבה לזכרו של סמ״ר רועי דאוי הי״ד • 2002-2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
