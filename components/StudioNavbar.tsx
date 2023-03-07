import React from "react";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#26f70a] flex items-center ">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#61f70a] mr-2" />
          Go To Website
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#31f70a]">
          <h1 className="font-bold text-white">
            Want Vegan tips sent to your inbox daily? 👉
          </h1>
          <Link href="" className="text-[#39f70a] font-bold ml-2">
            www.goveganNow.com
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)} </>
    </div>
  );
}

export default StudioNavbar;
