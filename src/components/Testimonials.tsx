import { motion } from "framer-motion";
import { containerReveal, itemReveal, revealViewport } from "@/components/motion";
import styles from "@/components/Testimonials.module.css";

const avatar1 = "/figma-assets/98649603-4477-4cf4-be37-632983203c4c.png";
const avatar2 = "/figma-assets/b6d08d95-22b6-4005-a8bf-301291f81b32.png";
const avatar3 = "/figma-assets/7b96c264-6b67-49cf-b622-2bafc84b8620.png";
const avatar4 = "/figma-assets/f49b365b-7614-42bf-afea-509acb6ebcc4.png";
const avatar5 = "/figma-assets/11f5e18f-4580-4c0a-adea-6a79bd34dd4d.png";
const avatar6 = "/figma-assets/a363909f-1e83-4033-9d74-db26588e7f2b.png";

const clientLogos = [
  { src: "/logos/lobachevskiy.png", alt: "ЖК Лобачевский" },
  { src: "/logos/bolshaya-semerka.png", alt: "Большая Семерка" },
  { src: "/logos/poklonnaya7.png", alt: "Поклонная №7" },
  { src: "/logos/dar.png", alt: "DAR" },
  { src: "/logos/krylatkiy.png", alt: "ЖК Крылатский" },
  { src: "/logos/solos.png", alt: "SOLOS" },
  { src: "/logos/rakurs.png", alt: "RAKURS" },
  { src: "/logos/mid.png", alt: "MID Жилой Комплекс" },
  { src: "/logos/bestcon.png", alt: "Bestcon" },
  { src: "/logos/vremya.png", alt: "Время" },
];

export default function Testimonials() {
  return (
    <motion.div
      className={styles.root}
      variants={containerReveal}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
    >
      {/* Заголовок */}
      <motion.div className={styles.header} variants={itemReveal}>
        <div className={styles.badge}>
          <p className={styles.badgeText}>Отзывы и&nbsp;кейсы</p>
        </div>
        <p className={styles.title}>
          Что говорят клиенты
        </p>
        <p className={styles.subtitle}>
          Реальные результаты от&nbsp;строительных компаний, УК и&nbsp;агентств недвижимости
        </p>
      </motion.div>

      {/* Bento grid */}
      <motion.div className={styles.gridWrap} variants={itemReveal}>
        {/* Row 1: 3 колонки, 3-я высокая */}
        <div className={`${styles.row} ${styles.rowTop}`}>
          {/* Карточка 1 */}
          <div className={styles.card}>
            <p className={styles.cardText}>
              «Planeta ERP позволила нам объединить снабжение, бюджетирование и&nbsp;документооборот в
              одной системе. Время согласования счётов сократилось с&nbsp;3&nbsp;дней до&nbsp;нескольких часов»
            </p>
            <div className={styles.author}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={avatar1} alt="Михаил Д." className={styles.avatar} />
              <div>
                <p className={styles.authorName}>Михаил Д.</p>
                <p className={styles.authorRole}>Финансовый директор</p>
              </div>
            </div>
          </div>
          {/* Карточка 2 */}
          <div className={styles.card}>
            <p className={styles.cardText}>
              «Раньше сводные отчёты по&nbsp;объектам готовились вручную и&nbsp;занимали весь понедельник.
              Теперь дашборд обновляется автоматически — руководство видит актуальную картину в&nbsp;
              любой момент»
            </p>
            <div className={styles.author}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={avatar2} alt="Ирина С." className={styles.avatar} />
              <div>
                <p className={styles.authorName}>Ирина С.</p>
                <p className={styles.authorRole}>Руководитель ПЭО</p>
              </div>
            </div>
          </div>
          {/* Карточка 3 — высокая, row-span-2 */}
          <div className={`${styles.card} ${styles.tallCard}`}>
            <p className={styles.cardText}>
              «Интеграция с&nbsp;нашей 1С прошла без&nbsp;остановки работы. Данные по&nbsp;поставщикам, договорам
              и&nbsp;оплатам синхронизируются автоматически»
            </p>
            <div className={styles.author}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={avatar3} alt="Алексей В." className={styles.avatar} />
              <div>
                <p className={styles.authorName}>Алексей В.</p>
                <p className={styles.authorRole}>IT-директор</p>
              </div>
            </div>
          </div>
          {/* Карточка 4 — col-span-2 */}
          <div className={`${styles.card} ${styles.wideCard}`}>
            <p className={styles.cardText}>
              «СКУД-модуль закрыл давнюю проблему с&nbsp;учётом рабочего времени на&nbsp;объектах. Теперь у&nbsp;
              нас точные данные по&nbsp;каждому сотруднику без&nbsp;ручной сверки»
            </p>
            <div className={styles.author}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={avatar4} alt="Андрей К." className={styles.avatar} />
              <div>
                <p className={styles.authorName}>Андрей К.</p>
                <p className={styles.authorRole}>Директор по&nbsp;строительству</p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className={`${styles.row} ${styles.rowBottom}`}>
          <div className={styles.card}>
            <p className={styles.cardText}>
              «Система помогла выстроить контроль над закупками: видим остатки на&nbsp;складах, статус
              заявок и&nbsp;плановые сроки поставок. Перерасход материалов снизился на&nbsp;18%»
            </p>
            <div className={styles.author}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={avatar5} alt="Наталья Р." className={styles.avatar} />
              <div>
                <p className={styles.authorName}>Наталья Р.</p>
                <p className={styles.authorRole}>Руководитель отдела снабжения</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <p className={styles.cardText}>
              «Planeta ERP — это не&nbsp;просто CRM, это операционная система для&nbsp;стройки. Мы управляем
              12&nbsp;объектами одновременно и&nbsp;не&nbsp;теряем ни&nbsp;одной детали»
            </p>
            <div className={styles.author}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={avatar6} alt="Ашот А." className={styles.avatar} />
              <div>
                <p className={styles.authorName}>Ашот А.</p>
                <p className={styles.authorRole}>Генеральный директор</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Marquee логотипы клиентов */}
      <motion.div
        className={styles.marqueeMask}
        variants={itemReveal}
      >
        <div className={`${styles.marqueeTrack} animate-marquee`}>
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={i}
              className={styles.logoWrap}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
