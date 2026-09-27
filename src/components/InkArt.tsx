interface InkArtProps {
  variant: 'waves' | 'bird' | 'sprig' | 'swirl' | 'dashes';
  className?: string;
}

/**
 * Minimal single-line ink illustrations used as subtle section accents.
 */
export function InkArt({ variant, className = '' }: InkArtProps) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {variant === 'waves' && (
        <path
          {...common}
          d="M4 30c14-16 28-16 42 0s28 16 42 0 28-16 42 0 28 16 42 0 28-16 42 0"
        />
      )}
      {variant === 'bird' && (
        <>
          <path {...common} d="M70 36c10-12 24-12 34 0" />
          <path {...common} d="M84 36c4-5 9-5 12 0" />
          <path {...common} d="M76 33c2-1 5-1 7 0" />
          <path {...common} d="M50 20c14-8 34-8 48 0" opacity="0.5" />
        </>
      )}
      {variant === 'sprig' && (
        <>
          <path {...common} d="M100 52V14" />
          <path {...common} d="M100 22c-8-3-14-9-16-16" />
          <path {...common} d="M100 22c8-3 14-9 16-16" />
          <path {...common} d="M100 34c-7-2-12-7-14-13" />
          <path {...common} d="M100 34c7-2 12-7 14-13" />
        </>
      )}
      {variant === 'swirl' && (
        <path
          {...common}
          d="M10 30c20-24 50-24 70 0s50 24 70 0 40-24 50-12"
          opacity="0.7"
        />
      )}
      {variant === 'dashes' && (
        <path
          {...common}
          d="M8 30h22M40 30h22M72 30h22M104 30h22M136 30h22M168 30h22"
        />
      )}
    </svg>
  );
}
