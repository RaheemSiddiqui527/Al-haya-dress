"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SORT_OPTIONS = ["Newest", "Price: Low to High", "Price: High to Low", "Best Sellers"];

const PRODUCTS = [
  { id: 1,  name: "Rosalie Silk Shirt",      price: 285, category: "Tops",        tag: "New", src: "https://images.unsplash.com/photo-1769107805465-bfd41863f1a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 2,  name: "Celeste Linen Trousers",  price: 195, category: "Bottoms",     tag: null,  src: "https://plus.unsplash.com/premium_photo-1664202526336-9edbfc8e2886?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 3,  name: "Margot Evening Dress",    price: 420, category: "Dresses",     tag: "New", src: "https://images.unsplash.com/photo-1650741563846-2260e0b3907e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 4,  name: "Elise Cashmere Coat",     price: 385, category: "Outerwear",   tag: null,  src: "https://images.unsplash.com/photo-1769107805511-0bb7075fca27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 5,  name: "Amélie Ankle Boots",      price: 245, category: "Footwear",    tag: null,  src: "https://plus.unsplash.com/premium_photo-1664202526793-fca03a9cab29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 6,  name: "Juliette Silk Scarf",     price: 185, category: "Accessories", tag: "New", src: "https://images.unsplash.com/photo-1695527082010-fca4b70a6639?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 7,  name: "Clara Wool Blazer",       price: 340, category: "Outerwear",   tag: null,  src: "https://images.unsplash.com/photo-1600091106721-ccbd6597750b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 8,  name: "Isabelle Midi Skirt",     price: 220, category: "Bottoms",     tag: "New", src: "https://images.unsplash.com/photo-1564925211110-1e22668653b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 9,  name: "Sophie Leather Belt",     price: 145, category: "Accessories", tag: null,  src: "https://images.unsplash.com/photo-1549221497-2dd392c0d132?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 10, name: "Marie Velvet Dress",      price: 395, category: "Dresses",     tag: null,  src: "https://images.unsplash.com/photo-1759893362613-8bb8bb057af1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 11, name: "Colette Knit Jumper",     price: 265, category: "Tops",        tag: null,  src: "https://images.unsplash.com/photo-1618611874296-7e1889a4a08a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 12, name: "Hélène Tailored Pants",   price: 230, category: "Bottoms",     tag: "New", src: "https://images.unsplash.com/photo-1751297939372-1889dd757e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
];

const FILTERS = ["All", "Tops", "Bottoms", "Dresses", "Outerwear", "Footwear", "Accessories"];

export default function ShopPage() {
  const [activeFilter, setFilter] = useState("All");
  const [activeSort,   setSort]   = useState("Newest");

  const filtered = activeFilter === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-16 overflow-hidden">
        <div className="relative h-[340px] md:h-[440px]">
          <Image
            src="https://images.unsplash.com/photo-1761090617068-f1b3257d27ad?w=1400&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJvdXRpcXVlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
            alt="Shop Al Haya"
            fill
            unoptimized
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-foreground/20 to-foreground/60" />
          <div className="absolute inset-0 flex flex-col justify-end max-w-[1140px] mx-auto px-6 pb-12">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/70 mb-3">
              All Pieces · Spring / Summer 2026
            </p>
            <h1 className="font-britney text-[clamp(3rem,7vw,5rem)] text-white leading-[1.02]">
              Shop <em>All</em>
            </h1>
          </div>
        </div>
      </section>

      {/* ─── Filter + Sort bar ────────────────────────────────── */}
      <div className="sticky top-16 z-40 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex items-center justify-between gap-6 py-4 overflow-x-auto scrollbar-none">
            {/* Filters */}
            <div className="flex items-center gap-7 shrink-0">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-[11px] uppercase tracking-[0.12em] whitespace-nowrap transition-colors ${
                    activeFilter === f
                      ? "text-primary border-b border-primary pb-px"
                      : "text-muted hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            {/* Sort */}
            <select
              value={activeSort}
              onChange={(e) => setSort(e.target.value)}
              className="text-[11px] uppercase tracking-[0.1em] text-muted bg-transparent outline-none cursor-pointer shrink-0 hover:text-primary transition-colors"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ─── Product count ────────────────────────────────────── */}
      <div className="max-w-[1140px] mx-auto px-6 pt-10 pb-0">
        <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
        </p>
      </div>

      {/* ─── Product Grid ─────────────────────────────────────── */}
      <section className="py-10 pb-[120px]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
            {filtered.map((product) => (
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
                  {product.tag && (
                    <span className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.1em] bg-primary text-white px-2 py-1">
                      {product.tag}
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-background/90 backdrop-blur-sm py-3 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-primary">
                      Quick Add
                    </span>
                  </div>
                </div>
                <p className="text-[10px] uppercase tracking-[0.1em] text-muted mb-1">
                  {product.category}
                </p>
                <h3 className="font-britney text-base text-primary mb-1 leading-snug">
                  {product.name}
                </h3>
                <p className="text-muted text-sm">${product.price}</p>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-britney text-2xl text-muted italic">No pieces found</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
