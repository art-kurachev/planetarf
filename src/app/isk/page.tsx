"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoRequestModal from "@/components/DemoRequestModal";
import { containerReveal, itemReveal, revealViewport } from "@/components/motion";
import styles from "./page.module.css";

const clientLogos = [
  { src: "/logos/rakurs.png", alt: "АКУРС" },
  { src: "/logos/bestcon.png", alt: "Bestcon" },
  { src: "/logos/poklonnaya7.png", alt: "Поклонная №7" },
  { src: "/logos/vremya.png", alt: "Время" },
  { src: "/logos/bolshaya-semerka.png", alt: "Большая Семерка" },
  { src: "/logos/krylatkiy.png", alt: "КРЫ" },
  { src: "/logos/lobachevskiy.png", alt: "ЖК Лобачевский" },
  { src: "/logos/dar.png", alt: "DAR" },
  { src: "/logos/mid.png", alt: "MID" },
  { src: "/logos/solos.png", alt: "SOLOS" },
];

const supplyCards = [
  {
    id: "01",
    title: "Заявка материала",
    text: "Создавайте заявки на материалы без ошибок и потерь данных.",
    image: "/figma-assets/isk-supply-01.png",
    frameClass: "supplyFrameA",
    imageClass: "supplyImageA",
  },
  {
    id: "02",
    title: "Контроль материала",
    text: "Видите статус каждой позиции: от заявки до поставки.",
    image: "/figma-assets/isk-supply-02.png",
    frameClass: "supplyFrameB",
    imageClass: "supplyImageB",
  },
  {
    id: "03",
    title: "Рабочая область снабжения",
    text: "Вся работа со снабжением в одном месте: заявки, счета, оплаты и поставки.",
    image: "/figma-assets/isk-supply-03.png",
    frameClass: "supplyFrameA",
    imageClass: "supplyImageC",
  },
  {
    id: "04",
    title: "Запрос поставщикам",
    text: "Отправляйте запросы поставщикам в пару кликов — письмо формируется автоматически.",
    image: "/figma-assets/isk-supply-04.png",
    frameClass: "supplyFrameA",
    imageClass: "supplyImageD",
  },
  {
    id: "05",
    title: "Сравнение счетов",
    text: "Сравнивайте предложения поставщиков и выбирайте лучшие условия по цене и срокам.",
    image: "/figma-assets/isk-supply-05.png",
    frameClass: "supplyFrameB",
    imageClass: "supplyImageE",
  },
  {
    id: "06",
    title: "Приемка материала",
    text: "Фиксируйте фактическое поступление и сразу выявляйте расхождения.",
    image: "/figma-assets/isk-supply-06.png",
    frameClass: "supplyFrameA",
    imageClass: "supplyImageF",
  },
];

const analyticsCards = [
  {
    problem: "Сметы грузятся вручную, ошибки, долго?",
    title: "Загрузка смет",
    text: "Загружайте сметы без ручного ввода и исключайте ошибки при переносе данных.",
    image: "/figma-assets/isk-analytics-01.png",
  },
  {
    problem: "Нет общей картины по проекту?",
    title: "Аналитический дашборд",
    text: "Получайте полные данные по объектам, срокам и финансам в одном месте.",
    image: "/figma-assets/isk-analytics-02.png",
  },
  {
    problem: "Нет контроля людей на объекте?",
    title: "Контроль СКУД на объектах",
    text: "Исключайте несанкционированный доступ и держите под контролем всех на объекте.",
    image: "/figma-assets/isk-analytics-03.png",
  },
];

const qaItems = [
  {
    question: "Сколько времени занимает внедрение?",
    answer:
      "Базовое внедрение — 4–8 недель. Интеграция с 1С: 2 недели. Обучение команды: 1 неделя. Параллельная работа со старыми системами на время перехода — обязательно.",
  },
  {
    question: "Нужно ли отказываться от 1С и менять бухгалтерию?",
    answer:
      "Нет. Платформа интегрируется с вашей 1С без замены существующей системы. Данные по поставщикам, договорам и оплатам синхронизируются автоматически.",
  },
  {
    question: "Как происходит обучение сотрудников?",
    answer:
      "Проводим онлайн-обучение для каждой роли, предоставляем обучающие материалы и видеоинструкции. Персональный менеджер сопровождает команду на всём этапе внедрения.",
  },
  {
    question: "Можно ли настроить систему под наши процессы?",
    answer:
      "Да. Система гибко настраивается под ваши бизнес-процессы: рабочие процессы, поля, отчёты и уведомления адаптируются без программирования.",
  },
  {
    question: "Как хранятся и защищаются данные компании?",
    answer:
      "Данные хранятся на российских серверах с шифрованием. Разграничение прав доступа, двухфакторная аутентификация и ежедневное резервное копирование.",
  },
];

const testimonials = [
  {
    text: "«Planeta ERP позволила нам объединить снабжение, бюджетирование и документооборот в одной системе. Время согласования счётов сократилось с 3 дней до нескольких часов»",
    name: "Михаил Д.",
    role: "Финансовый директор",
    avatar: "/figma-assets/98649603-4477-4cf4-be37-632983203c4c.png",
  },
  {
    text: "«Раньше сводные отчёты по объектам готовились вручную и занимали весь понедельник. Теперь дашборд обновляется автоматически — руководство видит актуальную картину в любой момент»",
    name: "Ирина С.",
    role: "Руководитель ПЭО",
    avatar: "/figma-assets/b6d08d95-22b6-4005-a8bf-301291f81b32.png",
  },
  {
    text: "«Интеграция с нашей 1С прошла без остановки работы. Данные по поставщикам, договорам и оплатам синхронизируются автоматически»",
    name: "Алексей В.",
    role: "IT-директор",
    avatar: "/figma-assets/7b96c264-6b67-49cf-b622-2bafc84b8620.png",
  },
  {
    text: "«СКУД-модуль закрыл давнюю проблему с учётом рабочего времени на объектах. Теперь у нас точные данные по каждому сотруднику без ручной сверки»",
    name: "Андрей К.",
    role: "Директор по строительству",
    avatar: "/figma-assets/f49b365b-7614-42bf-afea-509acb6ebcc4.png",
  },
];

export default function IskPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [prefillEmail, setPrefillEmail] = useState("");
  const [isDemoModalInitialSuccess, setIsDemoModalInitialSuccess] = useState(false);
  const [openQa, setOpenQa] = useState<number | null>(0);

  const openDemo = useCallback((email?: string) => {
    setPrefillEmail(email ?? "");
    setIsDemoModalInitialSuccess(false);
    setIsDemoModalOpen(true);
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.bgOverlay} />
      <Header onOpenDemo={() => openDemo()} />

      {/* Hero */}
      <motion.section
        id="app"
        className={styles.hero}
        variants={containerReveal}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <motion.p className={styles.badge} variants={itemReveal}>
          Инвестиционно-строительные компании
        </motion.p>
        <motion.h1 className={styles.heroTitle} variants={itemReveal}>
          Контроль снабжения, оплат
          <br />
          и сроков на стройке — в одной системе
        </motion.h1>
        <motion.p className={styles.heroSubtitle} variants={itemReveal}>
          Видите, что оплачено, что в пути и где срыв — в одном интерфейсе
        </motion.p>
        <motion.div className={styles.heroCta} variants={itemReveal}>
          <button className={`hero-cta-shimmer ${styles.primaryBtn}`} onClick={() => openDemo()}>
            Записаться на демо-показ
          </button>
          <span className={styles.helper}>Это займет не более 15 минут</span>
        </motion.div>
      </motion.section>

      {/* Logos marquee strip */}
      <motion.div
        className={styles.marqueeMask}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={`${styles.marqueeTrack} animate-marquee`}>
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div key={i} className={styles.logoWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt={logo.alt} className={styles.logo} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Supply section */}
      <motion.section
        id="integrations"
        className={styles.section}
        variants={containerReveal}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <motion.h2 className={styles.sectionTitle} variants={itemReveal}>
          Контроль снабжения без потерь и срывов
        </motion.h2>
        <motion.p className={styles.sectionSubtitle} variants={itemReveal}>
          Видите весь процесс по каждой позиции: от заявки до поставки. Контролируйте оплаты, сроки
          и отклонения без ручной проверки.
        </motion.p>
        <div className={styles.supplyGrid}>
          {supplyCards.map((card, i) => (
            <motion.article
              key={card.id}
              className={styles.featureCard}
              variants={itemReveal}
              custom={i}
            >
              <div className={styles.featureHead}>
                <span className={styles.featureNum}>{card.id}.</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className={`${styles.featureFrame} ${styles[card.frameClass as keyof typeof styles]}`}>
                <img
                  src={card.image}
                  alt={card.title}
                  className={`${styles.featureImage} ${styles[card.imageClass as keyof typeof styles]}`}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Work + Warehouse */}
      <motion.section
        id="features"
        className={styles.section}
        variants={containerReveal}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <motion.h2 className={styles.sectionTitle} variants={itemReveal}>
          Контроль работ и склада
        </motion.h2>
        <motion.p className={styles.sectionSubtitle} variants={itemReveal}>
          Контролируйте ход работ и наличие материалов в одном месте. Видите отставания и дефицит
          ресурсов до того, как они влияют на сроки проекта.
        </motion.p>
        <div className={styles.twoCols}>
          <motion.article className={styles.bigCard} variants={itemReveal}>
            <span className={styles.problem}>Не видно отставаний по срокам?</span>
            <h3>График производственных работ</h3>
            <p>Видите задержки по работам до того, как они становятся проблемой.</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className={`${styles.bigFrame} ${styles.bigFrameA}`}>
              <img src="/figma-assets/isk-work-01.png" alt="График работ" className={`${styles.bigImage} ${styles.bigImageA}`} />
            </div>
          </motion.article>
          <motion.article className={styles.bigCard} variants={itemReveal}>
            <span className={styles.problem}>Нет актуального понимания остатков?</span>
            <h3>Контроль склада в реальном времени</h3>
            <p>Видите остатки и движение материалов по объектам — без ручного учёта и расхождений.</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className={`${styles.bigFrame} ${styles.bigFrameB}`}>
              <img src="/figma-assets/isk-work-02.png" alt="Контроль склада" className={`${styles.bigImage} ${styles.bigImageB}`} />
            </div>
          </motion.article>
        </div>
        <motion.div className={styles.inlineCta} variants={itemReveal}>
          <div>
            <h3>Запишитесь на демо-показ</h3>
            <p>Покажем как платформа решит ваши задачи</p>
          </div>
          <button className={styles.darkBtn} onClick={() => openDemo()}>
            Записаться на демо-показ
          </button>
        </motion.div>
      </motion.section>

      {/* Budget + Documents */}
      <motion.section
        className={styles.section}
        variants={containerReveal}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <motion.h2 className={styles.sectionTitle} variants={itemReveal}>
          Контролируйте бюджет, оплаты
          <br />
          и согласования по объектам без разрывов
        </motion.h2>
        <motion.p className={styles.sectionSubtitle} variants={itemReveal}>
          Управляйте бюджетом, оплатами и согласованиями без потерь и задержек. Все финансовые
          потоки и документы по объекту под контролем.
        </motion.p>
        <div className={styles.twoCols}>
          <motion.article className={styles.bigCard} variants={itemReveal}>
            <span className={styles.problem}>Нет прозрачности по деньгам, особенно по объектам?</span>
            <h3>Бюджетирование и контроль БДДС</h3>
            <p>Контролируйте бюджет и движение денег по каждому объекту в реальном времени.</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className={`${styles.bigFrame} ${styles.bigFrameC}`}>
              <img src="/figma-assets/isk-budget-01.png" alt="Бюджетирование" className={`${styles.bigImage} ${styles.bigImageC}`} />
            </div>
          </motion.article>
          <motion.article className={styles.bigCard} variants={itemReveal}>
            <span className={styles.problem}>Документы теряются, долго, хаос?</span>
            <h3>Документооборот и согласование</h3>
            <p>Согласовывайте документы без потерь и задержек.</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className={`${styles.bigFrame} ${styles.bigFrameD}`}>
              <img src="/figma-assets/isk-budget-02.png" alt="Документооборот" className={`${styles.bigImage} ${styles.bigImageD}`} />
            </div>
          </motion.article>
        </div>
      </motion.section>

      {/* Analytics */}
      <motion.section
        className={styles.section}
        variants={containerReveal}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <motion.h2 className={styles.sectionTitle} variants={itemReveal}>
          Аналитика по всем объектам в одном окне
        </motion.h2>
        <motion.p className={styles.sectionSubtitle} variants={itemReveal}>
          Работайте с актуальными данными и получайте полную картину по объектам. Контролируйте
          доступ, анализируйте показатели и принимайте решения быстрее.
        </motion.p>
        <div className={styles.analyticsGrid}>
          {analyticsCards.map((card, i) => (
            <motion.article key={card.title} className={styles.featureCard} variants={itemReveal} custom={i}>
              <div className={styles.featureHead}>
                <span className={styles.problem}>{card.problem}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className={styles.featureFrame}>
                <img src={card.image} alt={card.title} className={styles.featureImage} />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Integrations */}
      <motion.section
        className={`${styles.section} ${styles.integrations}`}
        variants={containerReveal}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <motion.div className={styles.integrationsText} variants={itemReveal}>
          <span className={styles.smallBadge}>15+ готовых интеграций</span>
          <h2>Интеграция с 1С, СБИС и другими системами — без ручного переноса данных</h2>
          <p>
            Платформа подключается к 1С, CRM, мессенджерам и сервисам учёта — без замены существующей
            инфраструктуры и дорогостоящих доработок.
          </p>
          <button className={styles.primaryBtn} onClick={() => openDemo()}>
            Узнать об интеграциях
          </button>
        </motion.div>
        <motion.div className={styles.integrationsVisual} variants={itemReveal}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/figma-assets/itegra.svg" alt="Экосистема интеграций" />
        </motion.div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className={styles.section}
        variants={containerReveal}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <motion.div className={styles.testimonialsHead} variants={itemReveal}>
          <span className={styles.smallBadge}>Отзывы и кейсы</span>
          <h2 className={styles.sectionTitle}>Что говорят клиенты</h2>
          <p className={styles.sectionSubtitle}>
            Реальные результаты от строительных компаний, УК и агентств недвижимости
          </p>
        </motion.div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              className={`${styles.testimonialCard} ${index === 2 ? styles.testimonialTall : ""} ${
                index === 3 ? styles.testimonialWide : ""
              }`}
              variants={itemReveal}
            >
              <p>{item.text}</p>
              <div className={styles.testimonialUser}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.avatar} alt={item.name} />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div className={styles.inlineCta} variants={itemReveal}>
          <div>
            <h3>Запишитесь на демо-показ</h3>
            <p>Покажем как платформа решит ваши задачи</p>
          </div>
          <div className={styles.inlineCtaRight}>
            <button className={styles.darkBtn} onClick={() => openDemo()}>
              Записаться на демо-показ
            </button>
            <span className={styles.helper}>Это займет не более 15 минут</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Q&A */}
      <motion.section
        id="testimonials"
        className={styles.qaSection}
        variants={containerReveal}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <motion.div className={styles.qaIntro} variants={itemReveal}>
          <h2>Q&amp;A</h2>
          <p>
            Мы собрали ответы на самые частые вопросы, чтобы вы лучше понимали, как проходит работа
            в системе.
          </p>
          <button className={styles.primaryBtn} onClick={() => openDemo()}>
            Задать свой вопрос
          </button>
        </motion.div>
        <motion.div className={styles.qaList} variants={itemReveal}>
          {qaItems.map((item, index) => (
            <div
              key={item.question}
              className={`${styles.qaItem} ${openQa === index ? styles.qaItemOpen : ""}`}
            >
              <button
                className={styles.qaRow}
                onClick={() => setOpenQa(openQa === index ? null : index)}
                aria-expanded={openQa === index}
              >
                <span className={`${styles.qaIcon} ${openQa === index ? styles.qaIconOpen : ""}`}>
                  {openQa === index ? "—" : "+"}
                </span>
                <span className={styles.qaQuestion}>{item.question}</span>
                <svg
                  className={`${styles.qaArrow} ${openQa === index ? styles.qaArrowOpen : ""}`}
                  width="18" height="18" viewBox="0 0 18 18" fill="none"
                >
                  <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <AnimatePresence initial={false}>
                {openQa === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className={styles.qaAnswer}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </motion.section>

      <Footer
        onSubmitEmail={(email) => {
          setPrefillEmail(email);
          setIsDemoModalInitialSuccess(true);
          setIsDemoModalOpen(true);
        }}
      />
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        prefillEmail={prefillEmail}
        initialSuccess={isDemoModalInitialSuccess}
      />
    </main>
  );
}
