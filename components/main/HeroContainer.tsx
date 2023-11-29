import { FC, ReactNode, useRef } from 'react';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IHeroContainer {
  children: (arg: { position: MotionValue<'absolute' | 'fixed'> }) => ReactNode;
}

export const HeroContainer: FC<IHeroContainer> = ({ children }) => {
  // making sure that the glasses remains in the Hero container
  const HeroContainerRef = useRef(null);
  const { scrollYProgress: containterScrollYProgress } = useScroll({
    target: HeroContainerRef,
  });

  const position = useTransform(containterScrollYProgress, (pos) =>
    pos >= 1 ? 'absolute' : 'fixed'
  );

  return (
    <div className="relative" ref={HeroContainerRef}>
      {children({ position })}
    </div>
  );
};
