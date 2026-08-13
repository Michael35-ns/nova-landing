import { useEffect, useRef } from 'react';

type ImageSlotProps = {
  src?: string;
  alt?: string;
  srcset?: string;
  sizes?: string;
  className?: string;
  width?: number;
  height?: number;
};

export default function ImageSlot({ src, alt, srcset, sizes, className }: ImageSlotProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove any previous content
    containerRef.current.innerHTML = '';

    // Create the web component element and set attributes
    const el = document.createElement('image-slot');
    if (src) el.setAttribute('src', src);
    if (alt) el.setAttribute('alt', alt);
    if (srcset) el.setAttribute('srcset', srcset);
    if (sizes) el.setAttribute('sizes', sizes);
    if (className) el.className = className;

    containerRef.current.appendChild(el);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, [src, alt, srcset, sizes, className]);

  return <div ref={containerRef} />;
}
