import { cookies } from "next/headers";

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return session;
}
