import { clsxm } from "@/lib";

interface InputPros extends React.ComponentPropsWithoutRef<"input"> {}

export const Input = (props: InputPros) => {
  return (
    <input
      {...props}
      className={clsxm("w-full rounded border border-[#dee2e6] p-3 text-base")}
    />
  );
};
