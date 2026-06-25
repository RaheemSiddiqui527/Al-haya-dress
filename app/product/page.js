"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const IMAGES = [
  { src: "https://plus.unsplash.com/premium_photo-1664202526535-c01e4b0c42b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww", label: "Front"  },
  { src: "https://plus.unsplash.com/premium_photo-1664202526336-9edbfc8e2886?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww", label: "Side"   },
  { src: "https://plus.unsplash.com/premium_photo-1664202526793-fca03a9cab29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww", label: "Detail" },
];

const COLORS = [
  { name: "Blush Rose", bg: "bg-[#d4a396]" },
  { name: "Ivory",      bg: "bg-[#fff8f5] border border-border" },
  { name: "Charcoal",   bg: "bg-[#34302c]" },
];

const RELATED = [
  { id: 1, name: "Celeste Linen Trousers", price: 195, src: "https://images.unsplash.com/photo-1769107805465-bfd41863f1a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 2, name: "Margot Evening Dress",   price: 420, src: "https://images.unsplash.com/photo-1650741563846-2260e0b3907e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 3, name: "Juliette Silk Scarf",    price: 185, src: "https://images.unsplash.com/photo-1695527082010-fca4b70a6639?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 4, name: "Sophie Leather Belt",    price: 145, src: "https://images.unsplash.com/photo-1564925211110-1e22668653b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
];

export default function ProductPage() {
  const [activeImg,    setActiveImg]   = useState(0);
  const [selectedSize, setSize]        = useState("M");
  const [selectedColor, setColor]      = useState("Blush Rose");

  return (
    <>
      {/* ─── Breadcrumb ──────────────────────────────────────── */}
      <div className="pt-24 pb-4 max-w-[1140px] mx-auto px-6">
        <nav className="flex items-center gap-2 text-[10px] text-muted uppercase tracking-[0.1em]">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-border">—</span>
          <Link href="/collections" className="hover:text-primary transition-colors">Collections</Link>
          <span className="text-border">—</span>
          <span className="text-primary">Rosalie Silk Shirt</span>
        </nav>
      </div>

      {/* ─── Product ─────────────────────────────────────────── */}
      <section className="pb-[120px]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* ── Images ─────────────────────────────────────── */}
            <div>
              <div className="relative aspect-[4/5] overflow-hidden mb-3">
                <Image
                  src={IMAGES[activeImg].src}
                  alt="Rosalie Silk Shirt"
                  fill
                  unoptimized
                  priority
                  sizes="(max-width: 768px) 100vw, 570px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/[0.04]" />
              </div>
              <div className="flex gap-3">
                {IMAGES.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative w-20 aspect-[4/5] overflow-hidden border-2 transition-colors ${
                      activeImg === i ? "border-primary" : "border-transparent hover:border-border"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      unoptimized
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* ── Info ───────────────────────────────────────── */}
            <div className="md:sticky md:top-24">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-2">
                Modern Muse Collection
              </p>
              <h1 className="font-britney text-[clamp(2rem,4vw,2.75rem)] text-primary leading-tight mb-2">
                Rosalie Silk Shirt
              </h1>
              <p className="font-britney text-2xl text-primary mb-8">$285</p>

              {/* Colour */}
              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-[0.12em] text-primary mb-3">
                  Colour — <span className="text-muted font-normal">{selectedColor}</span>
                </p>
                <div className="flex gap-2.5">
                  {COLORS.map((c) => (
                    <button
                      key={c.name}
                      title={c.name}
                      onClick={() => setColor(c.name)}
                      className={`w-8 h-8 rounded-full ${c.bg} transition-all ${
                        selectedColor === c.name
                          ? "ring-2 ring-offset-2 ring-primary"
                          : "hover:ring-1 hover:ring-offset-1 hover:ring-border"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-primary">Size</p>
                  <button className="text-[11px] uppercase tracking-[0.12em] text-muted border-b border-muted/50 pb-px hover:text-primary hover:border-primary transition-colors">
                    Size Guide
                  </button>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSize(size)}
                      className={`w-11 h-11 text-[11px] uppercase tracking-[0.08em] border transition-colors ${
                        selectedSize === size
                          ? "border-primary bg-primary text-white"
                          : "border-border text-muted hover:border-primary hover:text-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to bag */}
              <div className="flex gap-3 mb-8">
                <button className="flex-1 bg-primary text-white text-[11px] uppercase tracking-[0.18em] py-4 hover:bg-inverse transition-colors duration-300">
                  Add to Bag
                </button>
                <button className="w-14 h-14 flex items-center justify-center border border-border hover:border-primary transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>

              {/* Perks */}
              <div className="flex flex-col gap-2.5 mb-8">
                {["Complimentary shipping over $300", "Free returns within 14 days", "Handfinished in Paris"].map((perk) => (
                  <div key={perk} className="flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-muted">
                    <div className="w-1 h-1 rounded-full bg-primary-light flex-shrink-0" />
                    {perk}
                  </div>
                ))}
              </div>

              {/* Accordion */}
              <div className="border-t border-border">
                {[
                  {
                    title: "Product Details",
                    open: true,
                    body: (
                      <div className="space-y-3 text-sm text-muted leading-relaxed">
                        <p>Draped in the finest Lyonese silk, the Rosalie is handfinished at our Parisian atelier. Its fluid silhouette moves effortlessly from morning to evening.</p>
                        <ul className="space-y-1.5 mt-2">
                          {["100% Lyonese silk", "Relaxed, fluid fit", "Button front closure", "Cuffed sleeves", "Made in France"].map((d) => (
                            <li key={d} className="flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-primary inline-block flex-shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ),
                  },
                  {
                    title: "Care Instructions",
                    open: false,
                    body: <p className="text-sm text-muted leading-relaxed">Dry clean only. Store folded away from direct sunlight. Iron on low heat with a pressing cloth.</p>,
                  },
                  {
                    title: "Shipping & Returns",
                    open: false,
                    body: <p className="text-sm text-muted leading-relaxed">Complimentary shipping on orders over $300. Returns accepted within 14 days of delivery in original condition.</p>,
                  },
                ].map(({ title, open, body }) => (
                  <details key={title} className="group border-b border-border" open={open}>
                    <summary className="flex items-center justify-between text-[11px] uppercase tracking-[0.12em] text-primary cursor-pointer list-none py-4">
                      {title}
                      <svg className="w-4 h-4 group-open:rotate-180 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </summary>
                    <div className="pb-4">{body}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Related Products ─────────────────────────────────── */}
      <section className="py-[120px] border-t border-border">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-britney text-[clamp(1.5rem,3vw,2rem)] text-primary mb-12">
            You May Also <em>Like</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
            {RELATED.map((product) => (
              <Link key={product.id} href="/product" className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={product.src}
                    alt={product.name}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-primary/[0.04]" />
                </div>
                <h3 className="font-britney text-base text-primary mb-1 leading-snug">
                  {product.name}
                </h3>
                <p className="text-muted text-sm">${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
