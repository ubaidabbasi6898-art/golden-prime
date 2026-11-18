"use client";

import { FormEvent, useState } from "react";

type Fields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function ContactForm() {
  const [form, setForm] = useState<Fields>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [success, setSuccess] = useState<string | null>(null);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setSuccess(null);
    const next: Partial<Fields> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    if (!form.message.trim()) next.message = "Message is required.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSuccess(
      "Thank you. Your inquiry has been recorded. No email was sent automatically because an email service is not configured yet. You can also reach Golden Prime at shaniii777888@gmail.com.",
    );
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      {(
        [
          ["name", "Name", "text"],
          ["email", "Email", "email"],
          ["phone", "Phone Number", "tel"],
        ] as const
      ).map(([key, label, type]) => (
        <label key={key} className="block text-xs uppercase tracking-[0.18em] text-muted">
          {label}
          <input
            type={type}
            value={form[key]}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, [key]: event.target.value }))
            }
            className="mt-2 w-full border border-black/15 bg-white px-3 py-2.5 text-sm normal-case tracking-normal text-black outline-none focus:border-gold"
          />
          {errors[key] ? (
            <span className="mt-1 block normal-case tracking-normal text-red-700" role="alert">
              {errors[key]}
            </span>
          ) : null}
        </label>
      ))}
      <label className="block text-xs uppercase tracking-[0.18em] text-muted">
        Message
        <textarea
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          className="mt-2 w-full border border-black/15 bg-white px-3 py-2.5 text-sm normal-case tracking-normal text-black outline-none focus:border-gold"
        />
        {errors.message ? (
          <span className="mt-1 block normal-case tracking-normal text-red-700" role="alert">
            {errors.message}
          </span>
        ) : null}
      </label>
      <button
        type="submit"
        className="w-full bg-black px-6 py-3 text-xs uppercase tracking-[0.2em] text-cream transition hover:bg-gold hover:text-black"
      >
        Submit Inquiry
      </button>
      {success ? (
        <p className="text-sm text-muted" role="status">
          {success}
        </p>
      ) : null}
    </form>
  );
}
