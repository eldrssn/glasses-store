import { FC, ReactChild, ReactNode, useRef } from 'react';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IGlassesContainer {
  children: (arg: { x: MotionValue<string> }) => ReactNode;
}

export const GlassesContainer: FC<IGlassesContainer> = ({ children }) => {
  // moving the glasses to the left and to the right
  const GlassesContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: GlassesContainerRef,
    offset: ['33% end', 'end end'],
  });

  const pageRange = [0, 0.33, 0.66, 1];
  const xRange = ['50%', '70%', '30%', '50%'];
  const x = useTransform(scrollYProgress, pageRange, xRange);

  return (
    <div ref={GlassesContainerRef} className="snap-center">
      {children({ x })}
    </div>
  );
};
