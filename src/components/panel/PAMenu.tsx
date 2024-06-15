import { useLocation, useNavigate } from "react-router-dom";
import cn from "../../cn";

const PAGES = [
  {
    title: "Dashboard",
    icon: "menu.png",
    href: "/",
  },
  {
    title: "Analytics",
    icon: "trend.png",
    href: "/analytics",
  },
  {
    title: "Property Management",
    icon: "building.png",
    href: "/property-management",
  },
  {
    title: "Account Management",
    icon: "user.png",
    href: "/account-management",
  },
  {
    title: "Customer Chat",
    icon: "chat.png",
    href: "/customer-chat",
  },
];

export default function PAMenu() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      {PAGES.map((page) => (
        <div
          key={page.title}
          onClick={() => navigate(page.href)}
          className={cn("flex gap-4 py-4 w-[20rem] px-12 cursor-pointer", {
            "bg-[#F5FAF8]": location.pathname.endsWith(page.href),
          })}
        >
          <img src={`images/${page.icon}`} alt="" />
          <p className="font-medium text-sm">{page.title}</p>
        </div>
      ))}
    </div>
  );
}
