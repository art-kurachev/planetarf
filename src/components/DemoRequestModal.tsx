"use client";

import { FormEvent, MouseEvent, useEffect, useMemo, useState } from "react";
import styles from "@/components/DemoRequestModal.module.css";

type DemoRequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
  prefillEmail?: string;
  initialSuccess?: boolean;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalizeEmail = (value: string) => {
  const normalized = value
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9@._%+-]/g, "");

  const atIndex = normalized.indexOf("@");
  if (atIndex === -1) return normalized;

  const localPart = normalized.slice(0, atIndex);
  const domainPart = normalized.slice(atIndex + 1).replace(/@/g, "");
  return `${localPart}@${domainPart}`;
};

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  const normalized = digits.startsWith("8") ? `7${digits.slice(1)}` : digits;
  const withCode = normalized.startsWith("7") ? normalized : `7${normalized}`;
  const trimmed = withCode.slice(0, 11);
  const cc = trimmed.slice(0, 1);
  const p1 = trimmed.slice(1, 4);
  const p2 = trimmed.slice(4, 7);
  const p3 = trimmed.slice(7, 9);
  const p4 = trimmed.slice(9, 11);

  let result = `+${cc}`;
  if (p1) result += ` (${p1}`;
  if (p1.length === 3) result += ")";
  if (p2) result += ` ${p2}`;
  if (p3) result += `-${p3}`;
  if (p4) result += `-${p4}`;
  return result;
};

export default function DemoRequestModal({
  isOpen,
  onClose,
  prefillEmail = "",
  initialSuccess = false,
}: DemoRequestModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(prefillEmail);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isConsentChecked, setIsConsentChecked] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEmail(normalizeEmail(prefillEmail));
      setIsSuccess(initialSuccess);
    }
  }, [initialSuccess, isOpen, prefillEmail]);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShouldRender(true);
      setIsVisible(false);
      const enterTimeout = window.setTimeout(() => {
        setIsVisible(true);
      }, 24);
      return () => window.clearTimeout(enterTimeout);
    }

    setIsVisible(false);
    const timeout = window.setTimeout(() => {
      setShouldRender(false);
    }, 430);

    return () => window.clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const blockedKeys = new Set([
      " ",
      "ArrowUp",
      "ArrowDown",
      "PageUp",
      "PageDown",
      "Home",
      "End",
    ]);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (blockedKeys.has(event.key)) {
        event.preventDefault();
      }
    };

    const preventScroll = (event: WheelEvent | TouchEvent) => {
      event.preventDefault();
    };

    const html = document.documentElement;
    const scrollY = window.scrollY;
    const prevOverflow = document.body.style.overflow;
    const prevHtmlOverflow = html.style.overflow;
    const prevHtmlScrollBehavior = html.style.scrollBehavior;
    const prevOverscrollBehavior = document.body.style.overscrollBehavior;
    const prevTouchAction = document.body.style.touchAction;
    const prevPosition = document.body.style.position;
    const prevTop = document.body.style.top;
    const prevWidth = document.body.style.width;
    const prevLeft = document.body.style.left;
    const prevRight = document.body.style.right;

    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    document.body.style.touchAction = "none";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      html.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevOverflow;
      document.body.style.overscrollBehavior = prevOverscrollBehavior;
      document.body.style.touchAction = prevTouchAction;
      document.body.style.position = prevPosition;
      document.body.style.top = prevTop;
      document.body.style.width = prevWidth;
      document.body.style.left = prevLeft;
      document.body.style.right = prevRight;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      window.requestAnimationFrame(() => {
        html.style.scrollBehavior = prevHtmlScrollBehavior;
      });
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [isOpen, onClose]);

  const canSubmit = useMemo(() => {
    if (!name.trim() || !isConsentChecked) return false;
    const normalizedEmail = email.trim();
    const normalizedPhone = phone.trim();
    const hasContact = Boolean(normalizedEmail || normalizedPhone);
    const isEmailValid = !normalizedEmail || emailRegex.test(normalizedEmail);
    return hasContact && isEmailValid;
  }, [email, isConsentChecked, name, phone]);

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setIsSubmitting(false);
    setIsSuccess(false);
    setIsConsentChecked(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetForm, 150);
  };

  const handleBackdropMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit || isSubmitting) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={styles.overlay}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 300ms ease",
      }}
      onMouseDown={handleBackdropMouseDown}
      role="presentation"
    >
      <div
        className={styles.panel}
        style={{
          background:
            "radial-gradient(141.42% 211% at 100% 100%, rgba(103, 136, 236, 0) 0%, rgba(103, 136, 236, 0.8) 100%), #f8fafc",
          boxShadow:
            "0px 199px 56px rgba(103, 136, 236, 0), 0px 127px 51px rgba(103, 136, 236, 0.03), 0px 71px 43px rgba(103, 136, 236, 0.09), 0px 32px 32px rgba(103, 136, 236, 0.16), 0px 8px 17px rgba(103, 136, 236, 0.18)",
          transform: isVisible ? "translateY(0) scale(1)" : "translateY(48px) scale(0.985)",
          opacity: isVisible ? 1 : 0,
          transition: "transform 420ms cubic-bezier(0.22, 1, 0.36, 1), opacity 420ms ease",
        }}
        onMouseDown={(event) => event.stopPropagation()}
      >

        {!isSuccess ? (
          <>
            <div className={styles.header}>
              <div className={styles.headerText}>
                <p className={styles.heading}>
                  Запишитесь на
                  <br />
                  демонстрацию системы
                </p>
                <p className={styles.subheading}>
                  И&nbsp;получите доступ к&nbsp;planeta бесплатно.
                  <br />
                  Попробуйте все возможности сервиса
                  <br />
                  без ограничений.
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className={styles.closeButton}
                aria-label="Закрыть окно"
              >
                <span className={styles.closeIcon}>×</span>
              </button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ваше имя"
                className={styles.input}
              />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(normalizeEmail(event.target.value))}
                placeholder="Рабочая почта"
                inputMode="email"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                className={styles.input}
              />
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(formatPhone(event.target.value))}
                placeholder="+7 (___) ___-__-__"
                inputMode="tel"
                autoComplete="tel"
                className={styles.input}
              />

              <label className={styles.consentLabel}>
                <input
                  type="checkbox"
                  checked={isConsentChecked}
                  onChange={(event) => setIsConsentChecked(event.target.checked)}
                  className={styles.checkboxNative}
                />
                <span
                  className={`${styles.checkboxBox} ${isConsentChecked ? styles.checkboxChecked : ""}`}
                >
                  {isConsentChecked ? (
                    <svg
                      className={styles.checkIcon}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.25 8.25L6.55 11.55L12.75 4.75"
                        stroke="white"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </span>
                <span className={styles.consentText}>
                  Я&nbsp;даю своё Согласие на&nbsp;обработку персональных данных в&nbsp;соответствии с&nbsp;Политикой в&nbsp;
                  отношении обработки персональных данных
                </span>
              </label>
              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? "Отправляем..." : "Записаться на\u00A0демо-презентацию"}
              </button>
            </form>
          </>
        ) : (
          <div className={styles.successWrap}>
            <div className={styles.successText}>
              <p className={styles.successTitle}>Спасибо за запись!</p>
              <p className={styles.successDesc}>
                Мы получили ваш запрос
                <br />
                на демонстрацию системы «Планета»
              </p>
              <p className={styles.successHint}>
                Обычно отвечаем в&nbsp;течение
                <br />
                15–30 минут в&nbsp;рабочее время
              </p>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className={styles.okButton}
            >
              Хорошо
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
