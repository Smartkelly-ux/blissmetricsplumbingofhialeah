import { useEffect, useRef, useState } from 'react';
import { SouthFloridaServiceMap } from './SouthFloridaServiceMap.tsx';
import { APP_IMAGES } from '../assets/images.ts';
import { EditorialImage } from './EditorialImage.tsx';

export function SectionTheHome() {
  const sectionRef = useRef<HTMLElement>(null);
  const [cropInset, setCropInset] = useState<number>(4); // percentage inset for crop

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCropInset(0);
      return;
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        // Normalized progress through the section
        const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
        // Crop smoothly transitions from 5% to 0% inset (camera reconsidering the frame, stationary image)
        const inset = (1 - progress) * 5;
        setCropInset(inset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-t border-[#D9DEDA] py-20 md:py-32 bg-[#F4F3EE] overflow-hidden"
    >
      <div className="w-full px-5 md:px-10 lg:px-14">
        
        {/* Top Section Metadata */}
        <div className="flex items-center justify-between border-b border-[#D9DEDA] pb-4 mb-10 md:mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#4A514E]">
              05 / RESOLUTION
            </span>
            <span className="h-[1px] w-6 bg-[#B78C72]" />
            <span className="font-mono text-[11px] text-[#929792] uppercase">
              SOUTH FLORIDA DOMICILE
            </span>
          </div>
          <span className="font-mono text-xs tracking-wider text-[#21403D] uppercase font-semibold">
            HIALEAH / FL
          </span>
        </div>

        {/* 60% Left Image / 40% Right Warm Canvas Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT 60% (col-span-1 to col-span-7): Image with Crop Transition */}
          <div className="lg:col-span-7">
            <div className="w-full border border-[#D9DEDA] shadow-xs">
              <EditorialImage
                src={APP_IMAGES.homeInterior}
                alt="Quiet South Florida home kitchen and living space in pristine, restored condition"
                aspectRatio="16/10"
                caption="STATUS: RESIDENTIAL RESTORED"
                className="transition-all duration-300 ease-out"
                style={{
                  clipPath: `inset(${cropInset}% ${cropInset}% ${cropInset}% ${cropInset}%)`,
                }}
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between font-mono text-[10px] text-[#929792]">
              <span>RESTORED ROOM</span>
              <span>NO RESIDUAL WORK MARKS</span>
            </div>
          </div>

          {/* RIGHT 40% (col-span-8 to col-span-12): Warm Canvas & Typography */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-6">
            <h2 className="text-[26px] xs:text-[30px] sm:text-[36px] md:text-[44px] lg:text-[54px] font-bold text-[#1B211F] leading-[1.06] sm:leading-[0.98] tracking-tight uppercase break-words">
              BACK TO<br />
              NORMAL.
            </h2>

            <p className="mt-3.5 sm:mt-5 text-[15px] sm:text-[16px] md:text-[18px] text-[#4A514E] leading-relaxed max-w-md">
              The goal is simple: restore the room and leave the plumbing working properly.
            </p>

            <div className="mt-8 pt-6 border-t border-[#D9DEDA] space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[#1B211F]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#21403D]" />
                <span>COMPLETE JOB CLEARANCE</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#4A514E]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B78C72]" />
                <span>CLEAN WORKSPACES & FLOORS</span>
              </div>
            </div>
          </div>

        </div>

        {/* Integrated Tri-County Cartographic Map Component */}
        <SouthFloridaServiceMap />

      </div>
    </section>
  );
}
