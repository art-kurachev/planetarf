"use client";

import { FormEvent, MouseEvent, useEffect, useMemo, useState } from "react";

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
      setEmail(normalizeEmail(prefillEmail));
      setIsSuccess(initialSuccess);
    }
  }, [initialSuccess, isOpen, prefillEmail]);

  useEffect(() => {
    if (isOpen) {
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

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
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
      className="fixed inset-0 z-[120] bg-[#0f172a]/50 backdrop-blur-[4px] flex items-center justify-center p-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 300ms ease",
      }}
      onMouseDown={handleBackdropMouseDown}
      role="presentation"
    >
      <div
        className="w-full max-w-[466px] rounded-[48px] p-8"
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
            <div className="mb-8 flex items-start gap-2 w-full">
              <div className="flex-1">
                <p className="text-[28px] leading-[1.2] text-[#2e3345]">
                  Запишитесь на
                  <br />
                  демонстрацию системы
                </p>
                <p className="mt-2 text-[16px] leading-[1.4] text-[#2e3345]">
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
                className="shrink-0 size-11 rounded-[16px] bg-[#b9c8f5] text-[#616f9e] flex items-center justify-center transition-colors hover:bg-[#a9bbf1]"
                aria-label="Закрыть окно"
              >
                <span className="text-[30px] leading-none -mt-0.5">×</span>
              </button>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ваше имя"
                className="w-full rounded-[56px] border border-[#e9edf4] bg-white px-6 py-4 text-[16px] text-[#2e3345] outline-none transition-colors placeholder:text-[#2e3345]/60 focus:border-[#6788ec]"
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
                className="w-full rounded-[56px] border border-[#e9edf4] bg-white px-6 py-4 text-[16px] text-[#2e3345] outline-none transition-colors placeholder:text-[#2e3345]/60 focus:border-[#6788ec]"
              />
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(formatPhone(event.target.value))}
                placeholder="+7 (___) ___-__-__"
                inputMode="tel"
                autoComplete="tel"
                className="w-full rounded-[56px] border border-[#e9edf4] bg-white px-6 py-4 text-[16px] text-[#2e3345] outline-none transition-colors placeholder:text-[#2e3345]/60 focus:border-[#6788ec]"
              />

              <label className="flex items-start gap-3 mt-1 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isConsentChecked}
                  onChange={(event) => setIsConsentChecked(event.target.checked)}
                  className="sr-only"
                />
                <span
                  className={`mt-[1px] h-8 w-8 shrink-0 rounded-[8px] border flex items-center justify-center transition-colors ${
                    isConsentChecked ? "bg-[#4c87ec] border-[#4c87ec]" : "bg-white border-[#cfd8ee]"
                  }`}
                >
                  {isConsentChecked ? (
                    <svg
                      className="h-4 w-4"
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
                <span className="text-[14px] leading-[1.35] text-[#616f9e]">
                  Я&nbsp;даю своё Согласие на&nbsp;обработку персональных данных в&nbsp;соответствии с&nbsp;Политикой в&nbsp;
                  отношении обработки персональных данных
                </span>
              </label>
              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className="mt-1 bg-[linear-gradient(90deg,#6788ec_0%,#5b81ec_100%)] px-6 py-5 rounded-[32px] text-white font-medium text-[16px] leading-[16px] shadow-[0px_9px_9px_rgba(103,136,236,0.16)] transition-all duration-200 hover:brightness-95 hover:-translate-y-[2px] hover:shadow-[0px_16px_28px_rgba(103,136,236,0.34)] active:translate-y-0 active:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6788ec]/40 disabled:cursor-not-allowed disabled:brightness-90 disabled:transform-none"
              >
                {isSubmitting ? "Отправляем..." : "Записаться на\u00A0демо-презентацию"}
              </button>
            </form>
          </>
        ) : (
          <div className="w-full flex flex-col items-center gap-6 text-center">
            <div className="w-full flex flex-col items-center gap-3">
              <p className="w-full text-[28px] leading-[1.2] text-[#2e3345]">Спасибо за запись!</p>
              <p className="w-full text-[16px] leading-[1.4] text-[#2e3345]">
                Мы получили ваш запрос
                <br />
                на демонстрацию системы «Планета»
              </p>
              <p className="w-full text-[14px] leading-[1.4] text-[#616f9e]">
                Обычно отвечаем в&nbsp;течение
                <br />
                15–30 минут в&nbsp;рабочее время
              </p>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="w-full bg-[#6788ec] px-6 py-5 rounded-[32px] text-white font-medium text-[16px] leading-[16px] transition-all duration-200 hover:bg-[#5a7de6] active:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6788ec]/40"
            >
              Хорошо
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
