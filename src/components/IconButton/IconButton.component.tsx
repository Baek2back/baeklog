import { clsxm } from "@/lib";

interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  icon: React.ReactNode;
}

export const IconButton = ({ icon, ...rest }: IconButtonProps) => {
  return (
    <button
      {...rest}
      className={clsxm("flex h-10 w-10 items-center justify-center text-2xl")}
    >
      {icon}
    </button>
  );
};
