import { useEffect, useRef, useState } from 'react';
import { Phone, AlertCircle } from 'lucide-react';

export function SectionEmergency() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scaleIn, setScaleIn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScaleIn(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#21403D] text-[#FBFAF6] py-16 md:py-24 overflow-hidden"
    >
      <div className="w-full px-5 md:px-10 lg:px-14">
        
        {/* Compact Emergency Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center justify-between">
          
          {/* Left: Slow Type Expansion on "WHEN IT CAN'T WAIT." */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-4 h-4 text-[#B78C72]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B78C72]">
                07 / 24-HOUR AVAILABILITY
              </span>
            </div>

            <h2
              className="text-[26px] xs:text-[30px] sm:text-4xl md:text-5xl lg:text-[58px] font-bold leading-[1.04] sm:leading-[0.98] tracking-tight uppercase transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] select-none origin-left break-words"
              style={{
                transform: scaleIn ? 'scale(1)' : 'scale(0.97)',
              }}
            >
              WHEN IT<br />
              CAN'T WAIT.
            </h2>
          </div>

          {/* Right: Call CTA */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center lg:border-l lg:border-[#FBFAF6]/20 lg:pl-10 mt-6 lg:mt-0">
            <a
              href="tel:7866559549"
              className="group flex items-center gap-2 sm:gap-3 text-xl xs:text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#FBFAF6] hover:text-[#B78C72] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 tracking-tight underline decoration-[#B78C72] decoration-2 underline-offset-8 inline-flex break-words"
              aria-label="Contact Us by Phone"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#B78C72] group-hover:scale-110 transition-transform duration-200 shrink-0" />
              <span>CONTACT US</span>
            </a>

            <div className="mt-4 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#B78C72] animate-pulse" />
              <p className="font-mono text-xs text-[#FBFAF6]/80 tracking-wide uppercase">
                Emergency plumbing support.
              </p>
            </div>
            
            <p className="font-mono text-[11px] text-[#FBFAF6]/50 mt-1">
              Active line open 24 hours across Hialeah, FL
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
