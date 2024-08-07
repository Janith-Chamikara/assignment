"use server";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const loginAction = async (data: FieldValues) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { email } = data;
  const expires = new Date(Date.now() + 10 * 1000);
  cookies().set("session", email, { expires });
  return {
    status: "success",
    email: data.email,
  };
};
export const signUpAction = async (data: FieldValues) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { email, fullName } = data;
  const expires = new Date(Date.now() + 10 * 1000);
  cookies().set("session", email, { expires }); //payload need to encrypted ( using jwt and signing payload any other method)
  return {
    status: "success",
    email: email,
    name: fullName,
  };
};
