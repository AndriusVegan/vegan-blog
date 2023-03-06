import React from "react";

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Vegan Daily Blog</h1>
        <h2 className="mt-5 md:mt-0 pt-2">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#4df70a] ">
            Every Vegan
          </span>{" "}
          favourite blog on the net
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Vegan tip, advice and recipes & more
      </p>
    </div>
  );
}

export default Banner;
