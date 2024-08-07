import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full flex-col h-[100vh] items-center justify-center">
      <Link href="/sign-in">Sign-In-Page</Link>
      <Link href="/sign-up">Sign-Up-Page</Link>
    </main>
  );
}
