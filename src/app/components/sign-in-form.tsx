"use client";
import { FieldValues, useForm } from "react-hook-form";
import { links } from "../assests/assests";
import FormField from "./form-field";
import PasswordInput from "./password-input";
import Seperator from "./seperator";
import SocialLink from "./social-link";
import SubmitButton from "./submit-button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/schemas";
import { loginAction } from "../actions/actions";
import useAuthStore from "../stores/auth-store";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { setEmail } = useAuthStore();

  const onSubmit = async (data: FieldValues) => {
    const response = await loginAction(data);
    const { status, email } = response;
    setEmail(email);
    status === "success" && toast.success("Login success");

    router.push("/protected-route");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mt-[20px] min-h-full justify-between flex flex-col"
    >
      <FormField
        type="email"
        register={register}
        error={errors.email}
        placeholder="info@example.com"
        name="email"
        variant="sign-in"
        label="Email Address"
      />
      <PasswordInput
        placeholder="Password"
        variant="sign-in"
        name="password"
        register={register}
        error={errors.password}
      />
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row gap-2 items-center">
          <input
            type="checkbox"
            className=" w-[23px] h-[23px] bg-sign-in-main checked:bg-sign-in-main checke:text-sign-in-main text-sign-in-main"
            value="check"
          />
          <span className="text-[20px] font-[400]">Keep me logged in</span>
        </div>
        <span className="text-sign-in-main text-[20px] font-[500]">
          Forgot password?
        </span>
      </div>
      <SubmitButton disabled={isSubmitting}>Log in</SubmitButton>
      <div className="text-[20px] font-[400]">
        Don’t have an account?
        <a href="/sign-up" className="text-sign-in-main text-[20px] font-[500]">
          Sign up
        </a>
      </div>
      <div className="flex flex-row items-center">
        <Seperator variant="sign-in" />
        <span className="text-[15px] mx-4 font-[400] text-nowrap">
          Or continue with
        </span>
        <Seperator variant="sign-in" />
      </div>
      <div className="flex flex-row justify-between">
        {links.map((link) => (
          <SocialLink link={link} variant="sign-in" key={link.link} />
        ))}
      </div>
    </form>
  );
}
