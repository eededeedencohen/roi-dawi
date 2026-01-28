import { useMemo, useState } from "react";
import styles from "./Memorial.module.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import BioPage from "./pages/BioPage.jsx";
import MilitaryPage from "./pages/MilitaryPage.jsx";
import LegacyPage from "./pages/LegacyPage.jsx";
import CandlePage from "./pages/CandlePage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";

const Memorial = () => {
  const [activePage, setActivePage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = useMemo(
    () => [
      { id: "home", label: "ראשי" },
      { id: "bio", label: "סיפור חייו" },
      { id: "military", label: "שירות וגבורה" },
      { id: "legacy", label: "הצוואה" },
      { id: "candle", label: "הדלקת נר" },
      { id: "gallery", label: "גלריה" },
    ],
    [],
  );

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (activePage) {
      case "bio":
        return <BioPage />;
      case "military":
        return <MilitaryPage />;
      case "legacy":
        return <LegacyPage />;
      case "candle":
        return <CandlePage />;
      case "gallery":
        return <GalleryPage />;
      case "home":
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className={styles.page} dir="rtl">
      <Navbar
        pages={pages}
        activePage={activePage}
        onNavigate={handleNavigate}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        isMenuOpen={isMenuOpen}
      />
      <main className={styles.mainContent}>
        <div className={styles.fadeIn}>{renderPage()}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Memorial;
