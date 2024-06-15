type TProps = {
  placeHolder?: string;
  label?: string;
  onChange?: (value: string) => void;
};

export default function CTInputField({
  placeHolder = "",
  label = "",
  onChange = () => {},
}: TProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className="border border-[#E5E5E5] bg-white flex flex-col px-4 py-2 rounded-lg w-[18rem] ">
      <label className="text-xs font-medium" htmlFor="">
        {label}
      </label>
      <input
        onChange={handleChange}
        className="text-sm"
        type="text"
        placeholder={placeHolder}
      />
    </div>
  );
}
