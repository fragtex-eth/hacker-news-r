import { RiAlignCenter } from "@remixicon/react";
import { RiCloseFill } from "@remixicon/react";
import { RiHome5Line } from "@remixicon/react";
import { RiSpeakLine } from "@remixicon/react";
import { RiEyeLine } from "@remixicon/react";
import { RiBriefcase3Line } from "@remixicon/react";

import Logo from "../assets/logo.svg";

export default function Navigation() {
  const NavigationItems = [
    {
      name: "New",
      symbol: <RiHome5Line />,
    },
    {
      name: "Ask",
      symbol: <RiSpeakLine />,
    },
    {
      name: "Show",
      symbol: <RiEyeLine />,
    },
    {
      name: "Job",
      symbol: <RiBriefcase3Line />,
    },
  ];
  return (
    <>
      <nav className="min-h-16 flex justify-between w-full items-center px-3 border border-b border-neutral-200">
        <div className="font-ibm-plex font-medium text-2xl flex">
          <img src={Logo} />
          Hacker News
        </div>
        <RiAlignCenter />
      </nav>
      <div className="max-w-[280px] bg-white absolute">
        <div>
          <div className="font-ibm-plex font-medium text-2xl flex">
            <img src={Logo} />
            Hacker News
          </div>
          <RiCloseFill />
        </div>
        {NavigationItems.map((item) => (
          <div className="text-sm font-medium text-neutral-600 flex items-center gap-3">
            {item.symbol}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
