import Image from "next/image";
import Link from "next/link";

const NEW_ARRIVALS = [
  { id: 1, name: "Rosalie Silk Shirt",      price: 285, category: "Tops",        src: "https://images.unsplash.com/photo-1769107805465-bfd41863f1a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 2, name: "Celeste Linen Trousers",  price: 195, category: "Bottoms",     src: "https://plus.unsplash.com/premium_photo-1664202526336-9edbfc8e2886?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 3, name: "Margot Evening Dress",    price: 420, category: "Dresses",     src: "https://images.unsplash.com/photo-1650741563846-2260e0b3907e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 4, name: "Elise Cashmere Coat",     price: 385, category: "Outerwear",   src: "https://images.unsplash.com/photo-1769107805511-0bb7075fca27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 5, name: "Amélie Ankle Boots",      price: 245, category: "Footwear",    src: "https://plus.unsplash.com/premium_photo-1664202526793-fca03a9cab29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 6, name: "Juliette Silk Scarf",     price: 185, category: "Accessories", src: "https://images.unsplash.com/photo-1695527082010-fca4b70a6639?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
];

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1600091106721-ccbd6597750b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",  span: "",              ratio: "aspect-[3/4]"  },
  { src: "https://images.unsplash.com/photo-1564925211110-1e22668653b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",  span: "",              ratio: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1549221497-2dd392c0d132?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",    span: "",              ratio: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1759893362613-8bb8bb057af1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",  span: "",              ratio: "aspect-[3/4]"  },
  { src: "https://images.unsplash.com/photo-1618611874296-7e1889a4a08a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",  span: "md:col-span-2", ratio: "aspect-[2/1]"  },
  { src: "https://images.unsplash.com/photo-1751297939372-1889dd757e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",  span: "",              ratio: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1761090617068-f1b3257d27ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww",  span: "",              ratio: "aspect-square" },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          HERO — editorial 3-column layout (matching Stitch design)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative bg-background overflow-hidden">

        {/* ── 3-column editorial ─────────────────────────────────── */}
        <div className="relative max-w-[1240px] mx-auto px-6 pt-24 pb-2">

          {/* Giant brand name — behind content */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute bottom-0 inset-x-0 text-center leading-none overflow-hidden"
          >
            <span
              className="font-quicksand uppercase font-bold text-primary/[0.2] mt-10 tracking-[0.12em]"
              style={{ fontSize: "clamp(80px,10vw,100px)" }}
            >
              Al Haya
            </span>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1fr)] gap-6 lg:gap-10 items-start">

            {/* LEFT — Boots ──────────────────────────────────────── */}
            <div className="hidden md:block pt-12">
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted block mb-3">
                Style
              </span>
              <div className="relative group">
                <div className="relative aspect-[5/7] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1595575570544-49716eedaf70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym91dGlxdWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
                    alt="Boots collection"
                    fill
                    unoptimized
                    sizes="240px"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/[0.04]" />
                </div>
                <span className="absolute bottom-3 left-3 bg-primary text-white text-[9px] uppercase tracking-[0.16em] px-3 py-1.5 rounded-full">
                  Boots
                </span>
                <button
                  aria-label="View Boots"
                  className="absolute top-2.5 right-2.5 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </button>
              </div>
              <p className="mt-4 text-[13px] text-muted leading-relaxed max-w-[200px]">
                Refined footwear designed for effortless sophistication
              </p>
              <span className="mt-2 block text-[10px] uppercase tracking-[0.22em] text-muted">
                Modern Muse
              </span>
            </div>

            {/* CENTRE — Rosalie hero ──────────────────────────────── */}
            <div className="relative flex flex-col">
              {/* Script "Rosalie" floating above image */}
              <div className="relative z-10 -mb-8 flex items-center justify-center">
                <h1 className="font-britney italic text-primary leading-none"
                    style={{ fontSize: "clamp(3.5rem,8vw,5.5rem)" }}>
                  Collection
                </h1>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym91dGlxdWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
                  alt="Rosalie — Modern Muse collection"
                  width={600}
                  height={900}
                  unoptimized
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-primary/[0.03]" />
                <Link
                  href="/collections"
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] uppercase tracking-[0.2em] px-8 py-3 rounded-full whitespace-nowrap hover:bg-inverse transition-colors duration-300 shadow-md"
                >
                  Discover the Collection
                </Link>
              </div>
            </div>

            {/* RIGHT — Suits ──────────────────────────────────────── */}
            <div className="hidden md:flex flex-col items-end pt-12">
              <div className="relative group w-full">
                <div className="relative aspect-[5/7] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1599057407868-e5891fc0495d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym91dGlxdWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
                    alt="Suits collection"
                    fill
                    unoptimized
                    sizes="240px"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/[0.04]" />
                </div>
                <span className="absolute bottom-3 right-3 bg-primary text-white text-[9px] uppercase tracking-[0.16em] px-3 py-1.5 rounded-full">
                  Suits
                </span>
                <button
                  aria-label="View Suits"
                  className="absolute top-2.5 left-2.5 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </button>
              </div>
              <p className="mt-4 text-[13px] text-muted leading-relaxed text-right max-w-[200px]">
                Custom tailoring for a flawless feminine feel
              </p>
              <span className="mt-2 block text-[10px] uppercase tracking-[0.22em] text-muted">
                Femininity
              </span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-muted">
                Identity
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FEATURED CATEGORIES
      ══════════════════════════════════════════════════════════ */}
      <section className="py-[120px]">
        <div className="max-w-[1140px] mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted text-center mb-14">
            Featured Categories
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { name: "Boots", desc: "Italian craftsmanship, refined silhouettes", src: "https://images.unsplash.com/photo-1588636529596-5257232bfc5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
              { name: "Suits", desc: "Tailored for the discerning woman",          src: "https://images.unsplash.com/photo-1733256818926-b7fd02d11d25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
            ].map((cat) => (
              <Link
                key={cat.name}
                href="/collections"
                className="group relative aspect-[4/5] overflow-hidden block"
              >
                <Image
                  src={cat.src}
                  alt={cat.name}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 570px"
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/70 mb-1.5">
                    {cat.desc}
                  </p>
                  <h3 className="font-britney text-4xl text-white mb-3">{cat.name}</h3>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-white border-b border-white/60 pb-px w-max opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    Shop Now
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MODERN MUSE FEATURE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-[120px] bg-surface-highest">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1664202526535-c01e4b0c42b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
                alt="Rosalie Silk Shirt"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 570px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/[0.06]" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] mb-1 opacity-70">Featured Piece</p>
                <p className="font-britney text-2xl italic">Rosalie</p>
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
                Modern Muse Collection
              </p>
              <h2 className="font-britney text-[clamp(2rem,4.5vw,3rem)] leading-tight text-primary mb-6">
                The Rosalie<br /><em>Silk Shirt</em>
              </h2>
              <p className="text-muted leading-relaxed mb-4 text-sm">
                Draped in the finest Lyonese silk, the Rosalie embodies effortless
                elegance. Its fluid silhouette moves with you — from morning meetings
                to evening receptions.
              </p>
              <p className="text-muted leading-relaxed mb-10 text-sm">
                Each piece is handfinished at our Parisian atelier, ensuring your
                Rosalie is uniquely yours.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/product"
                  className="inline-block bg-primary text-white text-[11px] uppercase tracking-[0.18em] px-9 py-4 hover:bg-inverse transition-colors duration-300"
                >
                  View Details
                </Link>
                <p className="font-britney text-2xl text-primary">$285</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          NEW ARRIVALS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-[120px]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-2">Latest Arrivals</p>
              <h2 className="font-britney text-[clamp(2rem,4vw,3rem)] text-primary">New In</h2>
            </div>
            <Link
              href="/collections"
              className="hidden md:block text-[11px] uppercase tracking-[0.18em] text-muted border-b border-muted/50 pb-px hover:text-primary hover:border-primary transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
            {NEW_ARRIVALS.map((product) => (
              <Link key={product.id} href="/product" className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={product.src}
                    alt={product.name}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-primary/[0.04]" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-muted mb-1">
                  {product.category}
                </p>
                <h3 className="font-britney text-lg text-primary mb-1 leading-snug">
                  {product.name}
                </h3>
                <p className="text-muted text-sm">${product.price}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link href="/collections" className="text-[11px] uppercase tracking-[0.18em] text-muted border-b border-muted/50 pb-px">
              View All New Arrivals
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BRAND PHILOSOPHY
      ══════════════════════════════════════════════════════════ */}
      <section className="py-[120px] bg-surface">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-10">Our Philosophy</p>
          <blockquote className="font-britney text-[clamp(1.4rem,3.5vw,2.25rem)] text-primary leading-[1.45] italic">
            "We don't just design clothes; we design the confidence to move
            through the world with grace."
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-10 h-px bg-border" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary-light" />
            <div className="w-10 h-px bg-border" />
          </div>
          <p className="mt-6 text-[11px] text-muted uppercase tracking-[0.14em]">Elena Moretti, Founder</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CURATED GALLERY
      ══════════════════════════════════════════════════════════ */}
      <section className="py-[120px]">
        <div className="max-w-[1140px] mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted text-center mb-14">
            Curated Atmosphere
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY.map((item, i) => (
              <div
                key={i}
                className={`${item.span} ${item.ratio} relative overflow-hidden cursor-pointer hover:scale-[1.015] transition-transform duration-500 ease-out`}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  unoptimized
                  sizes="300px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/[0.04]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          NEWSLETTER
      ══════════════════════════════════════════════════════════ */}
      <section className="py-[120px] bg-surface-highest">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-4">Stay Inspired</p>
          <h2 className="font-britney text-[clamp(1.75rem,4vw,2.5rem)] text-primary mb-4">
            Join the <em>Atelier</em>
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-8">
            Curated edits, exclusive previews, and invitations to private events.
            No noise — only what matters.
          </p>
          <form className="flex border border-border">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3.5 bg-transparent text-sm text-inverse placeholder:text-outline outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-primary text-white text-[11px] uppercase tracking-[0.18em] whitespace-nowrap hover:bg-inverse transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-[11px] text-outline">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  );
}
