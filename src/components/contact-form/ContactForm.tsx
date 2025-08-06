// Lib
import clsx from "clsx";

// Components
import FormInput from "./FormInput";
import { ButtonPrimary } from "@/components/ui";

// Types
import type { Dispatch, SetStateAction } from "react";
import type { FormState } from "./types";

export default function ContactForm({
  loadingState,
  setLoadingState,
  className = "",
}: {
  loadingState: FormState;
  setLoadingState: Dispatch<SetStateAction<FormState>>;
  className?: string;
}) {
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoadingState("submitting");
    console.log("Submitting!");

    const formData = new FormData(event.target as HTMLFormElement);

    try {
      fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData as any).toString(),
      });
    } catch (error) {
      console.error("Whoops. Something went wrong. Please try again.");
      setLoadingState("error");
    } finally {
      setLoadingState("success");
    }
  }

  return (
    <form
      data-netlify="true"
      netlify-honeypot="true"
      name="contact"
      method="POST"
      className={clsx(
        "body-copy text-primary bg-white p-4 shadow-2xl shadow-accent/50 rounded-2xl",
        className
      )}
      onSubmit={(e) => submitHandler(e)}
    >
      <div className="flex flex-col gap-8 py-4 px-2 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-8 md:flex-row">
          <FormInput label="name" name="name" type="text" className="flex-1" />
          <FormInput label="phone" name="phone" type="tel" className="flex-1" />
        </div>
        <FormInput label="email" name="email" type="email" />
        <FormInput label="Business Name" name="business-name" type="text" />
        <FormInput label="Website" name="website" type="text" />
        <div className="flex flex-col gap-4">
          <label className="font-heading capitalize text-h9" htmlFor="message">
            Website Goals
          </label>
          <textarea
            rows={5}
            name="message"
            className="text-body-base bg-light-blue-100 rounded-2xl p-2 placeholder-gray-500"
            placeholder="Tell us about your website goals"
            required
          />
        </div>
        <ButtonPrimary className="self-center">Submit</ButtonPrimary>
      </div>
    </form>
  );
}
