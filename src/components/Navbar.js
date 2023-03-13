import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="hidden relative flex-wrap items-center justify-between px-2 py-3 bg-slate-900 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
              EV-Solutions
            </a>
            <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                  Contact-Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="font-[Roboto] mt-4 mx-4 md:mx-6 p-3 rounded-full outline outline-1 outline-[#297e83]">
        <div className="flex justify-between items-center">
          <div className="brand">
            <i class="fa-solid fa-burger text-2xl text-[#35b3ba]"></i>
          </div>
          <div className="navigation">
            <div className="md:hidden px-3 py-1.5 rounded-full outline outline-1 outline-[#369174]">
              <i class="fa-solid fa-bars text-xl text-[#35b3ba]"></i>
            </div>
            <ul className="hidden md:flex">
              <li className="px-4 py-1.5 cursor-pointer rounded-full hover:bg-[#43c49b] hover:text-white text-[#35b3ba]">Home</li>
              <li className="px-4 py-1.5 cursor-pointer rounded-full hover:bg-[#43c49b] hover:text-white text-[#35b3ba]">Product</li>
              <li className="px-4 py-1.5 cursor-pointer rounded-full hover:bg-[#43c49b] hover:text-white text-[#35b3ba]">Features</li>
              <li className="px-4 py-1.5 cursor-pointer rounded-full hover:bg-[#43c49b] hover:text-white text-[#35b3ba]">Customer Service</li>
              <li className="px-4 py-1.5 cursor-pointer rounded-full hover:bg-[#43c49b] hover:text-white text-[#35b3ba]">Trade In</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}