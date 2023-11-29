import React from 'react';

export const Header = () => (
  <header className="py-10 px-20 flex justify-between items-center uppercase fixed top-0 left-0 right-0 z-20">
    <h1 className="text-3xl font-black">Glasses</h1>
    <ul className="flex gap-24 justify-between items-center uppercase text-xl font-medium">
      <li className="cursor-pointer">Frames</li>
      <li className="cursor-pointer">New Launch</li>
      <li className="cursor-pointer">Contact Us</li>
    </ul>
    <button className="text-xl font-medium text-white py-4 px-10 bg-zinc-800">
      Shop Now
    </button>
  </header>
);
