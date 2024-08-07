import { link, variant } from "../lib/types";

export default function SocialLink({
  link,
  variant,
}: {
  link: link;
  variant: variant;
}) {
  return (
    <a
      href={link.link}
      className={`${
        variant === "sign-in"
          ? "flex items-center rounded-[15px] justify-center w-[105px] h-[80px] bg-sign-in-main"
          : "flex items-center rounded-[15px] justify-center w-[105px] h-[80px] bg-sign-up-main"
      }`}
    >
      <link.icon />
    </a>
  );
}
