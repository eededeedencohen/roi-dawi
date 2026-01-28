import Roi7 from "../../../assets/roiImages/roi7.jpg";
import Roi8 from "../../../assets/roiImages/roi8.jpg";
import Roi9 from "../../../assets/roiImages/roi9.jpg";
import Roi10 from "../../../assets/roiImages/roi10.jpg";
import RoiArmy from "../../../assets/roiImages/roiArmi.jpg";
import RoiArmy2 from "../../../assets/roiImages/roiArmi2.jpg";
import RoiArmy3 from "../../../assets/roiImages/roiArmi3.jpg";
import RoiNitzan from "../../../assets/roiImages/roiAndNitzan2.jpg";
import RoiFamily from "../../../assets/roiImages/roiDawiFamily.jpg";
import styles from "../Memorial.module.css";

const memories = [
  { id: 1, img: Roi7, caption: "החיוך שכבש כל לב" },
  { id: 2, img: Roi8, caption: "שמחת חיים אינסופית" },
  { id: 3, img: Roi9, caption: "תמיד איתנו" },
  { id: 4, img: Roi10, caption: "רגעים של אור" },
  { id: 5, img: RoiArmy, caption: "לוחם של אמת" },
  { id: 6, img: RoiArmy2, caption: "חבר לנשק" },
  { id: 7, img: RoiArmy3, caption: "גאווה של משפחה" },
  { id: 8, img: RoiNitzan, caption: "אהבה ושמחת חיים" },
  { id: 9, img: RoiFamily, caption: "חיבוק משפחתי" },
];

const GalleryPage = () => {
  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.galleryTitle} data-reveal>
        רגעים של אור
      </h2>
      <div className={styles.galleryGrid}>
        {memories.map((item) => (
          <div key={item.id} className={styles.galleryItem} data-reveal>
            <img src={item.img} alt={item.caption} />
            <div className={styles.galleryCaption}>{item.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
