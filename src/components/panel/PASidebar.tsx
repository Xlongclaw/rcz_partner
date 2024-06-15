import PAHeader from "./PAHeader";
import PAMenu from "./PAMenu";

export default function PASidebar() {
  return (
    <div className=" border-r border-[#F2F2F2] py-6 flex flex-col gap-10 items-center">
      <PAHeader />
      <PAMenu />
    </div>
  );
}
