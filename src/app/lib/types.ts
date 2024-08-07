import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from "react-hook-form";

export type variant = "sign-in" | "sign-up";
export type IconProps = React.HTMLAttributes<SVGElement>;
export type link = {
  icon: (props: IconProps) => JSX.Element;
  link: string;
};

export type ValidFieldNames = "email" | "fullName" | "password";

export type FormFieldProps = {
  type: string;
  variant: variant;
  label?: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FieldValues>;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};

export type Auth = {
  email: string | undefined;
  fullName?: string | undefined;
  setEmail: (email: string) => void;
  setFullName: (name: string) => void;
};
