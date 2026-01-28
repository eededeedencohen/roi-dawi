import styles from "./Navbar.module.css"; // שים לב לנתיב

const Navbar = ({
  pages,
  activePage,
  onNavigate,
  onToggleMenu,
  isMenuOpen,
}) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navInner}>
        <div className={styles.brand}>
          <i className={`fa-solid fa-candle ${styles.brandIcon}`}></i>
          <span className={styles.brandText}>רועי דאוי ז"ל</span>
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={onToggleMenu}
          aria-label="פתיחת תפריט"
          aria-expanded={isMenuOpen}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className={styles.desktopMenu}>
          {pages.map((page) => (
            <button
              key={page.id}
              className={`${styles.navButton} ${
                activePage === page.id ? styles.activeTab : ""
              }`}
              onClick={() => onNavigate(page.id)}
            >
              {page.label}
            </button>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {pages.map((page) => (
            <button
              key={page.id}
              className={styles.mobileMenuItem}
              onClick={() => onNavigate(page.id)}
            >
              {page.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
