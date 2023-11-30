import React from 'react';

export const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-10 uppercase md:px-20">
    <h1 className="text-3xl font-black">Glasses</h1>
    <ul className="items-center justify-between hidden font-medium uppercase md:gap-4 xl:gap-24 text-md xl:text-xl md:flex">
      <li className="cursor-pointer">Frames</li>
      <li className="cursor-pointer">New Launch</li>
      <li className="cursor-pointer">Contact Us</li>
    </ul>
    <button className="px-10 py-4 text-xl font-medium text-white bg-zinc-800">
      Shop Now
    </button>
  </header>
);
