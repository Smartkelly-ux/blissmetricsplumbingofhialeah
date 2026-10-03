import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F4F3EE]/85 backdrop-blur-md border-b border-[#D9DEDA]/70 py-3.5 shadow-[0_2px_12px_rgba(27,33,31,0.03)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-5 md:px-10 lg:px-14 flex items-center justify-between">
          {/* Brand Mark - Anchored Top-Left */}
          <a
            href="#"
            className="group flex flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
            aria-label="Bliss Metrics Plumbing of Hialeah Home"
          >
            <span className="font-sans text-base md:text-lg font-semibold tracking-[-0.03em] text-[#1B211F] group-hover:text-[#21403D] transition-colors leading-none">
              BLISS METRICS
            </span>
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#4A514E] mt-1 leading-none group-hover:text-[#B78C72] transition-colors">
              PLUMBING
            </span>
          </a>

          {/* Desktop Navigation Links (>1024px) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-8 text-[13px] font-mono tracking-wider text-[#4A514E]"
          >
            <a
              href="#services"
              className="hover:text-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#21403D] hover:after:w-full after:transition-all"
            >
              SERVICES
            </a>
            <a
              href="#process"
              className="hover:text-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#21403D] hover:after:w-full after:transition-all"
            >
              HOW IT WORKS
            </a>
            <a
              href="#contact"
              className="hover:text-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#21403D] hover:after:w-full after:transition-all"
            >
              CONTACT
            </a>

            {/* Desktop Call CTA: Only Call Icon and CONTACT US Text */}
            <a
              href="tel:7866559549"
              className="flex items-center gap-2 pl-4 text-xs font-mono font-medium tracking-normal text-[#1B211F] hover:text-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 group"
              aria-label="Contact Us by Phone"
            >
              <Phone className="w-3.5 h-3.5 text-[#21403D] group-hover:text-[#B78C72] group-hover:scale-110 transition-all duration-200" />
              <span className="font-semibold underline underline-offset-4 decoration-[#B78C72] group-hover:decoration-[#21403D] transition-colors">
                CONTACT US
              </span>
            </a>
          </nav>

          {/* Tablet + Mobile Header Call Button (<= 1024px) */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:7866559549"
              className="group flex items-center gap-1.5 py-2 px-3.5 text-xs font-mono font-medium text-[#1B211F] border border-[#D9DEDA] rounded-sm hover:border-[#21403D] hover:text-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 shadow-xs"
              aria-label="Contact Us by Phone"
            >
              <Phone className="w-3.5 h-3.5 text-[#21403D] group-hover:text-[#B78C72] group-hover:scale-110 transition-all duration-200" />
              <span>CONTACT US</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label="Open Navigation Menu"
              className="p-2.5 text-[#1B211F] hover:text-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#21403D] min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            >
              <Menu className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Light Slide-In Panel for Tablet & Mobile (<= 1024px) */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop Scrim */}
        <div
          className="absolute inset-0 bg-[#1B211F]/25 backdrop-blur-xs"
          onClick={closeMenu}
        />

        {/* Narrow Light Panel on the Right */}
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile Navigation"
          className={`absolute top-0 right-0 bottom-0 w-[290px] sm:w-[340px] bg-[#F4F3EE] border-l border-[#D9DEDA] p-8 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-8 border-b border-[#D9DEDA]">
              <div className="flex flex-col">
                <span className="font-sans text-sm font-semibold tracking-[-0.02em] text-[#1B211F]">
                  BLISS METRICS
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4A514E]">
                  HIALEAH, FL
                </span>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close Navigation Menu"
                className="p-2 text-[#4A514E] hover:text-[#21403D] hover:scale-[1.02] hover:rotate-90 active:scale-[0.99] transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#21403D] cursor-pointer"
              >
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* Menu Links */}
            <ul className="flex flex-col gap-6 mt-10">
              <li>
                <a
                  href="#services"
                  onClick={closeMenu}
                  className="block text-2xl font-normal tracking-tight text-[#1B211F] hover:text-[#21403D] hover:scale-[1.02] hover:translate-x-1.5 active:scale-[0.99] transition-all duration-200"
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={closeMenu}
                  className="block text-2xl font-normal tracking-tight text-[#1B211F] hover:text-[#21403D] hover:scale-[1.02] hover:translate-x-1.5 active:scale-[0.99] transition-all duration-200"
                >
                  PROCESS
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block text-2xl font-normal tracking-tight text-[#1B211F] hover:text-[#21403D] hover:scale-[1.02] hover:translate-x-1.5 active:scale-[0.99] transition-all duration-200"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Panel Bottom Call Info: Only Call Icon and CONTACT US Text */}
          <div className="pt-8 border-t border-[#D9DEDA] space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#929792]">
              DIRECT LINE
            </div>
            <a
              href="tel:7866559549"
              className="block text-xl font-semibold tracking-tight text-[#1B211F] hover:text-[#21403D] hover:scale-[1.02] hover:translate-x-1 active:scale-[0.99] transition-all duration-200 min-h-[44px] flex items-center gap-2.5 group"
              aria-label="Contact Us by Phone"
            >
              <Phone className="w-4 h-4 text-[#21403D] group-hover:text-[#B78C72] group-hover:scale-110 transition-all duration-200" />
              <span>CONTACT US</span>
            </a>
            <p className="font-mono text-[11px] text-[#4A514E] tracking-tight">
              OPEN 24 HOURS · HIALEAH, FL
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
