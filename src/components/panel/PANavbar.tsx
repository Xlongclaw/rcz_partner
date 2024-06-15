import PAUserDataContainer from "./PAUserDataContainer";

export default function PANavbar() {
  return (
    <div className="flex justify-between items-center p-6 ">
      <div className="font-semibold text-[#A8A8A8] text-sm">Dashboard</div>
      <PAUserDataContainer />
    </div>
  );
}
