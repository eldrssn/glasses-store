import { GlassesImage } from './GlassesImage';
import { SecondaryTextScreen } from './SecondaryTextScreen';
import { GlassesContainer } from './GlassesContainer';
import { HeroContainer } from './HeroContainer';
import { PrimaryTextScreen } from './PrimaryTextScreen';

export const Hero = () => (
  <HeroContainer>
    {({ position }) => (
      <>
        <GlassesContainer>
          {({ x }) => (
            <>
              <GlassesImage x={x} position={position} />
              <PrimaryTextScreen />
            </>
          )}
        </GlassesContainer>

        {['This is your vision', 'Through our lenses'].map((text) => (
          <SecondaryTextScreen text={text} key={text} />
        ))}
      </>
    )}
  </HeroContainer>
);
