import Image from "next/image";
import styles from "./mbf-display.module.css";

export function MBFGallery() {
  return (
      <div className={styles.gallery}>
        <div className={styles.galleryItem}>
          <Image src="/image24.png" alt="Hello" width={250} height={250} />
          <span className={styles.galleryItemSubtitle}>
            MBF Positioning
           </span>
        </div>
        <div className={styles.galleryItem}>
          <Image src="/image2.gif" alt="Hello" width={250} height={250} />
          <span className={styles.galleryItemSubtitle}>
            MBF Angle Manipulation
           </span>
        </div>
        <div className={styles.galleryItem}>
          <Image src="/image2.gif" alt="Hello" width={250} height={250} />
          <span className={styles.galleryItemSubtitle}>MBF in Motion</span>
        </div>
      </div>
  );
}
