"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type DemoRequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
  prefillEmail?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function DemoRequestModal({ isOpen, onClose, prefillEmail = "" }: DemoRequestModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(prefillEmail);
  const [company, setCompany] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
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
    if (!name.trim()) {
      return false;
    }

    const normalizedEmail = email.trim();
    const normalizedPhone = phone.trim();
    const hasContact = Boolean(normalizedEmail || normalizedPhone);
    const isEmailValid = !normalizedEmail || emailRegex.test(normalizedEmail);

    return hasContact && isEmailValid;
  }, [email, name, phone]);

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCompany("");
    setComment("");
    setIsSubmitting(false);
    setIsSuccess(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      resetForm();
    }, 150);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[120] bg-[#0f172a]/45 backdrop-blur-[2px] flex items-center justify-center p-4"
      onClick={handleClose}
      role="presentation"
    >
      <div
        className="w-full max-w-[560px] rounded-[32px] border border-[#e9edf4] bg-white p-5 sm:p-8 shadow-[0px_24px_60px_rgba(30,33,43,0.22)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="ml-auto flex size-9 items-center justify-center rounded-full border border-[#e9edf4] text-[#616f9e] transition-colors hover:bg-[#f3f7ff]"
          aria-label="Закрыть окно"
        >
          ✕
        </button>

        {!isSuccess ? (
          <>
            <div className="mt-2 mb-6">
              <p className="text-[30px] leading-[1.15] text-[#2e3345]">Записаться на демо-показ</p>
              <p className="mt-2 text-[15px] leading-[1.4] text-[#616f9e]">
                Оставьте контакты, и мы свяжемся с вами в ближайшее время.
              </p>
            </div>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ваше имя*"
                className="w-full rounded-[16px] border border-[#dbe7fb] px-4 py-3 text-[15px] text-[#2e3345] outline-none transition-colors placeholder:text-[#909abb] focus:border-[#6788ec]"
              />
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Телефон"
                className="w-full rounded-[16px] border border-[#dbe7fb] px-4 py-3 text-[15px] text-[#2e3345] outline-none transition-colors placeholder:text-[#909abb] focus:border-[#6788ec]"
              />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                className="w-full rounded-[16px] border border-[#dbe7fb] px-4 py-3 text-[15px] text-[#2e3345] outline-none transition-colors placeholder:text-[#909abb] focus:border-[#6788ec]"
              />
              <input
                type="text"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder="Компания"
                className="w-full rounded-[16px] border border-[#dbe7fb] px-4 py-3 text-[15px] text-[#2e3345] outline-none transition-colors placeholder:text-[#909abb] focus:border-[#6788ec]"
              />
              <textarea
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="Комментарий"
                rows={3}
                className="w-full resize-none rounded-[16px] border border-[#dbe7fb] px-4 py-3 text-[15px] text-[#2e3345] outline-none transition-colors placeholder:text-[#909abb] focus:border-[#6788ec]"
              />

              <p className="text-[13px] text-[#909abb]">* Обязательное поле. Нужен минимум один контакт: телефон или email.</p>

              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className="mt-2 bg-[#6788ec] px-6 py-4 rounded-[24px] text-white font-medium text-[16px] leading-[16px] transition-all duration-200 hover:bg-[#4f74e2] hover:-translate-y-[2px] hover:shadow-[0px_16px_28px_rgba(103,136,236,0.34)] active:translate-y-0 active:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6788ec]/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:transform-none"
              >
                {isSubmitting ? "Отправляем..." : "Отправить заявку"}
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <p className="text-[30px] leading-[1.15] text-[#2e3345]">Спасибо!</p>
            <p className="mt-3 text-[18px] leading-[1.4] text-[#616f9e]">
              Спасибо за запись на демо, мы свяжемся с вами.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-8 bg-[#6788ec] px-6 py-4 rounded-[24px] text-white font-medium text-[16px] leading-[16px] transition-all duration-200 hover:bg-[#4f74e2]"
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
