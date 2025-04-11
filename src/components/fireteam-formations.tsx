import Image from "next/image";
import styles from "./fireteam-formations.module.css";

export function FormationsGallery() {
  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.galleryItem}>
          <Image
            src="/formations/formations-column.png"
            alt="Hello"
            width={200}
            height={200}
          />
          <span className={styles.galleryItemSubtitle}>Column</span>
        </div>
        <div className={styles.galleryItem}>
          <Image
            src="/formations/formations-staggered-col.png"
            alt="Hello"
            width={200}
            height={200}
          />
          <span className={styles.galleryItemSubtitle}>Staggered Column</span>
        </div>
        <div className={styles.galleryItem}>
          <Image
            src="/formations/formations-wedge.png"
            alt="Hello"
            width={200}
            height={200}
          />
          <span className={styles.galleryItemSubtitle}>Wedge</span>
        </div>
        <div className={styles.galleryItem}>
          <Image
            src="/formations/formations-tactical-blob.png"
            alt="Hello"
            width={200}
            height={200}
          />
          <span className={styles.galleryItemSubtitle}>Tactical Blob</span>
        </div>
        <div className={styles.galleryItem}>
          <Image
            src="/formations/formations-battleline.png"
            alt="Hello"
            width={200}
            height={200}
          />
          <span className={styles.galleryItemSubtitle}>Battle Line</span>
        </div>
        <div className={styles.galleryItem}>
          <Image
            src="/formations/formations-staggered-battleline.png"
            alt="Hello"
            width={200}
            height={200}
          />
          <span className={styles.galleryItemSubtitle}>
            Staggered Battle Line
          </span>
        </div>
        <div className={styles.galleryItem}>
          <Image
            src="/formations/form9.png"
            alt="Hello"
            width={200}
            height={200}
          />
          <span className={styles.galleryItemSubtitle}>360 | Diamond</span>
        </div>
        <div className={styles.galleryItem}>
          <Image
            src="/formations/form10.png"
            alt="Hello"
            width={200}
            height={200}
          />
          <span className={styles.galleryItemSubtitle}>360 | Square</span>
        </div>
      </div>
    </>
  );
}
