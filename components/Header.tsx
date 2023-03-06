import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-18 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/000/391/163/original/the-word-vegan-in-a-heart-shape-vector.jpg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Link
          href="https://www.vegansociety.com/go-vegan/how-go-vegan"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#0af73d] flex items-center rounded-full text-center"
        >
          Sign up for vegan tips and advice
        </Link>
      </div>
    </header>
  );
}

export default Header;
