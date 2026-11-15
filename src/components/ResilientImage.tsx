import { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  aspectClass = 'aspect-[4/3]',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`${aspectClass} w-full bg-[#EDE7DF] flex flex-col items-center justify-center p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          aria-hidden="true"
          className="text-[#7A4426]/60 mb-2"
        >
          <rect x="6" y="10" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 16H30" stroke="currentColor" strokeWidth="1.5" />
          <path d="M18 10V28" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M18 10C15 10 13 7 15 5.5C17 4 18 7.5 18 10ZM18 10C21 10 23 7 21 5.5C19 4 18 7.5 18 10Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <span className="text-xs font-medium text-[#5A463B] max-w-[22ch] leading-snug">{alt}</span>
      </div>
    );
  }

  return (
    <div className={`${aspectClass} w-full overflow-hidden bg-[#EDE7DF] ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
      />
    </div>
  );
}
