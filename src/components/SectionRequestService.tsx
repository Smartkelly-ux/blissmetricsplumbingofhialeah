import { useState, FormEvent } from 'react';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';

export function SectionRequestService() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: '',
    preferredTime: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    // Simple phone validation
    const cleanedPhone = formData.phone.replace(/\D/g, '');
    if (!cleanedPhone || cleanedPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number.';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Please describe the plumbing problem.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real local dispatch recording
    setTimeout(() => {
      const generatedRef = `BM-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketNumber(generatedRef);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      description: '',
      preferredTime: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section
      id="request-service"
      className="relative w-full border-t border-[#D9DEDA] py-20 md:py-32 bg-[#F4F3EE]"
    >
      <div className="w-full px-5 md:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#D9DEDA] pb-4 mb-12 md:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#4A514E]">
              08 / INLINE DISPATCH
            </span>
            <span className="h-[1px] w-6 bg-[#B78C72]" />
            <span className="font-mono text-[11px] text-[#929792] uppercase">
              SERVICE INTAKE
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#4A514E] uppercase">
            NO POPUPS · INLINE ONLY
          </span>
        </div>

        {/* Desktop 45% Left / 55% Right Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT 45% (col-span-1 to col-span-5) */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-[#1B211F] leading-[0.98] tracking-tight uppercase">
              NEED HELP?
            </h2>

            <p className="mt-4 text-lg md:text-xl text-[#4A514E] leading-relaxed">
              Tell us what's happening.
            </p>

            <p className="mt-6 text-sm text-[#4A514E] leading-relaxed max-w-md">
              Whether you are dealing with an active drip, a slow drain, or planning a fixture installation, let us know the issue and our team in Hialeah will follow up immediately.
            </p>

            {/* Direct Phone fallback info */}
            <div className="mt-10 pt-8 border-t border-[#D9DEDA]">
              <span className="font-mono text-[11px] text-[#929792] uppercase tracking-wider block mb-1">
                PREFER TO SPEAK NOW?
              </span>
              <a
                href="tel:7866559549"
                className="text-2xl font-bold text-[#1B211F] hover:text-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 inline-flex items-center gap-2.5 group"
                aria-label="Contact Us by Phone"
              >
                <Phone className="w-5 h-5 text-[#21403D] group-hover:text-[#B78C72] group-hover:scale-110 transition-all duration-200" />
                <span>CONTACT US</span>
              </a>
              <p className="font-mono text-[11px] text-[#4A514E] mt-1">
                Open 24 Hours · Residential & Commercial
              </p>
            </div>
          </div>

          {/* RIGHT 55% (col-span-6 to col-span-12): Bottom-Border Form */}
          <div className="lg:col-span-7">
            {isSuccess ? (
              <div className="bg-[#FBFAF6] border border-[#D9DEDA] p-8 md:p-10 space-y-6">
                <div className="flex items-center gap-3 text-[#21403D]">
                  <CheckCircle2 className="w-7 h-7" />
                  <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                    DISPATCH REQUEST RECEIVED
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1B211F] tracking-tight">
                    Thank you, {formData.name}.
                  </h3>
                  <p className="mt-2 text-sm text-[#4A514E] leading-relaxed">
                    Your service intake reference is{' '}
                    <span className="font-mono font-bold text-[#1B211F] bg-[#F4F3EE] px-2 py-0.5 border border-[#D9DEDA]">
                      {ticketNumber}
                    </span>
                    . We are reviewing your details and our Hialeah dispatcher will reach out to{' '}
                    <span className="font-semibold text-[#1B211F]">{formData.phone}</span> shortly.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D9DEDA] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs font-mono uppercase tracking-wider text-[#21403D] hover:text-[#1B211F] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 cursor-pointer"
                  >
                    ← Submit another request
                  </button>
                  <a
                    href="tel:7866559549"
                    className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#1B211F] hover:text-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 font-semibold"
                    aria-label="Contact Us by Phone"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#21403D] group-hover:text-[#B78C72] group-hover:scale-110 transition-all duration-200" />
                    <span>CONTACT US</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                
                {/* Field 1: NAME (bottom border only) */}
                <div className="relative">
                  <label
                    htmlFor="client-name"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#4A514E] mb-1"
                  >
                    NAME *
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="First and last name"
                    className="w-full bg-transparent border-0 border-b border-[#1B211F]/30 py-3 text-base text-[#1B211F] placeholder:text-[#929792] focus:ring-0 focus:outline-none focus:border-b-2 focus:border-[#B78C72] transition-colors"
                  />
                  {errors.name && (
                    <span className="block font-mono text-[11px] text-red-600 mt-1">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Field 2: PHONE (bottom border only) */}
                <div className="relative">
                  <label
                    htmlFor="client-phone"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#4A514E] mb-1"
                  >
                    PHONE *
                  </label>
                  <input
                    id="client-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="(786) 000-0000"
                    className="w-full bg-transparent border-0 border-b border-[#1B211F]/30 py-3 text-base text-[#1B211F] placeholder:text-[#929792] focus:ring-0 focus:outline-none focus:border-b-2 focus:border-[#B78C72] transition-colors"
                  />
                  {errors.phone && (
                    <span className="block font-mono text-[11px] text-red-600 mt-1">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Field 3: WHAT'S WRONG? (bottom border only) */}
                <div className="relative">
                  <label
                    htmlFor="client-issue"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#4A514E] mb-1"
                  >
                    WHAT'S WRONG? *
                  </label>
                  <textarea
                    id="client-issue"
                    rows={2}
                    value={formData.description}
                    onChange={(e) => {
                      setFormData({ ...formData, description: e.target.value });
                      if (errors.description) setErrors({ ...errors, description: '' });
                    }}
                    placeholder="Describe the leak, clog, fixture or installation needed..."
                    className="w-full bg-transparent border-0 border-b border-[#1B211F]/30 py-3 text-base text-[#1B211F] placeholder:text-[#929792] focus:ring-0 focus:outline-none focus:border-b-2 focus:border-[#B78C72] transition-colors resize-none"
                  />
                  {errors.description && (
                    <span className="block font-mono text-[11px] text-red-600 mt-1">
                      {errors.description}
                    </span>
                  )}
                </div>

                {/* Field 4: PREFERRED TIME (Optional) */}
                <div className="relative">
                  <label
                    htmlFor="client-time"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#4A514E] mb-1"
                  >
                    PREFERRED TIME (OPTIONAL)
                  </label>
                  <input
                    id="client-time"
                    type="text"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    placeholder="e.g. As soon as possible / Today afternoon / Tomorrow morning"
                    className="w-full bg-transparent border-0 border-b border-[#1B211F]/30 py-3 text-base text-[#1B211F] placeholder:text-[#929792] focus:ring-0 focus:outline-none focus:border-b-2 focus:border-[#B78C72] transition-colors"
                  />
                </div>

                {/* Submit Button & Hover Mineral Sweep */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative group overflow-hidden px-9 py-4 bg-[#21403D] text-[#FBFAF6] text-sm font-medium tracking-wider uppercase rounded-full hover:scale-[1.02] hover:shadow-md active:scale-[0.99] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#21403D] min-h-[44px] cursor-pointer"
                  >
                    {/* Warm mineral sweep on hover */}
                    <span className="absolute inset-0 bg-[#B78C72] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />

                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? 'TRANSMITTING...' : 'REQUEST SERVICE'}
                      {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />}
                    </span>
                  </button>

                  {/* Direct Contact Us beneath */}
                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#4A514E]">
                    <span className="text-[#929792]">OR</span>
                    <a
                      href="tel:7866559549"
                      className="group inline-flex items-center gap-1.5 font-semibold text-[#1B211F] hover:text-[#21403D] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 underline decoration-[#B78C72] underline-offset-4"
                      aria-label="Contact Us by Phone"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#21403D] group-hover:text-[#B78C72] group-hover:scale-110 transition-all duration-200" />
                      <span>CONTACT US</span>
                    </a>
                  </div>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
