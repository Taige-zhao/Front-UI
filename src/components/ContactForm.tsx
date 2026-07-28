"use client";

import { type FormEvent, useState } from "react";
import { cn } from "@/lib/utils";

const FIELDS = [
  { name: "name", label: "Name (required)", type: "text", required: true },
  { name: "email", label: "Email (required)", type: "email", required: true },
  { name: "telephone", label: "Telephone", type: "tel", required: false },
  { name: "company", label: "Company", type: "text", required: false },
  { name: "subject", label: "Subject", type: "text", required: false },
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-form relative rounded bg-white p-[45px] text-[#0f033c]">
      <form className="w-full" onSubmit={onSubmit} noValidate>
        {FIELDS.map((field) => (
          <p key={field.name} className="mb-[17px]">
            <label className="mb-2.5 block text-[11px] tracking-[0.5px] text-[#0f033c] uppercase">
              {field.label}
              <br />
              <input
                name={field.name}
                type={field.type}
                required={field.required}
                className={cn(
                  "mt-2.5 block w-full rounded-[2px] border border-[#ecebee] bg-[#ecebee]",
                  "px-2.5 py-2.5 text-[13px] tracking-[-0.3px] text-[#0f033c] outline-none",
                  "focus:border-simu-blue",
                )}
              />
            </label>
          </p>
        ))}

        <p className="mb-[17px]">
          <label className="mb-2.5 block text-[11px] tracking-[0.5px] text-[#0f033c] uppercase">
            Your Message
            <br />
            <textarea
              name="message"
              rows={8}
              className={cn(
                "mt-2.5 block h-[212px] w-full resize-y rounded-[2px] border border-[#ecebee] bg-[#ecebee]",
                "px-2.5 py-2.5 text-[13px] tracking-[-0.3px] text-[#0f033c] outline-none",
                "focus:border-simu-blue",
              )}
            />
          </label>
        </p>

        <p className="mb-0">
          <button
            type="submit"
            className="inline-block cursor-pointer rounded border-0 bg-simu-blue px-6 py-3 text-center text-[13px] tracking-[-0.3px] text-white uppercase transition-colors hover:bg-simu-blue-hover"
          >
            Send
          </button>
        </p>

        {submitted ? (
          <p className="mt-6 text-[13px] text-[#0f033c]">
            Thanks - this demo form does not send messages.
          </p>
        ) : null}
      </form>
    </div>
  );
}
