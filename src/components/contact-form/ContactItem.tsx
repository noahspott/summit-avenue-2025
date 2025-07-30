// Lib
import clsx from "clsx";

// Components
import { Phone, MailIcon, MapPin } from "lucide-react";

const iconMap = {
  PHONE: Phone,
  EMAIL: MailIcon,
  LOCATION: MapPin,
} as const;

export default function ContactItem({
  label,
  contactInfo,
  type,
  theme = "LIGHT",
}: {
  label: string;
  contactInfo: string;
  type: keyof typeof iconMap;
  theme?: "DARK" | "LIGHT";
}) {
  const Icon = iconMap[type];

  const textClasses = clsx(
    { "text-secondary": theme === "DARK" },
    { "text-primary": theme === "LIGHT" }
  );

  return (
    <div className="flex gap-4">
      <div
        className={clsx(
          "flex size-12 items-center justify-center rounded-full border-2",
          { "border-secondar": theme === "DARK" },
          { "border-primary": theme === "LIGHT" }
        )}
      >
        <Icon className={textClasses} />
      </div>
      <div className={textClasses}>
        <p className="body-base font-medium">{label}</p>
        <p className="body-base">{contactInfo}</p>
      </div>
    </div>
  );
}
