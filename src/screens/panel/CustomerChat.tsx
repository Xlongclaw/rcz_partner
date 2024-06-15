import React from "react";
import PACustomerChatCard from "../../components/panel/PACustomerChatCard";
import PAChat from "../../components/panel/PAChat";

const INQUERIES = [
  {
    name: "James Smith",
    img: "images/avataar.png",
    email: "james@smith.com",
  },
  {
    name: "James Smit",
    img: "images/avataar.png",
    email: "james@smit.com",
  },
];

export default function CustomerChat() {
  const [selected, setSelected] = React.useState("");
  return (
    <div className="flex h-full">
      <div className="flex flex-col gap-3 border-r-4 border-white pr-6 h-full">
        {INQUERIES.map((inquery, i) => (
          <PACustomerChatCard
            onClick={() => setSelected(inquery.email)}
            key={`INQUERY_${inquery.email}_${i}`}
            email={inquery.email}
            img={inquery.img}
            name={inquery.name}
            selected={inquery.email === selected}
          />
        ))}
      </div>
      {/* <div className="flex-1 flex flex-col gap-2 ">
        <div className="border-b-4 border-white h-16 px-4 flex gap-4">
          <img src="images/avataar.png" className="w-12 h-12" alt="" />
          <div>
            <div className="font-semibold">James Smith</div>
            <div className="text-sm">james@smith.com</div>
          </div>
        </div>
        <div className="bg-white w-full h-full"></div>
        <div className="bg-white p-4">
          <p className="text-sm font-medium text-[#737373]">Type your message</p>
          <div>
            <img src="mic.png" alt="" />
          </div>
        </div>
      </div> */}
      <div className="flex-1 pl-6">
        <PAChat />
      </div>
    </div>
  );
}
