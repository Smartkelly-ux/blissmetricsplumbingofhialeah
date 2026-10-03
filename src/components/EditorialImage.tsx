import { useState, useEffect, useRef, CSSProperties } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  style?: CSSProperties;
  priority?: boolean;
  onLoaded?: () => void;
  aspectRatio?: string;
  caption?: string;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  style,
  priority = false,
  onLoaded,
  aspectRatio,
  caption,
}: EditorialImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if image is already cached/complete on mount
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
      onLoaded?.();
    }
  }, [src, onLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoaded?.();
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#D9DEDA] ${containerClassName}`}
      style={{
        aspectRatio: aspectRatio || undefined,
        ...style,
      }}
    >
      {/* Editorial Base Tone / Shimmer Placeholder */}
      <div
        className={`absolute inset-0 bg-[#D9DEDA] transition-opacity duration-700 pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      />

      {/* Photographic Element with Smooth Cross-Fade and Restrained Editorial Scale Transition */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={handleLoad}
        referrerPolicy="no-referrer"
        className={`w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isLoaded
            ? 'opacity-100 scale-100 filter-none'
            : 'opacity-0 scale-[1.03] blur-[2px]'
        } ${className}`}
      />

      {caption && (
        <div className="absolute top-2 left-2 z-10 font-mono text-[9px] uppercase tracking-wider bg-[#1B211F]/80 text-[#FBFAF6] px-1.5 py-0.5">
          {caption}
        </div>
      )}
    </div>
  );
}
