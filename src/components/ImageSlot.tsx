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

  // display:contents keeps this wrapper out of the box model so the
  // <image-slot> custom element becomes the effective child of its CSS
  // parent (e.g. .hero-bg), letting percentage width/height rules on
  // `image-slot` resolve against a real containing block instead of
  // collapsing against this div's auto height.
  return <div ref={containerRef} style={{ display: 'contents' }} />;
}
