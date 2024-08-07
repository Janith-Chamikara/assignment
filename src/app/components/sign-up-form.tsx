"use client";
import { FieldValues, useForm } from "react-hook-form";
import { links } from "../assests/assests";
import FormField from "./form-field";
import PasswordInput from "./password-input";
import Seperator from "./seperator";
import SocialLink from "./social-link";
import SubmitButton from "./submit-button";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../schemas/schemas";
import { signUpAction } from "../actions/actions";
import useAuthStore from "../stores/auth-store";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });
  const { setEmail, setFullName } = useAuthStore();

  const onSubmit = async (data: FieldValues) => {
    const response = await signUpAction(data);
    const { status, email, name } = response;
    setEmail(email);
    setFullName(name);
    status === "success" && toast.success("User created.");

    status === "success" && router.push("/protected-route");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-h-full justify-between flex flex-col"
    >
      <FormField
        type="text"
        register={register}
        error={errors.fullName}
        placeholder="info@example.com"
        name="fullName"
        variant="sign-up"
        label="Full name"
      />
      <FormField
        type="email"
        register={register}
        error={errors.email}
        placeholder="info@example.com"
        name="email"
        variant="sign-up"
        label="Email Address"
      />
      <PasswordInput
        placeholder="Password"
        variant="sign-up"
        name="password"
        register={register}
        error={errors.password}
      />
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row gap-2 items-center">
          <input
            type="checkbox"
            className=" w-[23px] h-[23px] bg-sign-up-main checked:bg-sign-up-main checked:text-sign-up-main text-sign-up-main"
            value="check"
          />
          <span className="text-[20px] font-[400]">
            I agree to terms and conditions
          </span>
        </div>
      </div>
      <SubmitButton disabled={isSubmitting}>Sign up</SubmitButton>
      <div className="text-[20px] font-[400]">
        Already have an account
        <a href="/sign-in" className="text-sign-up-main text-[20px] font-[500]">
          Sign in
        </a>
      </div>
      <div className="flex flex-row items-center">
        <Seperator variant="sign-up" />
        <span className="text-[15px] mx-4 font-[400]">Or continue with</span>
        <Seperator variant="sign-up" />
      </div>
      <div className="flex flex-row justify-between w-full">
        {links.map((link) => (
          <SocialLink link={link} variant="sign-up" key={link.link} />
        ))}
      </div>
    </form>
  );
}
