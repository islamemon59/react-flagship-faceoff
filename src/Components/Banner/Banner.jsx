import React, { useState } from "react";

const Banner = ({handleSearch}) => {

  const [searchText, setSearchText] = useState("")
  return (
    <div className="flex flex-col justify-center items-center lg:pt-20 md:pt-16 pt-10">
      <img className="w-md" src="images/banner.png" alt="" />
      <div className="text-center space-y-6">
        <h1 className="lg:text-7xl md:text-6xl text-5xl font-thin ">Browse, Search, View, Buy</h1>
        <p className="md:text-[16px] text-[14px]">
          Best place to browse, search, view details and purchase of top
          flagship phones <br />
          of the current time - FlagshipFaceOff
        </p>
      </div>
      <form onSubmit={(e) => handleSearch(e, searchText)} className="flex justify-center md:flex-row flex-col items-center md:w-4/5 gap-2 mt-5 w-full">
      <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className="w-2/3 h-13 px-4 focus:outline-none border border-gray-300 shadow-md rounded focus:shadow-outline" type="text" placeholder="Search Phone by Name" />
        <button className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Search</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </form>
    </div>
  );
};

export default Banner;
