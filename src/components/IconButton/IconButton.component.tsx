interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export const IconButton = ({ icon, ...rest }: IconButtonProps) => {
  return (
    <button
      {...rest}
      className="flex h-10 w-10 items-center justify-center text-2xl"
    >
      {icon}
    </button>
  );
};