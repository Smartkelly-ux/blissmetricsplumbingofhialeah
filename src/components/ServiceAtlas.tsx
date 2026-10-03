import { useState } from 'react';
import { ChevronDown, ArrowRight, Phone } from 'lucide-react';
import { APP_IMAGES } from '../assets/images.ts';
import { EditorialImage } from './EditorialImage.tsx';

interface ServiceItem {
  id: string;
  name: string;
  sizeClass: string;
  category: string;
  detail: string;
  previewImage: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'leaks',
    name: 'LEAKS',
    sizeClass: 'text-[36px] sm:text-[44px] lg:text-[54px]',
    category: 'DIAGNOSTIC & REPAIR',
    detail: 'Pinpointing pressurized water line seepage, pinhole copper corrosion, and concealed slab leaks before structural moisture spreads.',
    previewImage: APP_IMAGES.unknownGauge,
  },
  {
    id: 'clogs',
    name: 'CLOGS',
    sizeClass: 'text-[24px] sm:text-[30px] lg:text-[34px]',
    category: 'DRAIN & MAIN LINE',
    detail: 'Clearing persistent kitchen sink backups, bathroom drains, and main line obstructions with calibrated mechanical snakes.',
    previewImage: APP_IMAGES.heroTechnician,
  },
  {
    id: 'toilets',
    name: 'TOILETS',
    sizeClass: 'text-[38px] sm:text-[48px] lg:text-[58px]',
    category: 'FIXTURE & SEAL',
    detail: 'Resolving ghost-flushing, damaged wax rings, weak flush siphon valves, and floor flange stability.',
    previewImage: APP_IMAGES.repairFullwidth,
  },
  {
    id: 'faucets',
    name: 'FAUCETS',
    sizeClass: 'text-[26px] sm:text-[32px] lg:text-[38px]',
    category: 'PRECISION HARDWARE',
    detail: 'Cartridge replacements, pull-down hose alignment, aerator rebuilding, and complete kitchen faucet installations with thorough testing.',
    previewImage: APP_IMAGES.installationFixture,
  },
  {
    id: 'water-heaters',
    name: 'WATER HEATERS',
    sizeClass: 'text-[34px] sm:text-[42px] lg:text-[50px]',
    category: 'SYSTEM & THERMAL',
    detail: 'Diagnosing thermal relief valve drips, sediment buildup, heating elements, and residential tank maintenance.',
    previewImage: APP_IMAGES.unknownGauge,
  },
  {
    id: 'repairs',
    name: 'REPAIRS',
    sizeClass: 'text-[22px] sm:text-[26px] lg:text-[30px]',
    category: 'COMPONENT RESTORATION',
    detail: 'Replacing rusted angle stops, faulty P-traps, loose copper brackets, and noisy water hammer pipes.',
    previewImage: APP_IMAGES.heroTechnician,
  },
  {
    id: 'installations',
    name: 'INSTALLATIONS',
    sizeClass: 'text-[36px] sm:text-[46px] lg:text-[56px]',
    category: 'FULL CONFIGURATION',
    detail: 'Properly mounted fixtures, clean supply connections, garbage disposal integrations, and complete residential system replacements.',
    previewImage: APP_IMAGES.installationFixture,
  },
  {
    id: 'emergency-service',
    name: 'EMERGENCY SERVICE',
    sizeClass: 'text-[28px] sm:text-[34px] lg:text-[40px]',
    category: '24-HOUR AVAILABILITY',
    detail: 'Immediate phone triage and urgent on-site response for sudden bursts, overflowing fixtures, and catastrophic line failures in Hialeah.',
    previewImage: APP_IMAGES.repairFullwidth,
  },
];

export function ServiceAtlas() {
  const [activeDesktopId, setActiveDesktopId] = useState<string>('leaks');
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>('leaks');

  const activeService = SERVICES.find((s) => s.id === activeDesktopId) || SERVICES[0];

  const toggleMobile = (id: string) => {
    setExpandedMobileId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="services"
      className="relative w-full border-t border-[#D9DEDA] py-20 md:py-28 bg-[#F4F3EE]"
    >
      <div className="w-full px-5 md:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#D9DEDA] pb-4 mb-10 md:mb-14">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#4A514E]">
              WHAT WE HANDLE
            </span>
            <span className="h-[1px] w-6 bg-[#B78C72]" />
            <span className="font-mono text-[11px] text-[#929792] hidden md:inline">
              EDITORIAL SERVICE ATLAS
            </span>
          </div>
          <div className="font-mono text-[11px] text-[#4A514E] mt-2 sm:mt-0">
            RESIDENTIAL & COMMERCIAL · HIALEAH
          </div>
        </div>

        {/* DESKTOP ATLAS (>1024px) */}
        <div className="hidden lg:block">
          {/* Editorial Index Cloud / Horizontal Plane */}
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-6 pb-12">
            {SERVICES.map((service) => {
              const isActive = activeDesktopId === service.id;
              return (
                <div
                  key={service.id}
                  className="relative group cursor-pointer hover:-translate-y-1 transition-transform duration-200"
                  onMouseEnter={() => setActiveDesktopId(service.id)}
                  onClick={() => setActiveDesktopId(service.id)}
                >
                  {/* Tiny horizontal line above selected service */}
                  <div
                    className={`absolute -top-3 left-0 right-0 h-[2px] transition-all duration-300 ${
                      isActive ? 'bg-[#21403D] opacity-100 scale-x-100' : 'bg-transparent opacity-0 scale-x-0'
                    }`}
                  />

                  {/* Label */}
                  <span
                    className={`block font-bold tracking-tight select-none transition-colors duration-200 ${
                      service.sizeClass
                    } ${
                      isActive
                        ? 'text-[#21403D]'
                        : 'text-[#1B211F]/75 group-hover:text-[#21403D]'
                    }`}
                  >
                    {service.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Anchored Preview Image & Details BELOW the selected label */}
          <div className="mt-8 pt-8 border-t border-[#D9DEDA] grid grid-cols-12 gap-8 items-center min-h-[220px]">
            {/* Left 4 Cols: Anchored small image with 4-8px calm motion */}
            <div className="col-span-4">
              <div className="w-full border border-[#D9DEDA] shadow-xs">
                <EditorialImage
                  key={activeService.id}
                  src={activeService.previewImage}
                  alt={`${activeService.name} service preview`}
                  aspectRatio="16/10"
                  caption={`ATLAS // ${activeService.id.toUpperCase()}`}
                />
              </div>
            </div>

            {/* Middle 5 Cols: Detail explanation */}
            <div className="col-span-5 pl-4">
              <div className="font-mono text-xs text-[#B78C72] uppercase tracking-widest mb-1.5">
                {activeService.category}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#1B211F] mb-3">
                {activeService.name}
              </h3>
              <p className="text-base text-[#4A514E] leading-relaxed">
                {activeService.detail}
              </p>
            </div>

            {/* Right 3 Cols: Direct action */}
            <div className="col-span-3 flex flex-col items-end justify-center border-l border-[#D9DEDA] pl-6">
              <a
                href="#request-service"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-[#1B211F] hover:text-[#21403D] hover:scale-[1.02] active:scale-[0.99] uppercase group transition-all duration-200"
              >
                <span>REQUEST THIS REPAIR</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B78C72] group-hover:translate-x-1.5 group-hover:text-[#21403D] transition-transform duration-200" />
              </a>
              <a
                href="tel:7866559549"
                className="group flex items-center gap-1.5 font-mono text-xs text-[#4A514E] hover:text-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 mt-3.5"
                aria-label="Contact Us by Phone"
              >
                <Phone className="w-3 h-3 text-[#21403D] group-hover:text-[#B78C72] group-hover:scale-110 transition-all duration-200" />
                <span className="font-semibold underline decoration-[#B78C72] underline-offset-4 group-hover:decoration-[#21403D] transition-colors">
                  CONTACT US
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET ACCORDION (<= 1024px) */}
        <div className="lg:hidden divide-y divide-[#D9DEDA] border-b border-[#D9DEDA]">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedMobileId === service.id;
            return (
              <div key={service.id} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleMobile(service.id)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between text-left group min-h-[44px] hover:scale-[1.02] active:scale-[0.99] hover:translate-x-1 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] text-[#929792] tabular-nums group-hover:text-[#21403D] transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-bold tracking-tight transition-colors text-xl sm:text-2xl ${
                        isExpanded ? 'text-[#21403D]' : 'text-[#1B211F] group-hover:text-[#21403D]'
                      }`}
                    >
                      {service.name}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4A514E] group-hover:text-[#21403D] transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-[#21403D]' : ''
                    }`}
                  />
                </button>

                {/* Collapsible Panel */}
                {isExpanded && (
                  <div className="pt-4 pb-2 space-y-4 animate-in fade-in duration-200">
                    <div className="font-mono text-[11px] text-[#B78C72] uppercase tracking-wider">
                      {service.category}
                    </div>
                    <p className="text-[15px] text-[#4A514E] leading-relaxed">
                      {service.detail}
                    </p>
                    <div className="w-full border border-[#D9DEDA]">
                      <EditorialImage
                        src={service.previewImage}
                        alt={`${service.name} service preview`}
                        aspectRatio="16/10"
                      />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <a
                        href="#request-service"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#21403D] uppercase hover:scale-[1.02] active:scale-[0.99] hover:translate-x-1 transition-all duration-200 group"
                      >
                        <span>BOOK SERVICE</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#B78C72] group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                      <a
                        href="tel:7866559549"
                        className="group inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#1B211F] hover:text-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
                        aria-label="Contact Us by Phone"
                      >
                        <Phone className="w-3 h-3 text-[#21403D] group-hover:text-[#B78C72] group-hover:scale-110 transition-all duration-200" />
                        <span>CONTACT US</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
