import { useState, useEffect } from 'react';
import { Phone, ArrowDownRight } from 'lucide-react';
import { APP_IMAGES } from '../assets/images.ts';

interface HeroSectionProps {
  preloaderFinished: boolean;
}

export function HeroSection({ preloaderFinished }: HeroSectionProps) {
  const [loadStage, setLoadStage] = useState<number>(0);

  useEffect(() => {
    if (!preloaderFinished) return;

    // MEASURE → REVEAL sequence
    // Step 1: Image frame begins slightly narrower, measurement marks appear
    const s1 = setTimeout(() => setLoadStage(1), 100);
    // Step 2: Frame expands to full width & image scale 1.02 -> 1.00
    const s2 = setTimeout(() => setLoadStage(2), 350);
    // Step 3: Headline reveals through clipped lines (15-25px movement)
    const s3 = setTimeout(() => setLoadStage(3), 600);
    // Step 4: CTA appears
    const s4 = setTimeout(() => setLoadStage(4), 850);
    // Step 5: Phone number appears last
    const s5 = setTimeout(() => setLoadStage(5), 1050);

    return () => {
      clearTimeout(s1);
      clearTimeout(s2);
      clearTimeout(s3);
      clearTimeout(s4);
      clearTimeout(s5);
    };
  }, [preloaderFinished]);

  return (
    <section className="relative w-full min-h-[92vh] pt-24 md:pt-28 pb-12 md:pb-16 flex flex-col justify-between overflow-hidden">
      {/* Editorial Grid Wrapper */}
      <div className="w-full px-5 md:px-10 lg:px-14 flex-1 flex flex-col justify-between">
        
        {/* Top Editorial Metric Coordinate Bar */}
        <div
          className={`flex flex-wrap items-center justify-between gap-y-2 border-b border-[#D9DEDA] pb-3 transition-opacity duration-700 ${
            loadStage >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#4A514E]">
              00 / DIAGNOSTIC
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-[#D9DEDA]" />
            <span className="font-mono text-[10px] sm:text-[11px] text-[#929792]">
              INDEX 33012-FL
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 font-mono text-[10px] sm:text-[11px] text-[#4A514E]">
            <span className="hidden sm:inline text-[#929792]">PRECISION ARCHITECTURE</span>
            <span className="text-[#21403D] font-semibold">AVAILABLE 24/7</span>
          </div>
        </div>

        {/* 12-Column Desktop Spread (Left 55% Canvas, Right 45% Photo Frame) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-6 md:pt-10 pb-4">
          
          {/* LEFT 55% (col-span-1 to col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-end">
            
            {/* Horizontal Measurement Marks (Measure Phase) */}
            <div
              className={`flex items-center gap-3 mb-5 sm:mb-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                loadStage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            >
              <div className="h-[1px] w-8 sm:w-12 bg-[#B78C72]" />
              <div className="flex gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[#1B211F]" />
                <span className="h-1 w-1 rounded-full bg-[#929792]" />
                <span className="h-1 w-1 rounded-full bg-[#D9DEDA]" />
              </div>
              <span className="font-mono text-[10px] sm:text-[11px] tracking-widest text-[#4A514E] uppercase">
                CALIBRATED ASSESSMENT
              </span>
            </div>

            {/* Clipped Line Headline: KNOW THE PROBLEM. FIX THE RIGHT THING. */}
            <div className="space-y-0.5 sm:space-y-0">
              <div className="overflow-hidden py-1">
                <h1
                  className={`text-[30px] xs:text-[36px] sm:text-[46px] md:text-[56px] lg:text-[clamp(64px,7.2vw,104px)] font-bold tracking-[-0.035em] text-[#1B211F] leading-[1.04] sm:leading-[0.96] transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    loadStage >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  KNOW THE
                </h1>
              </div>
              <div className="overflow-hidden py-1">
                <h1
                  className={`text-[30px] xs:text-[36px] sm:text-[46px] md:text-[56px] lg:text-[clamp(64px,7.2vw,104px)] font-bold tracking-[-0.035em] text-[#1B211F] leading-[1.04] sm:leading-[0.96] transition-all duration-800 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    loadStage >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  PROBLEM.
                </h1>
              </div>
              <div className="overflow-hidden py-1">
                <h1
                  className={`text-[30px] xs:text-[36px] sm:text-[46px] md:text-[56px] lg:text-[clamp(64px,7.2vw,104px)] font-bold tracking-[-0.035em] text-[#21403D] leading-[1.04] sm:leading-[0.96] transition-all duration-800 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    loadStage >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  FIX THE
                </h1>
              </div>
              <div className="overflow-hidden py-1">
                <h1
                  className={`text-[30px] xs:text-[36px] sm:text-[46px] md:text-[56px] lg:text-[clamp(64px,7.2vw,104px)] font-bold tracking-[-0.035em] text-[#1B211F] leading-[1.04] sm:leading-[0.96] transition-all duration-800 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    loadStage >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  RIGHT THING.
                </h1>
              </div>
            </div>

            {/* Supporting Copy */}
            <div className="mt-6 sm:mt-8 max-w-xl">
              <p
                className={`text-[15px] sm:text-[17px] md:text-[18px] text-[#4A514E] leading-relaxed transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  loadStage >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                Plumbing service for homes and businesses in Hialeah.
              </p>
            </div>

            {/* Action Buttons & Phone */}
            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-5">
              {/* Primary Contact Us CTA */}
              <div
                className={`w-full sm:w-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  loadStage >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <a
                  href="tel:7866559549"
                  className="group w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-6 sm:px-7 py-3.5 bg-[#21403D] text-[#FBFAF6] text-xs sm:text-sm font-medium tracking-wide rounded-full hover:bg-[#1B211F] hover:text-[#FBFAF6] hover:scale-[1.02] hover:shadow-md active:scale-[0.99] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#21403D] min-h-[44px]"
                  aria-label="Contact Us by Phone"
                >
                  <Phone className="w-4 h-4 text-[#B78C72] group-hover:rotate-12 group-hover:scale-110 transition-transform duration-200" />
                  <span>CONTACT US</span>
                </a>
              </div>

              {/* Secondary Request Service CTA */}
              <div
                className={`w-full sm:w-auto transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  loadStage >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <a
                  href="#request-service"
                  className="group w-full sm:w-auto inline-flex justify-center items-center gap-2 px-5 sm:px-6 py-3.5 bg-transparent text-[#1B211F] text-xs sm:text-sm font-medium tracking-wide border border-[#1B211F] rounded-full hover:bg-[#FBFAF6] hover:border-[#21403D] hover:text-[#21403D] hover:scale-[1.02] hover:shadow-xs active:scale-[0.99] transition-all duration-200 min-h-[44px]"
                >
                  <span>REQUEST SERVICE</span>
                  <ArrowDownRight className="w-4 h-4 text-[#4A514E] group-hover:text-[#21403D] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-200" />
                </a>
              </div>

              {/* Direct call action without number text */}
              <div
                className={`w-full sm:w-auto mt-1 sm:mt-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  loadStage >= 5 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <a
                  href="tel:7866559549"
                  className="group font-mono text-xs sm:text-sm tracking-tight text-[#4A514E] hover:text-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 inline-flex items-center gap-2 min-h-[36px]"
                  aria-label="Contact Us by Phone"
                >
                  <Phone className="w-3.5 h-3.5 text-[#21403D] group-hover:text-[#B78C72] group-hover:scale-110 transition-all duration-200" />
                  <span className="font-semibold text-[#1B211F] group-hover:text-[#21403D] underline decoration-[#B78C72] group-hover:decoration-[#21403D] underline-offset-4 transition-colors">
                    CONTACT US
                  </span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT 45% (col-span-8 to col-span-12): Photographic Frame */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Photographic Frame with measure-to-reveal expand */}
            <div
              className={`relative overflow-hidden bg-[#D9DEDA] transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                loadStage >= 2 ? 'w-full opacity-100' : 'w-[92%] opacity-85'
              }`}
              style={{
                aspectRatio: '3/4',
                maxHeight: '620px',
              }}
            >
              {/* Measurement Corner Marks */}
              <div className="absolute top-3 left-3 z-10 font-mono text-[10px] text-[#FBFAF6] tracking-widest bg-[#1B211F]/70 px-2 py-0.5">
                SEC.00 / REF: UNDER-SINK
              </div>
              <div className="absolute bottom-3 right-3 z-10 font-mono text-[10px] text-[#FBFAF6] tracking-widest bg-[#1B211F]/70 px-2 py-0.5">
                HIALEAH RESIDENTIAL
              </div>

              {/* Realistic Technician Image */}
              <img
                src={APP_IMAGES.heroTechnician}
                alt="Plumbing technician meticulously adjusting under-sink plumbing fixture in a clean residential home"
                fetchPriority="high"
                decoding="async"
                className={`w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  loadStage >= 2 ? 'scale-100 opacity-100' : 'scale-[1.03] opacity-90'
                }`}
                referrerPolicy="no-referrer"
              />

              {/* Soft hairline perimeter */}
              <div className="absolute inset-0 pointer-events-none border border-[#1B211F]/10" />
            </div>

            {/* Subtle caption offset underneath image */}
            <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-[#929792]">
              <span>CALIBRATED WORK AREA</span>
              <span>100% CLEAN TURNOVER</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
