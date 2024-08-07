import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full flex-row items-center justify-between">
      <Link href="/sign-in">Sign-In-Page</Link>
      <Link href="/sign-up">Sign-Up-Page</Link>
    </main>
  );
}
