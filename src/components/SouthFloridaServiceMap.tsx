import { useState } from 'react';
import { MapPin, Navigation, CheckCircle2, Phone, Compass } from 'lucide-react';

interface CountyData {
  id: string;
  name: string;
  tier: string;
  dispatchTime: string;
  hub: string;
  cities: string[];
  latRange: string;
  coverage: string;
  color: string;
}

const COUNTIES: CountyData[] = [
  {
    id: 'miami-dade',
    name: 'MIAMI-DADE COUNTY',
    tier: 'PRIMARY HUB · IMMEDIATE DISPATCH',
    dispatchTime: '24/7 Rapid Local Response',
    hub: 'Hialeah Base (1036 W 49th St)',
    cities: [
      'Hialeah',
      'Miami',
      'Miami Lakes',
      'Doral',
      'Miami Beach',
      'Coral Gables',
      'Aventura',
      'Kendall',
      'Homestead',
    ],
    latRange: '25.40° N — 25.97° N',
    coverage: 'Complete residential & commercial emergency service, leak detection, and installations.',
    color: '#21403D',
  },
  {
    id: 'broward',
    name: 'BROWARD COUNTY',
    tier: 'METRO CORRIDOR · DIRECT SERVICE',
    dispatchTime: 'Continuous Daily Route',
    hub: 'South/Central Broward Gateway',
    cities: [
      'Hollywood',
      'Pembroke Pines',
      'Miramar',
      'Fort Lauderdale',
      'Hallandale Beach',
      'Davie',
      'Pompano Beach',
      'Coral Springs',
    ],
    latRange: '25.97° N — 26.33° N',
    coverage: 'Full plumbing maintenance, fixture replacements, water heater repairs, and line clearings.',
    color: '#B78C72',
  },
  {
    id: 'palm-beach',
    name: 'PALM BEACH COUNTY',
    tier: 'NORTHERN SERVICE ZONE',
    dispatchTime: 'Scheduled & Priority Intake',
    hub: 'I-95 / Turnpike Service Corridor',
    cities: [
      'Boca Raton',
      'Delray Beach',
      'Boynton Beach',
      'Lake Worth',
      'West Palm Beach',
      'Palm Beach Gardens',
      'Jupiter',
    ],
    latRange: '26.33° N — 26.98° N',
    coverage: 'Major system repairs, fixture overhauls, comprehensive diagnostics, and whole-home testing.',
    color: '#4A514E',
  },
];

export function SouthFloridaServiceMap() {
  const [activeCountyId, setActiveCountyId] = useState<string>('miami-dade');
  const activeCounty = COUNTIES.find((c) => c.id === activeCountyId) || COUNTIES[0];

  return (
    <div className="mt-16 md:mt-24 pt-12 border-t border-[#D9DEDA]">
      {/* Sub-Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#21403D]" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#B78C72]">
              TRI-COUNTY SERVICE COVERAGE
            </span>
          </div>
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#1B211F] uppercase break-words leading-tight">
            SOUTH FLORIDA JURISDICTIONS
          </h3>
        </div>

        <p className="font-mono text-[11px] sm:text-xs text-[#4A514E] max-w-sm">
          Precision residential and commercial service dispatch spanning Miami-Dade, Broward, and Palm Beach counties.
        </p>
      </div>

      {/* Main Grid: Interactive Map (Col 7) + Regional Data Panel (Col 5) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
        
        {/* LEFT (Col 1 to 7): Stylized CSS Grid Overlay Cartographic Map */}
        <div className="lg:col-span-7 bg-[#FBFAF6] border border-[#D9DEDA] p-4 sm:p-6 md:p-7 relative overflow-hidden shadow-xs">
          
          {/* Top Coordinate Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-1 pb-3 border-b border-[#D9DEDA]/70 font-mono text-[9px] sm:text-[10px] text-[#929792] uppercase">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#21403D]" />
              BASE: HIALEAH HQ (25.8576° N, 80.2781° W)
            </span>
            <span className="hidden sm:inline">CORRIDOR: I-95 / US-1 / FL-826</span>
          </div>

          {/* Interactive County Selector Buttons */}
          <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
            {COUNTIES.map((county) => {
              const isSelected = activeCountyId === county.id;
              return (
                <button
                  key={county.id}
                  type="button"
                  onClick={() => setActiveCountyId(county.id)}
                  className={`px-2.5 sm:px-3 py-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.99] ${
                    isSelected
                      ? 'bg-[#21403D] text-[#FBFAF6] shadow-xs font-semibold'
                      : 'bg-[#F4F3EE] text-[#4A514E] hover:text-[#1B211F] hover:bg-[#D9DEDA]/60 border border-[#D9DEDA]'
                  }`}
                >
                  {county.name.replace(' COUNTY', '')}
                </button>
              );
            })}
          </div>

          {/* Stylized Visual Map with CSS Grid Overlays */}
          <div className="relative mt-6 aspect-[4/3] sm:aspect-[16/10] w-full bg-[#F4F3EE] border border-[#D9DEDA] overflow-hidden select-none">
            
            {/* CSS Cartographic Grid Background Lines */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #D9DEDA 1px, transparent 1px),
                  linear-gradient(to bottom, #D9DEDA 1px, transparent 1px)
                `,
                backgroundSize: '36px 36px',
              }}
            />

            {/* Latitude Tick Annotations along Left Edge - Desktop & Tablet */}
            <div className="hidden sm:flex absolute left-2 top-3 font-mono text-[9px] text-[#929792] flex-col justify-between h-[88%] pointer-events-none z-10">
              <span>26.98° N · JUPITER</span>
              <span>26.40° N · BOCA RATON</span>
              <span>26.12° N · FT. LAUDERDALE</span>
              <span>25.86° N · HIALEAH HQ</span>
              <span>25.40° N · HOMESTEAD</span>
            </div>

            {/* Latitude Tick Annotations along Left Edge - Mobile (Compact coordinates) */}
            <div className="sm:hidden absolute left-1.5 top-2 font-mono text-[8px] text-[#929792] flex flex-col justify-between h-[86%] pointer-events-none z-10">
              <span>26.98° N</span>
              <span>26.40° N</span>
              <span>26.12° N</span>
              <span>25.86° N HQ</span>
              <span>25.40° N</span>
            </div>

            {/* SVG Visualizing the 3 Contiguous County Zones & Atlantic Coastline */}
            <svg
              viewBox="0 0 500 320"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
              aria-label="Map of South Florida Service Area"
            >
              <defs>
                <pattern id="gridPattern" width="16" height="16" patternUnits="userSpaceOnUse">
                  <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#D9DEDA" strokeWidth="0.5" />
                </pattern>
              </defs>

              {/* Ocean Area Graphic Fill on the East */}
              <path
                d="M 390 0 L 500 0 L 500 320 L 320 320 Q 345 220 375 140 Q 385 60 390 0 Z"
                fill="#21403D"
                fillOpacity="0.04"
              />
              <text x="430" y="160" fill="#929792" fontSize="9" fontFamily="monospace" letterSpacing="0.2em">
                ATLANTIC
              </text>

              {/* PALM BEACH COUNTY ZONE (North) */}
              <g
                className="cursor-pointer transition-opacity duration-300"
                onClick={() => setActiveCountyId('palm-beach')}
              >
                <polygon
                  points="140,10 390,10 375,100 130,100"
                  fill={activeCountyId === 'palm-beach' ? '#4A514E' : '#FBFAF6'}
                  fillOpacity={activeCountyId === 'palm-beach' ? '0.22' : '0.7'}
                  stroke={activeCountyId === 'palm-beach' ? '#21403D' : '#D9DEDA'}
                  strokeWidth={activeCountyId === 'palm-beach' ? '2' : '1'}
                />
                <text
                  x="230"
                  y="55"
                  fill="#1B211F"
                  fontSize="11"
                  fontWeight="600"
                  fontFamily="sans-serif"
                  letterSpacing="0.05em"
                >
                  PALM BEACH
                </text>
                <circle cx="360" cy="85" r="3" fill="#B78C72" />
                <text x="368" y="88" fill="#4A514E" fontSize="9" fontFamily="monospace">
                  BOCA RATON
                </text>
              </g>

              {/* BROWARD COUNTY ZONE (Central) */}
              <g
                className="cursor-pointer transition-opacity duration-300"
                onClick={() => setActiveCountyId('broward')}
              >
                <polygon
                  points="130,105 374,105 352,190 120,190"
                  fill={activeCountyId === 'broward' ? '#B78C72' : '#FBFAF6'}
                  fillOpacity={activeCountyId === 'broward' ? '0.25' : '0.7'}
                  stroke={activeCountyId === 'broward' ? '#B78C72' : '#D9DEDA'}
                  strokeWidth={activeCountyId === 'broward' ? '2' : '1'}
                />
                <text
                  x="235"
                  y="145"
                  fill="#1B211F"
                  fontSize="11"
                  fontWeight="600"
                  fontFamily="sans-serif"
                  letterSpacing="0.05em"
                >
                  BROWARD
                </text>
                <circle cx="340" cy="155" r="3.5" fill="#21403D" />
                <text x="250" y="172" fill="#4A514E" fontSize="9" fontFamily="monospace">
                  FT. LAUDERDALE · PEMBROKE PINES
                </text>
              </g>

              {/* MIAMI-DADE COUNTY ZONE (South & Base) */}
              <g
                className="cursor-pointer transition-opacity duration-300"
                onClick={() => setActiveCountyId('miami-dade')}
              >
                <polygon
                  points="120,195 351,195 320,310 110,310"
                  fill={activeCountyId === 'miami-dade' ? '#21403D' : '#FBFAF6'}
                  fillOpacity={activeCountyId === 'miami-dade' ? '0.24' : '0.7'}
                  stroke={activeCountyId === 'miami-dade' ? '#21403D' : '#D9DEDA'}
                  strokeWidth={activeCountyId === 'miami-dade' ? '2.5' : '1'}
                />
                <text
                  x="225"
                  y="245"
                  fill="#1B211F"
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="sans-serif"
                  letterSpacing="0.05em"
                >
                  MIAMI-DADE
                </text>

                {/* HIALEAH HQ MARKER PIN */}
                <g>
                  {/* Radar pulse ring */}
                  <circle cx="295" cy="225" r="12" fill="#B78C72" fillOpacity="0.25" className="animate-ping" />
                  <circle cx="295" cy="225" r="5" fill="#21403D" stroke="#FBFAF6" strokeWidth="2" />
                  <rect x="290" y="202" width="70" height="15" rx="2" fill="#1B211F" />
                  <text x="294" y="213" fill="#FBFAF6" fontSize="8.5" fontFamily="monospace" fontWeight="600">
                    ★ HIALEAH HQ
                  </text>
                </g>

                <circle cx="310" cy="265" r="3" fill="#4A514E" />
                <text x="318" y="268" fill="#4A514E" fontSize="8.5" fontFamily="monospace">
                  MIAMI · CORAL GABLES
                </text>
              </g>

              {/* Corridor Highway Transit เส้นทางหลัก */}
              <line x1="365" y1="10" x2="295" y2="225" stroke="#B78C72" strokeWidth="1.5" strokeDasharray="3,3" />
              <line x1="295" y1="225" x2="260" y2="310" stroke="#B78C72" strokeWidth="1.5" strokeDasharray="3,3" />
            </svg>

            {/* Bottom Overlay Legend */}
            <div className="absolute bottom-2 right-2 bg-[#FBFAF6]/90 backdrop-blur-xs border border-[#D9DEDA] px-3 py-1.5 font-mono text-[9px] text-[#4A514E] flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#21403D]" />
                HQ & Primary
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#B78C72]" />
                Daily Transit
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT (Col 8 to 12): Dedicated Regional Jurisdiction Details */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#FBFAF6] border border-[#D9DEDA] p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#D9DEDA]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#B78C72]">
                SELECTED JURISDICTION
              </span>
              <span className="font-mono text-[11px] text-[#21403D] font-semibold">
                ACTIVE DISPATCH
              </span>
            </div>

            <div className="mt-3 sm:mt-4">
              <h4 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1B211F] break-words">
                {activeCounty.name}
              </h4>
              <p className="font-mono text-[11px] sm:text-xs text-[#21403D] uppercase tracking-wider mt-1 font-semibold">
                {activeCounty.tier}
              </p>
            </div>

            <div className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4">
              <div>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#929792] block mb-1">
                  DISPATCH BASE & ROUTE
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#1B211F] flex items-center gap-1.5 sm:gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B78C72] shrink-0" />
                  <span className="break-words">{activeCounty.hub}</span>
                </p>
                <p className="font-mono text-[10px] sm:text-xs text-[#4A514E] mt-0.5">
                  Coordinate Span: {activeCounty.latRange}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#929792] block mb-1.5">
                  KEY MUNICIPALITIES SERVED
                </span>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {activeCounty.cities.map((city) => (
                    <span
                      key={city}
                      className="px-2 py-0.5 font-mono text-[10px] sm:text-[11px] bg-[#F4F3EE] text-[#1B211F] border border-[#D9DEDA]/70 rounded-xs"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#929792] block mb-1">
                  OPERATIONAL SCOPE
                </span>
                <p className="text-xs sm:text-sm text-[#4A514E] leading-relaxed">
                  {activeCounty.coverage}
                </p>
              </div>
            </div>
          </div>

          {/* Direct Service Action for Selected County */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#D9DEDA] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
            <a
              href="#request-service"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#21403D] text-[#FBFAF6] text-xs font-mono uppercase tracking-wider rounded-full hover:bg-[#1B211F] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 min-h-[44px]"
            >
              <span>DISPATCH SERVICE</span>
              <Navigation className="w-3.5 h-3.5 text-[#B78C72]" />
            </a>

            <a
              href="tel:7866559549"
              className="group inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#1B211F] text-[#1B211F] text-xs font-mono uppercase tracking-wider rounded-full hover:text-[#21403D] hover:border-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 min-h-[44px]"
              aria-label="Contact Us by Phone"
            >
              <Phone className="w-3.5 h-3.5 text-[#21403D] group-hover:text-[#B78C72] transition-colors" />
              <span>CONTACT US</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
