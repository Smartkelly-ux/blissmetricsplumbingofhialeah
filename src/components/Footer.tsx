import { useEffect, useRef, useState } from 'react';
import { Phone } from 'lucide-react';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [footerStage, setFooterStage] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Editorial Line Reveal Sequence
          // 1. Fine line draws across
          setFooterStage(1);
          // 2. Company name appears
          const t2 = setTimeout(() => setFooterStage(2), 200);
          // 3. Contact appears
          const t3 = setTimeout(() => setFooterStage(3), 350);
          // 4. Navigation appears
          const t4 = setTimeout(() => setFooterStage(4), 500);
          // 5. Bottom metadata appears last
          const t5 = setTimeout(() => setFooterStage(5), 650);

          return () => {
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
            clearTimeout(t5);
          };
        }
      },
      { threshold: 0.15 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#1B211F] text-[#FBFAF6] pt-12 pb-16 overflow-hidden"
    >
      {/* 1. Fine Warm Mineral Line Draws Across Above Content */}
      <div className="w-full px-5 md:px-10 lg:px-14 mb-12">
        <div className="w-full h-[1px] bg-[#4A514E]/40 relative">
          <div
            className="absolute top-0 left-0 h-full bg-[#B78C72] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              width: footerStage >= 1 ? '100%' : '0%',
            }}
          />
        </div>
      </div>

      <div className="w-full px-5 md:px-10 lg:px-14">
        
        {/* Editorial Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#4A514E]/40">
          
          {/* 2. Company Name (col-span-1 to col-span-5 / 45%) */}
          <div
            className={`md:col-span-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              footerStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#FBFAF6] leading-tight">
              BLISS METRICS<br />
              PLUMBING<br />
              OF HIALEAH
            </h3>
            <p className="mt-4 font-mono text-xs text-[#929792] max-w-sm leading-relaxed">
              Precision plumbing diagnosis, maintenance, emergency repairs, and verified fixture installations for homes and commercial establishments in Hialeah, Florida.
            </p>
          </div>

          {/* 4. Navigation (Center, col-span-3) */}
          <div
            className={`md:col-span-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              footerStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#B78C72] block mb-4">
              INDEX
            </span>
            <ul className="space-y-3 font-mono text-xs tracking-wider text-[#D9DEDA]">
              <li>
                <a href="#services" className="hover:text-[#FBFAF6] hover:scale-[1.02] hover:translate-x-1.5 active:scale-[0.99] transition-all duration-200 inline-block">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#FBFAF6] hover:scale-[1.02] hover:translate-x-1.5 active:scale-[0.99] transition-all duration-200 inline-block">
                  PROCESS
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FBFAF6] hover:scale-[1.02] hover:translate-x-1.5 active:scale-[0.99] transition-all duration-200 inline-block">
                  CONTACT
                </a>
              </li>
              <li>
                <a href="#request-service" className="hover:text-[#FBFAF6] hover:scale-[1.02] hover:translate-x-1.5 active:scale-[0.99] transition-all duration-200 inline-block">
                  REQUEST INTAKE
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Contact (Right, col-span-4) */}
          <div
            className={`md:col-span-4 flex flex-col justify-start md:items-end text-left md:text-right transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              footerStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#B78C72] block mb-4">
              HIALEAH LOCATION
            </span>
            <address className="not-italic font-mono text-xs text-[#D9DEDA] leading-relaxed">
              1036 W 49TH ST #527<br />
              HIALEAH, FL 33012
            </address>
            <a
              href="tel:7866559549"
              className="mt-4 text-xl font-bold tracking-tight text-[#FBFAF6] hover:text-[#B78C72] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 inline-flex items-center gap-2 group"
              aria-label="Contact Us by Phone"
            >
              <Phone className="w-4 h-4 text-[#B78C72] group-hover:scale-110 transition-transform duration-200" />
              <span>CONTACT US</span>
            </a>
            <span className="font-mono text-[10px] text-[#929792] mt-1">
              DISPATCH AVAILABLE 24/7
            </span>
          </div>

        </div>

        {/* 5. Bottom Metadata Appears Last */}
        <div
          className={`pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-[#929792] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            footerStage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B78C72]" />
            <span className="text-[#D9DEDA] uppercase">OPEN 24 HOURS</span>
          </div>

          <div>
            <span>© 2026 BLISS METRICS PLUMBING OF HIALEAH</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
