import { FieldValues } from "react-hook-form";

export const loginAction = async (data: FieldValues) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    status: "success",
    email: data.email,
    error: null,
  };
};
