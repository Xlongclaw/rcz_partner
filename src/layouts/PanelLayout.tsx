import { Outlet } from "react-router-dom";
import PASidebar from "../components/panel/PASidebar";
import PANavbar from "../components/panel/PANavbar";

export default function PanelLayout() {
  return (
    <div className="flex h-screen w-screen">
      <PASidebar />
      <div className="w-full">
        <PANavbar />
        <div className="mx-6 px-6 py-6 h-[40rem] bg-[#F5FAF8]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
