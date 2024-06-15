type TProps = {
  baseText?: string;
  highlightText?: string;
  href?: string;
};

export default function AUChipLink({ baseText, highlightText, href }: TProps) {
  return (
    <a
      href={href}
      className="flex text-sm font-semibold gap-1 hover:cursor-pointer"
    >
      <p className="text-[#A3A3A3]">{baseText}</p>
      <p className="text-[#10B981]">{highlightText}</p>
    </a>
  );
}
