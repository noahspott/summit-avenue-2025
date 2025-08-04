export default function FormInput({
  type,
  label,
  name,
  placeholder,
  className = "",
}: {
  type: React.HTMLInputTypeAttribute;
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-h8 capitalize" htmlFor={name}>
        {label}
      </label>
      <input
        className="text-body-base rounded-lg bg-gray-100 p-4 placeholder-gray-500"
        placeholder={placeholder}
        name={name}
        type={type}
        required
      />
    </div>
  );
}
