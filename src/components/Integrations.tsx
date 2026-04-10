"use client";

import { motion } from "framer-motion";
import { containerReveal, itemReveal, revealViewport } from "@/components/motion";
import styles from "@/components/Integrations.module.css";

const imgIntegrations = "/figma-assets/itegra.svg";

type IntegrationsProps = {
  onOpenDemo: () => void;
};

export default function Integrations({ onOpenDemo }: IntegrationsProps) {

  return (
    <motion.div
      className={styles.root}
      variants={containerReveal}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
    >
      {/* Левая часть */}
      <motion.div
        className={styles.left}
        variants={itemReveal}
      >
        <div className={styles.textBlock}>
          <div className={styles.badge}>
            <p className={styles.badgeText}>Экосистема интеграций</p>
          </div>
          <p className={styles.title}>
            Работает с теми инструментами, которые у&nbsp;вас уже есть
          </p>
          <p className={styles.description}>
            Платформа подключается к&nbsp;1С, CRM, мессенджерам и&nbsp;сервисам учёта{" "}
            — без&nbsp;замены существующей инфраструктуры и&nbsp;дорогостоящих доработок.
          </p>
          <p className={styles.highlight}>
            15+ готовых интеграций.
            <br />
            Подключение от&nbsp;1&nbsp;дня.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenDemo}
          className={styles.cta}
        >
          Записаться на&nbsp;демо-показ
        </button>
      </motion.div>
      {/* Правая часть — интеграционная схема */}
      <motion.div
        className={styles.right}
        variants={itemReveal}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgIntegrations}
          alt="Интеграции"
          className={styles.image}
        />
      </motion.div>
    </motion.div>
  );
}
