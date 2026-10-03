import { Phone } from 'lucide-react';

export function SectionFinalCta() {
  return (
    <section className="relative w-full border-t border-[#D9DEDA] py-24 md:py-36 bg-[#FBFAF6] overflow-hidden">
      <div className="w-full px-5 md:px-10 lg:px-14">
        
        {/* Off-Center 12-Column Grid (Not Centered) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          
          {/* Headline positioned toward the LEFT (col-span-1 to col-span-7) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B78C72]">
                10 / CONCLUSION
              </span>
              <span className="h-[1px] w-6 bg-[#B78C72]" />
            </div>

            <h2 className="text-[30px] xs:text-[36px] sm:text-5xl lg:text-[70px] font-bold text-[#1B211F] leading-[0.98] sm:leading-[0.94] tracking-tight uppercase break-words">
              WHEN YOU<br />
              NEED TO<br />
              KNOW.
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#4A514E] max-w-md">
              Clear diagnosis, accurate mechanical repairs, and clean residential turnovers across Hialeah.
            </p>
          </div>

          {/* Right Side (col-span-8 to col-span-12) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-end">
            <a
              href="tel:7866559549"
              className="group flex items-center gap-2.5 sm:gap-3 text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1B211F] hover:text-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 tracking-tight underline decoration-[#B78C72] decoration-2 underline-offset-8 inline-flex break-words"
              aria-label="Contact Us by Phone"
            >
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#21403D] group-hover:text-[#B78C72] group-hover:scale-110 transition-all duration-200 shrink-0" />
              <span>CONTACT US</span>
            </a>

            <div className="mt-5 flex items-center gap-2 font-mono text-xs text-[#4A514E]">
              <span>Direct Dispatch</span>
              <span className="text-[#D9DEDA]">/</span>
              <span className="text-[#929792]">Hialeah / Florida</span>
            </div>

            <div className="mt-8">
              <a
                href="#request-service"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#21403D] text-[#FBFAF6] text-xs font-mono font-medium uppercase tracking-wider rounded-full hover:bg-[#1B211F] hover:text-[#FBFAF6] hover:scale-[1.02] hover:shadow-md active:scale-[0.99] transition-all duration-200 min-h-[44px]"
              >
                REQUEST ONLINE INTAKE
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
