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
      <label className="text-h9 capitalize" htmlFor={name}>
        {label}
      </label>
      <input
        className="text-body-base bg-transparent pt-2 placeholder-gray-500 border-b-2 border-light-blue-500"
        placeholder={placeholder}
        name={name}
        type={type}
        required
      />
    </div>
  );
}
