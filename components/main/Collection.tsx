import React from 'react';
import Image from 'next/image';
import { collection } from './constants';

export const Collection = () => (
  <section className="h-screen snap-center">
    <div className="pt-60 pb-20 flex flex-col gap-3 justify-center items-center">
      <h2 className="font-bold text-4xl">Make ‘em say Dammn!</h2>
      <p className="text-2xl">Explore our hottest collection</p>
    </div>

    <ul className="flex justify-between">
      {collection.map((item, i) => (
        <li key={i} className="relative">
          <Image src={item.img} alt="glasses" width={361} height={361} />
          <div className="absolute bottom-7 left-7">
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);
