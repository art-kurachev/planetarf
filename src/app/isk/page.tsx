"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoRequestModal from "@/components/DemoRequestModal";
import { containerReveal, itemReveal, revealViewport } from "@/components/motion";
import styles from "./page.module.css";

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
    title: "Загрузка смет",
    text: "Загружайте сметы без ручного ввода и исключайте ошибки при переносе данных.",
    image: "/figma-assets/isk-analytics-01.png",
  },
  {
    title: "Аналитический дашборд",
    text: "Получайте полные данные по объектам, срокам и финансам в одном месте.",
    image: "/figma-assets/isk-analytics-02.png",
  },
  {
    title: "Контроль СКУД на объектах",
    text: "Исключайте несанкционированный доступ и держите под контролем людей на объекте.",
    image: "/figma-assets/isk-analytics-03.png",
  },
];

const qaItems = [
  "Сколько времени занимает внедрение?",
  "Нужно ли отказываться от 1С и менять бухгалтерию?",
  "Как происходит обучение сотрудников?",
  "Можно ли настроить систему под наши процессы?",
  "Как хранятся и защищаются данные компании?",
];

const testimonials = [
  {
    text: "«Planeta ERP позволила нам объединить снабжение, бюджетирование и документооборот в одной системе. Время согласования счетов сократилось с 3 дней до нескольких часов»",
    name: "Михаил Д.",
    role: "Финансовый директор",
    avatar: "/figma-assets/98649603-4477-4cf4-be37-632983203c4c.png",
  },
  {
    text: "«Раньше сводные отчеты по объектам готовились вручную. Теперь дашборд обновляется автоматически — руководство видит актуальную картину в любой момент»",
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
    text: "«СКУД-модуль закрыл давнюю проблему с учетом рабочего времени на объектах. Теперь у нас точные данные по каждому сотруднику без ручной сверки»",
    name: "Андрей К.",
    role: "Директор по строительству",
    avatar: "/figma-assets/f49b365b-7614-42bf-afea-509acb6ebcc4.png",
  },
];

export default function IskPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [prefillEmail, setPrefillEmail] = useState("");
  const [isDemoModalInitialSuccess, setIsDemoModalInitialSuccess] = useState(false);

  const openDemo = useCallback((email?: string) => {
    setPrefillEmail(email ?? "");
    setIsDemoModalInitialSuccess(false);
    setIsDemoModalOpen(true);
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.bgOverlay} />
      <Header onOpenDemo={() => openDemo()} />

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
          Контроль снабжения, оплат и сроков
          <br />
          на стройке — в одной системе
        </motion.h1>
        <motion.p className={styles.heroSubtitle} variants={itemReveal}>
          Видите, что оплачено, что в пути и где срыв — в одном интерфейсе
        </motion.p>
        <motion.div className={styles.heroCta} variants={itemReveal}>
          <button className={styles.primaryBtn} onClick={() => openDemo()}>
            Записаться на демо-показ
          </button>
          <span className={styles.helper}>Это займет не более 15 минут</span>
        </motion.div>
      </motion.section>

      <section id="integrations" className={styles.section}>
        <h2 className={styles.sectionTitle}>Контроль снабжения без потерь и срывов</h2>
        <p className={styles.sectionSubtitle}>
          Видите весь процесс по каждой позиции: от заявки до поставки. Контролируйте оплаты, сроки
          и отклонения без ручной проверки.
        </p>
        <div className={styles.supplyGrid}>
          {supplyCards.map((card) => (
            <article key={card.id} className={styles.featureCard}>
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
            </article>
          ))}
        </div>
      </section>

      <section id="features" className={styles.section}>
        <h2 className={styles.sectionTitle}>Контроль работ и склада</h2>
        <p className={styles.sectionSubtitle}>
          Контролируйте ход работ и наличие материалов в одном месте. Видите отставания и дефицит
          ресурсов до того, как они влияют на сроки проекта.
        </p>
        <div className={styles.twoCols}>
          <article className={styles.bigCard}>
            <span className={styles.problem}>Не видно отставаний по срокам?</span>
            <h3>График производственных работ</h3>
            <p>Видите задержки по работам до того, как они становятся проблемой.</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className={`${styles.bigFrame} ${styles.bigFrameA}`}>
              <img src="/figma-assets/isk-work-01.png" alt="График работ" className={`${styles.bigImage} ${styles.bigImageA}`} />
            </div>
          </article>
          <article className={styles.bigCard}>
            <span className={styles.problem}>Нет актуального понимания остатков?</span>
            <h3>Контроль склада в реальном времени</h3>
            <p>Видите остатки и движение материалов по объектам без ручного учета.</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className={`${styles.bigFrame} ${styles.bigFrameB}`}>
              <img src="/figma-assets/isk-work-02.png" alt="Контроль склада" className={`${styles.bigImage} ${styles.bigImageB}`} />
            </div>
          </article>
        </div>
        <div className={styles.inlineCta}>
          <div>
            <h3>Запишитесь на демо-показ</h3>
            <p>Покажем как платформа решит ваши задачи</p>
          </div>
          <button className={styles.darkBtn} onClick={() => openDemo()}>
            Записаться на демо-показ
          </button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Контролируйте бюджет и документы по объектам</h2>
        <p className={styles.sectionSubtitle}>
          Управляйте бюджетом, оплатами и согласованиями без потерь и задержек. Все финансовые
          потоки и документы по объекту под контролем.
        </p>
        <div className={styles.twoCols}>
          <article className={styles.bigCard}>
            <span className={styles.problem}>Нет прозрачности по деньгам, особенно по объектам?</span>
            <h3>Бюджетирование и контроль БДДС</h3>
            <p>Контролируйте бюджет и движение денег по каждому объекту в реальном времени.</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className={`${styles.bigFrame} ${styles.bigFrameC}`}>
              <img src="/figma-assets/isk-budget-01.png" alt="Бюджетирование" className={`${styles.bigImage} ${styles.bigImageC}`} />
            </div>
          </article>
          <article className={styles.bigCard}>
            <span className={styles.problem}>Документы теряются, долго, хаос?</span>
            <h3>Документооборот и согласование</h3>
            <p>Согласовывайте документы без потерь и задержек.</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className={`${styles.bigFrame} ${styles.bigFrameD}`}>
              <img src="/figma-assets/isk-budget-02.png" alt="Документооборот" className={`${styles.bigImage} ${styles.bigImageD}`} />
            </div>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Аналитика по всем объектам в одном окне</h2>
        <p className={styles.sectionSubtitle}>
          Работайте с актуальными данными и получайте полную картину по объектам. Контролируйте
          доступ, анализируйте показатели и принимайте решения быстрее.
        </p>
        <div className={styles.analyticsGrid}>
          {analyticsCards.map((card) => (
            <article key={card.title} className={styles.featureCard}>
              <span className={styles.problem}>Критичная точка контроля</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className={styles.featureFrame}>
                <img src={card.image} alt={card.title} className={styles.featureImage} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.testimonialsHead}>
          <span className={styles.smallBadge}>Отзывы и кейсы</span>
          <h2 className={styles.sectionTitle}>Что говорят клиенты</h2>
          <p className={styles.sectionSubtitle}>
            Реальные результаты от строительных компаний, УК и агентств недвижимости
          </p>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className={`${styles.testimonialCard} ${index === 2 ? styles.testimonialTall : ""} ${
                index === 3 ? styles.testimonialWide : ""
              }`}
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
            </article>
          ))}
        </div>
        <div className={styles.inlineCta}>
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
        </div>
      </section>

      <section className={`${styles.section} ${styles.integrations}`}>
        <div className={styles.integrationsText}>
          <span className={styles.smallBadge}>15+ готовых интеграций</span>
          <h2>Интеграция с 1С, СБИС и другими системами — без ручного переноса данных</h2>
          <p>
            Платформа подключается к 1С, CRM, мессенджерам и сервисам учета без замены существующей
            инфраструктуры и дорогостоящих доработок.
          </p>
          <button className={styles.primaryBtn} onClick={() => openDemo()}>
            Узнать об интеграциях
          </button>
        </div>
        <div className={styles.integrationsVisual}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/figma-assets/itegra.svg" alt="Экосистема интеграций" />
        </div>
      </section>

      <section id="testimonials" className={styles.qaSection}>
        <div className={styles.qaIntro}>
          <h2>Q&amp;A</h2>
          <p>
            Мы собрали ответы на самые частые вопросы, чтобы вы лучше понимали, как проходит работа
            в системе.
          </p>
          <button className={styles.primaryBtn} onClick={() => openDemo()}>
            Задать свой вопрос
          </button>
        </div>
        <div className={styles.qaList}>
          {qaItems.map((item) => (
            <div key={item} className={styles.qaItem}>
              <span className={styles.plus}>+</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

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
