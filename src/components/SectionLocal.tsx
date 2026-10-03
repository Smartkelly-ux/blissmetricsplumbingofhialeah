import { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';

export function SectionLocal() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineDrawn, setLineDrawn] = useState(false);
  const [addressVisible, setAddressVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineDrawn(true);
          const timer = setTimeout(() => {
            setAddressVisible(true);
          }, 350);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=1036+W+49th+St+%23527,+Hialeah,+FL+33012';

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full border-t border-[#D9DEDA] py-20 md:py-32 bg-[#F4F3EE] overflow-hidden"
    >
      <div className="w-full px-5 md:px-10 lg:px-14">
        
        {/* LINE DRAW MOTION: Thin horizontal rule grows left to right */}
        <div className="w-full h-[1px] bg-[#D9DEDA] relative mb-12 md:mb-16">
          <div
            className="absolute top-0 left-0 h-full bg-[#B78C72] transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              width: lineDrawn ? '100%' : '0%',
            }}
          />
        </div>

        {/* Large Horizontal Location Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT (col-span-1 to col-span-6): Brand Name */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B78C72] block mb-4">
              09 / LOCAL BASE
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#1B211F] leading-[0.98] tracking-tight uppercase">
              BLISS METRICS<br />
              PLUMBING<br />
              OF HIALEAH
            </h2>

            <div className="mt-6 flex items-center gap-3 font-mono text-xs text-[#4A514E]">
              <Clock className="w-3.5 h-3.5 text-[#21403D]" />
              <span className="font-semibold text-[#21403D]">OPEN 24 HOURS</span>
              <span className="text-[#D9DEDA]">/</span>
              <span>LOCAL DISPATCH</span>
            </div>
          </div>

          {/* RIGHT (col-span-7 to col-span-12): Address appears after line draw */}
          <div
            className={`lg:col-span-6 flex flex-col justify-start lg:pl-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              addressVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#21403D] mt-1 shrink-0" />
              <div>
                <p className="text-xl sm:text-2xl font-semibold text-[#1B211F] tracking-tight">
                  1036 W 49th St #527
                </p>
                <p className="text-lg text-[#4A514E] mt-0.5">
                  Hialeah, FL 33012
                </p>
                <p className="font-mono text-[11px] text-[#929792] uppercase mt-2">
                  Serving residential and commercial properties throughout Hialeah
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="tel:7866559549"
                className="group inline-flex items-center gap-2.5 text-2xl font-bold text-[#1B211F] hover:text-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 tracking-tight underline decoration-[#B78C72] underline-offset-4"
                aria-label="Contact Us by Phone"
              >
                <Phone className="w-5 h-5 text-[#21403D] group-hover:text-[#B78C72] group-hover:scale-110 transition-all duration-200" />
                <span>CONTACT US</span>
              </a>
              <span className="block font-mono text-[10px] text-[#929792] uppercase mt-1">
                24/7 Telephone line
              </span>
            </div>

            {/* GET DIRECTIONS CTA */}
            <div className="mt-10">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-[#1B211F] text-[#1B211F] text-xs font-mono font-medium tracking-wider uppercase rounded-full hover:bg-[#1B211F] hover:text-[#FBFAF6] hover:scale-[1.02] hover:shadow-xs active:scale-[0.99] transition-all duration-200 min-h-[44px]"
              >
                <span>GET DIRECTIONS</span>
                <Navigation className="w-3.5 h-3.5 text-[#B78C72] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FBFAF6] transition-all duration-200" />
              </a>
              <span className="block font-mono text-[10px] text-[#929792] mt-2">
                Opens Google Maps location
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
