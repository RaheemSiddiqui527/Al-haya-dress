import Image from "next/image";

export const metadata = {
  title: "Contact — Al Haya",
  description: "Get in touch with Al Haya. Visit our Milan atelier or Paris boutique.",
};

export default function ContactPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-16 overflow-hidden">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1751297939372-1889dd757e4c?w=1400&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
            alt="Contact Al Haya"
            fill
            unoptimized
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-foreground/20 to-foreground/65" />
          <div className="absolute inset-0 flex flex-col justify-end max-w-[1140px] mx-auto px-6 pb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/70 mb-4">
              Milan · Paris
            </p>
            <h1 className="font-britney text-[clamp(3rem,7vw,5rem)] leading-[1.02] text-white">
              Contact <em>Us</em>
            </h1>
          </div>
        </div>
      </section>

      {/* ─── Contact body ─────────────────────────────────────── */}
      <section className="py-[120px]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* ── Form ─────────────────────────────────────────── */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-4">Send a Message</p>
              <h2 className="font-britney text-[clamp(2rem,4vw,2.5rem)] text-primary mb-10">
                We'd Love to <em>Hear From You</em>
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {["First Name", "Last Name"].map((label) => (
                    <div key={label}>
                      <label className="block text-[10px] uppercase tracking-[0.12em] text-muted mb-2">{label}</label>
                      <input
                        type="text"
                        className="w-full border-b border-border bg-transparent py-2 text-sm text-inverse placeholder:text-outline/60 outline-none focus:border-primary transition-colors"
                        placeholder={label === "First Name" ? "Elena" : "Moretti"}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.12em] text-muted mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full border-b border-border bg-transparent py-2 text-sm text-inverse placeholder:text-outline/60 outline-none focus:border-primary transition-colors"
                    placeholder="hello@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.12em] text-muted mb-2">Subject</label>
                  <select className="w-full border-b border-border bg-transparent py-2 text-sm text-inverse outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                    <option value="">Select a topic</option>
                    <option>General Enquiry</option>
                    <option>Order Support</option>
                    <option>Press & Collaborations</option>
                    <option>Boutique Visit</option>
                    <option>Bespoke & Alterations</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.12em] text-muted mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full border-b border-border bg-transparent py-2 text-sm text-inverse placeholder:text-outline/60 outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block bg-primary text-white text-[11px] uppercase tracking-[0.18em] px-9 py-4 hover:bg-inverse transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* ── Locations ────────────────────────────────────── */}
            <div className="space-y-12">
              {[
                {
                  city: "Milan",
                  tag: "Italy · Atelier",
                  address: "Via della Spiga 42\nMilano, 20121",
                  email: "hello@alhaya.com",
                  phone: "+39 02 1234 5678",
                  hours: "Mon–Sat: 10:00–19:00",
                  src: "https://images.unsplash.com/photo-1718358345678-889a08b96114?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
                },
                {
                  city: "Paris",
                  tag: "France · Boutique",
                  address: "12 Rue du Faubourg Saint-Honoré\nParis, 75008",
                  email: "paris@alhaya.com",
                  phone: "+33 1 42 60 00 00",
                  hours: "Mon–Sat: 10:00–19:00",
                  src: "https://plus.unsplash.com/premium_photo-1664202526535-c01e4b0c42b7?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
                },
              ].map((loc) => (
                <div key={loc.city}>
                  <div className="relative h-40 overflow-hidden mb-5">
                    <Image
                      src={loc.src}
                      alt={loc.city}
                      fill
                      unoptimized
                      sizes="570px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/20" />
                    <span className="absolute bottom-3 left-4 font-britney text-xl italic text-white">
                      {loc.city}
                    </span>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-3">{loc.tag}</p>
                  <div className="space-y-1.5 text-sm text-muted">
                    <p className="whitespace-pre-line">{loc.address}</p>
                    <p className="pt-3">{loc.email}</p>
                    <p>{loc.phone}</p>
                    <p className="pt-2 text-[10px] uppercase tracking-[0.1em]">{loc.hours}</p>
                  </div>
                </div>
              ))}

              <div className="pt-8 border-t border-border">
                <p className="text-[11px] uppercase tracking-[0.14em] text-muted mb-2">Response Time</p>
                <p className="text-sm text-muted leading-relaxed">
                  We respond to all enquiries within 24 hours during boutique hours.
                  For urgent matters, please call directly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
