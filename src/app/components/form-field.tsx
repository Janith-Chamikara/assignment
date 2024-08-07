import { FormFieldProps } from "../lib/types";

export function FormField({
  type,
  placeholder,
  name,
  register,
  error,
  variant,
  label,
}: FormFieldProps) {
  console.log(error);
  return (
    <div className="min-h-[80px] relative w-full ">
      <input
        {...register(name)}
        type={type}
        name={name}
        className={
          error
            ? `pl-2 absolute top-0 left-0 rounded-[15px] w-full h-full border border-red-500 `
            : `pl-2 absolute top-0 left-0 rounded-[15px] w-full h-full border-2 ${
                variant === "sign-in"
                  ? "border-sign-in-border"
                  : "border-sign-up-border"
              } placeholder:text-[#686868] placeholder:text-[20px] placeholder:font-[500] placeholder:my-auto `
        }
        placeholder={placeholder}
      />
      {error && (
        <span className="absolute -bottom-4 left-0 text-xs text-red-500">
          {error.message as string}
        </span>
      )}
      {label && (
        <label
          className="absolute text-[12px] text-xs top-2 left-2 text-[#686868] left-"
          htmlFor={name}
        >
          {label}
        </label>
      )}
    </div>
  );
}
export default FormField;
