import { withCssVar } from '@/utils/motion';
import { MotionValue, motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

interface IGlassesImage {
  x: MotionValue<string>;
  position: MotionValue<'absolute' | 'fixed'>;
}

export const GlassesImage: FC<IGlassesImage> = ({ x, position }) => (
  <div className="absolute bottom-0 w-full h-screen">
    <motion.div
      style={withCssVar({ '--x': x, position })}
      className="top-1/2 left-1/2 transform -translate-x-[var(--x)] -translate-y-1/2 z-20"
    >
      <Image
        src="/images/glasses-animation.png"
        width={1039}
        height={421}
        alt="glasses"
        priority={true}
      />
    </motion.div>
  </div>
);
