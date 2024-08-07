import Image from "next/image";
import signUpImage from "../../../public/sign-up.png";
import SignInForm from "../components/sign-in-form";
import SignUpForm from "../components/sign-up-form";

export default function SignInPage() {
  return (
    <main className="flex w-full flex-row items-center justify-between">
      <Image
        src={signUpImage}
        alt="relative z-[-500] log-in-bg"
        sizes="730px"
        placeholder="blur"
      />
      <div className="flex w-[50%]">
        <div className="max-w-[510px] w-full mx-auto min-h-[672px] flex flex-col justify-between">
          <p className="text-sign-up-main font-[600] text-[47px]">Sign up</p>
          <p className="text-[20px] font-[400] text-black">
            Create your account in seconds!
          </p>
          <SignUpForm />
        </div>
      </div>
    </main>
  );
}
