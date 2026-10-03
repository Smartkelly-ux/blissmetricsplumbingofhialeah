import { useEffect, useRef, useState } from 'react';
import { APP_IMAGES } from '../assets/images.ts';
import { EditorialImage } from './EditorialImage.tsx';

export function SectionTheUnknown() {
  const sectionRef = useRef<HTMLElement>(null);
  const [trackingOffset, setTrackingOffset] = useState<number>(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTrackingOffset(0);
      return;
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When section enters the viewport to when it leaves
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Progress from 0 (just entering from bottom) to 1 (passed through)
        const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
        
        // Tracking expands then settles: peaks near the center, then settles to nominal
        // Bell-curve shape for subtle expansion:
        const widenFactor = Math.sin(progress * Math.PI) * 0.08; // subtle widening in em
        setTrackingOffset(widenFactor);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-t border-[#D9DEDA] py-20 md:py-28 bg-[#F4F3EE] overflow-hidden"
    >
      <div className="w-full px-5 md:px-10 lg:px-14">
        
        {/* Wide Horizontal Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left 25% (col-span-1 to col-span-3) */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#4A514E]">
                01 / START HERE
              </span>
              <span className="h-[1px] w-6 bg-[#B78C72]" />
            </div>
            <p className="font-mono text-[10px] sm:text-[11px] text-[#929792] uppercase mt-2 sm:mt-3 leading-relaxed">
              UNRESOLVED SYMPTOMS · INITIAL DISCOVERY
            </p>
          </div>

          {/* Center 45% (col-span-4 to col-span-8): Responsive Headline */}
          <div className="lg:col-span-5">
            <h2
              className="text-[24px] xs:text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#1B211F] leading-[1.1] sm:leading-[1.02] uppercase select-none transition-all duration-300 break-words"
              style={{
                letterSpacing: `${-0.03 + trackingOffset}em`,
              }}
            >
              SOMETHING<br />
              ISN'T RIGHT.
            </h2>
          </div>

          {/* Right 30% (col-span-9 to col-span-12): Small paragraph */}
          <div className="lg:col-span-4 lg:pt-2">
            <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#4A514E] leading-relaxed max-w-md">
              A leak, clogged fixture or failing installation can interrupt the simplest part of the day.
            </p>
            <div className="mt-5 sm:mt-6 pt-4 border-t border-[#D9DEDA] flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#929792]">
              <span>UNCERTAINTY TO CLARITY</span>
              <span className="text-[#21403D]">PHASE: DIAGNOSIS</span>
            </div>
          </div>

        </div>

        {/* Offset Small Vertical Image (NOT directly under the headline, shifted right) */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12">
          {/* Empty spacer on left 6 cols to push image to the right */}
          <div className="hidden lg:block lg:col-span-7" />

          {/* Image occupies col-span-8 to col-span-11 */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end">
            <div className="w-full max-w-[320px] shadow-xs border border-[#D9DEDA]">
              <EditorialImage
                src={APP_IMAGES.unknownGauge}
                alt="Precision brass residential water valve and copper pipe manifold with calibrated plumbing fittings"
                aspectRatio="3/4"
                caption="FIG. 1.01 — MANIFOLD"
              />
            </div>
            <div className="w-full max-w-[320px] mt-2 flex justify-between font-mono text-[10px] text-[#929792]">
              <span>WATER PRESSURE TRACE</span>
              <span>POINT OF ORIGIN</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
