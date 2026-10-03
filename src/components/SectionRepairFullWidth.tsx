import { useEffect, useRef, useState } from 'react';
import { APP_IMAGES } from '../assets/images.ts';

export function SectionRepairFullWidth() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[70vh] min-h-[500px] max-h-[750px] overflow-hidden bg-[#1B211F]"
    >
      {/* Background Photograph with Lazy Loading and Cross-Fade */}
      <img
        src={APP_IMAGES.repairFullwidth}
        alt="Plumbing technician completing an indoor fixture repair in a quiet home"
        loading="lazy"
        decoding="async"
        onLoad={() => setImgLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
        }`}
        referrerPolicy="no-referrer"
      />

      {/* EXPOSURE REVEAL OVERLAY: begins darker, slowly decreases as section enters */}
      <div
        className={`absolute inset-0 bg-[#1B211F] transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          inView ? 'opacity-40' : 'opacity-75'
        }`}
      />

      {/* Subtle bottom gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B211F]/70 via-transparent to-transparent pointer-events-none" />

      {/* Narrow White Text Block Placed Approx 25% from Left */}
      <div className="relative z-10 w-full h-full px-5 md:px-10 lg:px-14 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12">
          
          {/* Offset 3 cols (25%) */}
          <div className="hidden lg:block lg:col-span-3" />

          {/* Narrow White Text Block (col-span-4) */}
          <div className="lg:col-span-4 bg-[#FBFAF6] p-6 sm:p-8 md:p-10 shadow-lg border border-[#D9DEDA] max-w-full">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#B78C72]">
                02 / REPAIR
              </span>
              <span className="h-[1px] w-6 bg-[#B78C72]" />
            </div>

            <h2 className="text-2xl xs:text-[28px] sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1B211F] leading-[1.08] sm:leading-[1.05] tracking-tight uppercase">
              THE FIX<br />
              SHOULD<br />
              MAKE SENSE.
            </h2>

            <div className="mt-5 sm:mt-6 pt-4 border-t border-[#D9DEDA] flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-[#4A514E] uppercase">
              <span>RATIONALE FIRST</span>
              <span>NO GUESSWORK</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
