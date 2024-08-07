export default function Seperator({ variant }: { variant: string }) {
  return (
    <div
      className={`w-full max-h-[3px] h-full  max-w-[157px] ${
        variant === "sign-in" ? "bg-sign-in-main" : "bg-sign-up-main"
      }`}
    />
  );
}
