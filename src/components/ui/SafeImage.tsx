'use client';

import React, { useState, useEffect } from 'react';
import { resolveSafeImageSrc, DEFAULT_REMOTE_FALLBACK, FALLBACK_SVG } from '@/lib/image-fallback';

interface SafeImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: unknown;
  alt: string;
}

export function SafeImage({ src, alt, className, style, ...rest }: SafeImageProps) {
  const initialSrc = resolveSafeImageSrc(src);
  const [currentSrc, setCurrentSrc] = useState<string>(initialSrc);
  const [fallbackStage, setFallbackStage] = useState<number>(0);

  useEffect(() => {
    setCurrentSrc(resolveSafeImageSrc(src));
    setFallbackStage(0);
  }, [src]);

  const handleError = () => {
    if (fallbackStage === 0 && currentSrc !== DEFAULT_REMOTE_FALLBACK && currentSrc !== FALLBACK_SVG) {
      setFallbackStage(1);
      setCurrentSrc(DEFAULT_REMOTE_FALLBACK);
    } else if (currentSrc !== FALLBACK_SVG) {
      setFallbackStage(2);
      setCurrentSrc(FALLBACK_SVG);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      loading="lazy"
      {...rest}
    />
  );
}
