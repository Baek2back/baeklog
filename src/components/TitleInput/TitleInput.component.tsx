interface TitleInputPros
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const TitleInput = (props: TitleInputPros) => {
  return (
    <input
      {...props}
      className="w-full rounded border border-[#dee2e6] p-3 text-base outline-none"
    />
  );
};
