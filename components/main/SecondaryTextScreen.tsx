import { FC } from 'react';

interface ISecondaryTextScreen {
  text: string;
}

export const SecondaryTextScreen: FC<ISecondaryTextScreen> = ({ text }) => (
  <div className="grid h-screen place-content-center bg-zinc-300 snap-center">
    <h2 className="uppercase text-[8vw] font-bold">{text}</h2>
  </div>
);
