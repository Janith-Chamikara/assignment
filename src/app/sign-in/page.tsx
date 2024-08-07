import Image from "next/image";
import logInImage from "../../../public/sign-in.png";
import SignInForm from "../components/sign-in-form";

export default function SignInPage() {
  return (
    <main className="flex w-full flex-row items-center justify-between">
      <Image
        src={logInImage}
        alt="relative z-[-500] log-in-bg"
        sizes="730px"
        placeholder="blur"
      />
      <div className="flex w-[50%]">
        <div className="max-w-[510px] mx-auto min-h-[672px] flex flex-col justify-between">
          <p className="text-sign-in-main font-[600] text-[47px]">Login</p>
          <p className="text-[20px] font-[400] text-black">
            Please enter your login details to start having fun!
          </p>
          <SignInForm />
        </div>
      </div>
    </main>
  );
}
