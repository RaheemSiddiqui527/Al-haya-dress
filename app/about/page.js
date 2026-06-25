import Image from "next/image";

export const metadata = {
  title: "About — Al Haya",
  description:
    "The story of Al Haya. Founded in Milan 1994 by Elena Moretti. Heritage Italian tailoring, sustainable luxury.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-16 overflow-hidden">
        <div className="relative h-[420px] md:h-[560px]">
          <Image
            src="https://images.unsplash.com/photo-1660089632572-7082384281e9?w=1400&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
            alt="About Al Haya"
            fill
            unoptimized
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-foreground/20 to-foreground/65" />
          <div className="absolute inset-0 flex flex-col justify-end max-w-[1140px] mx-auto px-6 pb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/70 mb-4">
              Est. 1994 · Milan
            </p>
            <h1 className="font-britney text-[clamp(3rem,7vw,5rem)] leading-[1.02] text-white">
              About<br /><em>Al Haya</em>
            </h1>
          </div>
        </div>
      </section>

      {/* ─── Brand Story ──────────────────────────────────────── */}
      <section className="py-[120px] bg-surface-highest">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-4">Our Story</p>
              <h2 className="font-britney text-[clamp(2rem,4vw,2.5rem)] text-primary leading-tight">
                Founded in Grace,<br /><em>Built in Tradition</em>
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5 text-muted leading-relaxed text-sm">
              <p>
                Al Haya was founded in 1994 by Elena Moretti in the heart of Milan's fashion
                district. What began as a small atelier on Via della Spiga has grown into a
                globally recognised name in quiet luxury — yet our commitment to craft and
                intentionality has never wavered.
              </p>
              <p>
                Elena's philosophy is simple: clothing should empower, never overwhelm. Every
                piece in our collection is designed to become a trusted companion in the wardrobe
                of a discerning woman — something she reaches for again and again, decade after
                decade.
              </p>
              <p>
                Today, Al Haya operates from our original Milan atelier and a Paris boutique on
                Rue du Faubourg Saint-Honoré, serving clients who understand that true style is
                about presence, not performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Founder ──────────────────────────────────────────── */}
      <section className="py-[120px]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1775224503419-9d48415e5796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
                alt="Elena Moretti"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 570px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/[0.05]" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-4">Creative Director</p>
              <h2 className="font-britney text-[clamp(2rem,4vw,2.5rem)] text-primary mb-6">
                Elena <em>Moretti</em>
              </h2>
              <p className="text-muted leading-relaxed mb-4 text-sm">
                Trained at Central Saint Martins and the Chambre Syndicale de la Haute Couture,
                Elena brings a rigorous understanding of construction to every design. Her work
                is deeply personal — each collection an intimate dialogue between architecture
                and femininity.
              </p>
              <p className="text-muted leading-relaxed mb-8 text-sm">
                With over thirty years at the helm of Al Haya, she continues to shape the
                brand's direction with an unwavering clarity of vision.
              </p>
              <blockquote className="font-britney text-lg italic text-primary mb-3 leading-snug">
                "I design for the woman who knows herself. Who dresses not to be noticed, but
                to feel exactly right."
              </blockquote>
              <p className="text-[11px] uppercase tracking-[0.18em] text-primary">
                — Elena Moretti, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Sustainability ───────────────────────────────────── */}
      <section className="py-[120px] bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-4">Our Commitment</p>
            <h2 className="font-britney text-[clamp(2rem,4vw,2.5rem)] text-primary">
              Sustainability First
            </h2>
          </div>
          {/* Full-bleed image banner */}
          <div className="relative h-[280px] overflow-hidden mb-16">
            <Image
              src="https://images.unsplash.com/photo-1781269034633-7add54287c6c?w=1400&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
              alt="Sustainable craftsmanship"
              fill
              unoptimized
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/35" />
            <p className="absolute inset-0 flex items-center justify-center font-britney text-2xl italic text-white">
              Crafted with intention. Made to last.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              { stat: "98%",  label: "Sustainable Fibres", desc: "Almost every garment uses certified organic, recycled, or sustainably sourced materials." },
              { stat: "0",    label: "Fast Fashion",        desc: "We produce only what we need. Limited runs, zero overproduction, considered design." },
              { stat: "1994", label: "Since Day One",       desc: "Ethical production has been part of our founding DNA — not a recent marketing pivot." },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-britney text-[5rem] leading-none text-primary mb-3">{item.stat}</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-primary mb-3">{item.label}</p>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact ──────────────────────────────────────────── */}
      <section id="contact" className="py-[120px]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* Form */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-4">Get in Touch</p>
              <h2 className="font-britney text-[clamp(2rem,4vw,2.5rem)] text-primary mb-10">
                Contact <em>Us</em>
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
                  <input type="email" className="w-full border-b border-border bg-transparent py-2 text-sm text-inverse placeholder:text-outline/60 outline-none focus:border-primary transition-colors" placeholder="hello@example.com" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.12em] text-muted mb-2">Subject</label>
                  <select className="w-full border-b border-border bg-transparent py-2 text-sm text-inverse outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                    <option value="">Select a topic</option>
                    <option>General Enquiry</option>
                    <option>Order Support</option>
                    <option>Press & Collaborations</option>
                    <option>Boutique Visit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.12em] text-muted mb-2">Message</label>
                  <textarea rows={4} className="w-full border-b border-border bg-transparent py-2 text-sm text-inverse placeholder:text-outline/60 outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us how we can help..." />
                </div>
                <button type="submit" className="inline-block bg-primary text-white text-[11px] uppercase tracking-[0.18em] px-9 py-4 hover:bg-inverse transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>

            {/* Locations */}
            <div className="space-y-12">
              {[
                { city: "Milan",  tag: "Italy · Atelier",   address: "Via della Spiga 42\nMilano, 20121",             email: "hello@alhaya.com",  phone: "+39 02 1234 5678",  hours: "Mon–Sat: 10:00–19:00", src: "https://images.unsplash.com/photo-1718358345678-889a08b96114?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
                { city: "Paris",  tag: "France · Boutique", address: "12 Rue du Faubourg Saint-Honoré\nParis, 75008", email: "paris@alhaya.com",  phone: "+33 1 42 60 00 00", hours: "Mon–Sat: 10:00–19:00", src: "https://plus.unsplash.com/premium_photo-1664202526535-c01e4b0c42b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
              ].map((loc) => (
                <div key={loc.city}>
                  <div className="relative h-36 overflow-hidden mb-5">
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
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-1">{loc.tag}</p>
                  <div className="space-y-1.5 text-sm text-muted">
                    <p className="whitespace-pre-line">{loc.address}</p>
                    <p className="pt-3">{loc.email}</p>
                    <p>{loc.phone}</p>
                    <p className="pt-2 text-[10px] uppercase tracking-[0.1em]">{loc.hours}</p>
                  </div>
                </div>
              ))}
              <div className="pt-8 border-t border-border">
                <p className="font-britney italic text-5xl text-primary/20 leading-none">Al Haya</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
