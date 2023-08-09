// components/Navbar.tsx
import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-50 backdrop-filter backdrop-blur bg-opacity-30 ">
      <div className="max-w-3xl mx-auto px-3">
        <div className="flex items-center justify-between h-12">
          <span className="text-xl text-black font-semibold">
         Dondurmacı
          </span>
          <div className="flex space-x-4 text-gray-800">
            <a href="#">Dashboard</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>

  );
};
export default Navbar;

// bg-gradient-to-r from-black via-purple-800 to-black     

/*    <nav className="sticky top-0 z-10 bg-gradient-to-r from-black via-sky-500 to-purple-800 p-2 border-1 border-black backdrop-filter backdrop-blur-lg bg-opacity-30">
<div className="max-w-5xl mx-auto px-4">
<h1 className="text-white font-bold ">navbar</h1>
</div>
</nav> */

{/* <nav className="sticky top-0 z-10 bg-gradient-to-r from-black via-sky-500 to-purple-800 p-2 ">
  <div className="max-w-5xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <span className="text-2xl text-gray-900 font-semibold">Logo</span>
      <div className="flex space-x-4 text-gray-900">
        <a href="#">Dashboard</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
</nav> */}