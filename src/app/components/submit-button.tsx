export default function SubmitButton({
  disabled,
  children,
}: {
  disabled: boolean;
  children: string;
}) {
  return (
    <button
      type="submit"
      className={`group flex w-full text-white text-[25px] font-600 rounded-[15px] max-h-[80px] h-full ${
        children === "Log in" ? "bg-sign-in-main" : "bg-sign-up-main"
      }  mx-auto items-center justify-center gap-2 transition-all `}
      disabled={disabled}
    >
      {disabled ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-primary-foreground"></div>
      ) : (
        children
      )}
    </button>
  );
}
