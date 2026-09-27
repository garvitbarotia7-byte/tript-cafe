import type { CSSProperties } from 'react';
import { DecorativeArt, type DecorativeArtVariant } from './DecorativeArt';

export type ArtItem = {
  variant: DecorativeArtVariant;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  className?: string;
  opacity?: number;
  rotate?: number;
};

export function ArtLayer({ items, className = '' }: { items: ArtItem[]; className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {items.map((item, index) => {
        const style: CSSProperties = {
          left: item.left,
          right: item.right,
          top: item.top,
          bottom: item.bottom,
          opacity: item.opacity ?? 0.3,
          transform: item.rotate !== undefined ? `rotate(${item.rotate}deg)` : undefined,
        };

        return (
          <div key={`${item.variant}-${index}`} className="absolute" style={style}>
            <DecorativeArt
              variant={item.variant}
              className={item.className ?? 'h-16 w-16'}
            />
          </div>
        );
      })}
    </div>
  );
}
