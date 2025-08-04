// Lib
import { useState } from "react";

// Components
import { HeaderSkeleton } from "@/components/layout";
import { Content, Section } from "@/components/ui";
import ContactForm from "./ContactForm";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import { AnimateOnInView } from "../decorative";

// Images
import bgImage from "@/assets/images/decorative/contact-section-bg.png";

// Types
import type { FormState } from "@/components/contact-form/types";

export default function ContactSection() {
  const [loadingState, setLoadingState] = useState<FormState>("idle");
  return (
    <Section className="relative" id="contact-section">
      <img
        src={bgImage.src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <HeaderSkeleton />
      <Content>
        <div className="flex flex-col gap-24 items-center">
          <div className="flex max-w-xl flex-col gap-2 items-center">
            <h2 className="text-h4">Contact</h2>
            <p className="text-h2 gradient-blue-text">Let's Get Started</p>
          </div>
          <div className="w-full max-w-4xl">
            {loadingState === "idle" && (
              <AnimateOnInView>
                <ContactForm
                  loadingState={loadingState}
                  setLoadingState={setLoadingState}
                />
              </AnimateOnInView>
            )}

            {loadingState === "success" && <SuccessMessage />}
            {loadingState === "error" && <ErrorMessage />}
          </div>
        </div>
      </Content>
    </Section>
  );
}
