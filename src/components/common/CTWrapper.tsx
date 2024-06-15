type TProps = {
  children?: React.ReactNode;
};

export default function CTWrapper({ children }: TProps) {
  return (
    <div className="p-12 bg-white rounded-xl border flex flex-col gap-6 items-center border-[#F9F8F8]">
      {children}
    </div>
  );
}
