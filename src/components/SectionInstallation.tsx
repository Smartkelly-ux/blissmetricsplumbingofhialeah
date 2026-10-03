import { useEffect, useRef, useState } from 'react';
import { APP_IMAGES } from '../assets/images.ts';
import { EditorialImage } from './EditorialImage.tsx';

export function SectionInstallation() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          const timer = setTimeout(() => {
            setTextRevealed(true);
          }, 120);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-t border-[#D9DEDA] py-20 md:py-32 bg-[#F4F3EE] overflow-hidden"
    >
      <div className="w-full px-5 md:px-10 lg:px-14">
        
        {/* Asymmetric 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* COLUMN 1: Metadata (md:col-span-3 lg:col-span-2) */}
          <div className="md:col-span-3 lg:col-span-2 flex flex-col justify-start">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1B211F] font-mono leading-none">
              03
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#4A514E] mt-3">
              INSTALLATION
            </span>
            <div className="h-[1px] w-12 bg-[#B78C72] mt-4" />
            <p className="font-mono text-[10px] sm:text-[11px] text-[#929792] uppercase mt-3 sm:mt-4 hidden md:block leading-relaxed">
              FIXTURE & DRAINAGE GEOMETRY
            </p>
          </div>

          {/* COLUMN 2: Large Image with Bottom-to-Top Soft Clip-Path (md:col-span-5 lg:col-span-6) */}
          <div className="md:col-span-5 lg:col-span-6 relative">
            <div className="w-full border border-[#D9DEDA] shadow-xs">
              <EditorialImage
                src={APP_IMAGES.installationFixture}
                alt="Pristine kitchen faucet fixture installation with clean marble countertop and flawless alignment"
                aspectRatio="4/3"
                className="transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  clipPath: revealed ? 'inset(0% 0 0% 0)' : 'inset(100% 0 0% 0)',
                }}
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between font-mono text-[10px] text-[#929792]">
              <span>SPECIFICATION: RESIDENTIAL KITCHEN</span>
              <span>PRESSURE-TESTED</span>
            </div>
          </div>

          {/* COLUMN 3: Headline & Supporting Copy (md:col-span-4) */}
          <div className="md:col-span-4 flex flex-col justify-center">
            <div
              className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h2 className="text-[26px] xs:text-[30px] sm:text-[36px] md:text-[38px] lg:text-[48px] font-bold text-[#1B211F] leading-[1.06] sm:leading-[0.98] tracking-tight uppercase break-words">
                BUILT<br />
                TO WORK.
              </h2>

              <p className="mt-3.5 sm:mt-5 text-[15px] sm:text-[16px] md:text-[17px] text-[#4A514E] leading-relaxed max-w-sm">
                From fixtures to plumbing system installations, keep the focus on the actual problem and the practical solution.
              </p>

              <div className="mt-5 sm:mt-7 pt-4 sm:pt-5 border-t border-[#D9DEDA] flex items-center gap-3">
                <span className="font-mono text-[11px] sm:text-xs text-[#21403D] uppercase tracking-wider font-semibold">
                  TESTED BEFORE SIGN-OFF
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
