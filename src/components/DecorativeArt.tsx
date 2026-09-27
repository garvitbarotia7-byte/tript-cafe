import ancientBoat from '@/assets/ancient_boat.svg';
import decorativeWaves from '@/assets/decorative_waves.svg';
import potteryVessels from '@/assets/pottery_vessels.svg';
import seatedFigure from '@/assets/seated_figure.svg';
import sunIcon from '@/assets/sun.svg';
import sunAltIcon from '@/assets/sun 2.svg';
import whiteFish from '@/assets/white fish.svg';
import palmLeaf from '@/assets/palm.svg';
import elephantArt from '@/assets/elephant.svg';
import leafArt from '@/assets/leaf.svg';
import drumDanceArt from '@/assets/vertical drum and dancing.svg';
import tribalArt from '@/assets/3 tribal people .svg';
import borderArt from '@/assets/mural_border.svg';
import longBorderArt from '@/assets/long horizontal border drum dance.svg';

const artworkMap = {
  boat: ancientBoat,
  waves: decorativeWaves,
  pottery: potteryVessels,
  figure: seatedFigure,
  sun: sunIcon,
  sunAlt: sunAltIcon,
  fish: whiteFish,
  palm: palmLeaf,
  elephant: elephantArt,
  leaf: leafArt,
  drum: drumDanceArt,
  tribal: tribalArt,
  border: borderArt,
  longBorder: longBorderArt,
} as const;

export type DecorativeArtVariant = keyof typeof artworkMap;

interface DecorativeArtProps {
  variant: DecorativeArtVariant;
  className?: string;
  alt?: string;
}

export function DecorativeArt({ variant, className = '', alt = '' }: DecorativeArtProps) {
  return (
    <img
      src={artworkMap[variant]}
      alt={alt}
      className={className}
      aria-hidden={alt ? undefined : true}
      draggable={false}
    />
  );
}
