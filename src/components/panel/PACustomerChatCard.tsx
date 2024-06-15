import cn from "../../cn";

type TProps = {
  name?: string;
  email?: string;
  img?: string;
  onClick?: () => void;
  selected?: boolean;
};

export default function PACustomerChatCard({
  email,
  img,
  name,
  onClick,
  selected,
}: TProps) {
  return (
    <div
      onClick={onClick}
      className={cn("bg-white flex py-4 px-8 gap-4 items-center cursor-pointer", {
        "bg-[#ebebeb] ": selected,
      })}
    >
      <img src={img} className="w-12 h-12" alt="" />
      <div className="flex flex-col justify-center">
        <p className="font-semibold">{name}</p>
        <p className="text-sm">{email}</p>
      </div>
    </div>
  );
}
