import React, { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ICard } from './types';

export const cardVariants = (i: number) => ({
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1,
      delay: i * 0.1,
    },
  },
});

interface ICollectionItem {
  item: ICard;
  i: number;
}

export const CollectionItem: FC<ICollectionItem> = ({ item, i }) => (
  <motion.li
    initial="offscreen"
    whileInView="onscreen"
    variants={cardVariants(i)}
    className="relative"
    viewport={{ once: true }}
  >
    <Image src={item.img} alt="glasses" width={361} height={361} />
    <div className="absolute bottom-7 left-7">
      <p>{item.title}</p>
      <p>{item.price}</p>
    </div>
  </motion.li>
);
