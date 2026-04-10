import { motion } from "framer-motion";
import { containerReveal, itemReveal, revealViewport } from "@/components/motion";
import styles from "@/components/Features.module.css";

const imgPhone = "/figma-assets/frame-2087325872.svg";
const imgGooglePlay = "/figma-assets/3143c6af-eef9-4576-9746-42f5f1a19e63.svg";
const imgAppStore = "/figma-assets/1db8887b-7531-4859-a14c-9f424416efc7.svg";

export default function Features() {
  return (
    <motion.div
      className={styles.root}
      variants={containerReveal}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
    >
      {/* Левая часть — телефон */}
      <motion.div
        className={styles.phoneSide}
        variants={itemReveal}
      >
        <div className={styles.phoneWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgPhone}
            alt="Мобильное приложение"
            className={styles.phoneImage}
            style={{
              filter:
                "drop-shadow(0 10px 22px rgba(0, 0, 0, 0.06)) drop-shadow(0 39px 39px rgba(0, 0, 0, 0.05)) drop-shadow(0 88px 53px rgba(0, 0, 0, 0.03)) drop-shadow(0 157px 63px rgba(0, 0, 0, 0.01)) drop-shadow(0 246px 69px rgba(0, 0, 0, 0.00))",
            }}
          />
        </div>
      </motion.div>
      {/* Правая часть */}
      <motion.div
        className={styles.contentSide}
        variants={itemReveal}
      >
        <div className={styles.intro}>
          <div className={styles.badge}>
            <p className={styles.badgeText}>Система всегда под рукой</p>
          </div>
          <p className={styles.title}>
            Контроль процессов — даже когда вы не&nbsp;в&nbsp;офисе
          </p>
          <p className={styles.description}>
            Отслеживайте статусы, получайте обновления и&nbsp;будьте в&nbsp;курсе текущей ситуации по
            рабочим вопросам. Подходит для повседневного использования, когда важно быстро
            понять, что происходит и&nbsp;где&nbsp;требуется внимание.
          </p>
        </div>
        <div className={styles.stores}>
          <p className={styles.storesTitle}>
            Согласуйте, отслеживайте статусы и получайте уведомления
          </p>
          <div className={styles.storesList}>
            <div className={styles.storeCard}>
              <div className={styles.storeText}>
                <p className={styles.storeHint}>Загрузить в&nbsp;</p>
                <p className={styles.storeName}>App Store</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgAppStore} alt="App Store" className={styles.storeIcon} />
            </div>
            <div className={styles.storeCard}>
              <div className={styles.storeText}>
                <p className={styles.storeHint}>Доступно в&nbsp;</p>
                <p className={styles.storeName}>Google Play</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgGooglePlay} alt="Google Play" className={styles.storeIcon} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
