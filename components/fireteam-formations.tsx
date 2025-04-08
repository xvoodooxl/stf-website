import Image from "next/image";
import styles from "./fireteam-formations.module.css";

export function FormationsGallery() {
  return (
<>
<div className={styles.gallery}>
        <div className={styles.galleryItem}>
          <Image src="/formations/form6.png" alt="Hello" width={200} height={200} />
          <span className={styles.galleryItemSubtitle}>
            Wedge Left
           </span>
        </div>
        <div className={styles.galleryItem}>
          <Image src="/formations/form5.png" alt="Hello" width={200} height={200} />
          <span className={styles.galleryItemSubtitle}>
            Wedge Right
           </span>
        </div>
        <div className={styles.galleryItem}>
          <Image src="/formations/form3.png" alt="Hello" width={200} height={200} />
          <span className={styles.galleryItemSubtitle}>Column</span>
        </div>
        <div className={styles.galleryItem}>
          <Image src="/formations/form4.png" alt="Hello" width={200} height={200} />
          <span className={styles.galleryItemSubtitle}>Battle Line</span>
        </div>
        <div className={styles.galleryItem}>
          <Image src="/formations/form1.png" alt="Hello" width={200} height={200} />
          <span className={styles.galleryItemSubtitle}>
            Echelon Left
           </span>
        </div>
        <div className={styles.galleryItem}>
          <Image src="/formations/form2.png" alt="Hello" width={200} height={200} />
          <span className={styles.galleryItemSubtitle}>
            Echelon Right
           </span>
        </div>
        <div className={styles.galleryItem}>
          <Image src="/formations/form7.png" alt="Hello" width={200} height={200} />
          <span className={styles.galleryItemSubtitle}>Staggered Column</span>
        </div>
        <div className={styles.galleryItem}>
          <Image src="/formations/form8.png" alt="Hello" width={200} height={200} />
          <span className={styles.galleryItemSubtitle}>Staggered Battle Line</span>
        </div>
        <div className={styles.galleryItem}>
          <Image src="/formations/form9.png" alt="Hello" width={200} height={200} />
          <span className={styles.galleryItemSubtitle}>
            Diamond
           </span>
        </div>
        <div className={styles.galleryItem}>
          <Image src="/formations/form10.png" alt="Hello" width={200} height={200} />
          <span className={styles.galleryItemSubtitle}>
            Square
           </span>
        </div>
      </div>
</>
  );
}
