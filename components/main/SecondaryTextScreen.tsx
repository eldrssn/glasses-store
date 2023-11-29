import { FC } from 'react';

interface ISecondaryTextScreen {
  text: string;
}

export const SecondaryTextScreen: FC<ISecondaryTextScreen> = ({ text }) => (
  <div className="h-screen grid place-content-center bg-zinc-300 snap-center">
    <h2 className="uppercase text-8xl font-bold">{text}</h2>
  </div>
);
