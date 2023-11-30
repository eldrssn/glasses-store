import React from 'react';

import { collection } from './constants';
import { CollectionItem } from './CollectionItem';

export const CollectionList = () => (
  <section className="grid min-h-screen px-20 pb-10 snap-center place-content-center">
    <div className="flex flex-col items-center justify-center gap-3 pb-20 pt-[25vh]">
      <h2 className="text-4xl font-bold">Make ‘em say Dammn!</h2>
      <p className="text-2xl">Explore our hottest collection</p>
    </div>

    <ul className="grid justify-start grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
      {collection.map((item, i) => (
        <CollectionItem key={i} i={i} item={item} />
      ))}
    </ul>
  </section>
);
