import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-highest border-t border-border pt-16 pb-8">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-britney text-2xl tracking-[0.18em] uppercase text-primary mb-4">
              Al Haya
            </p>
            <p className="text-sm text-muted leading-relaxed max-w-[220px]">
              Effortless sophistication for the modern muse. Crafted with
              intention since 1994.
            </p>
            {/* Socials */}
            <div className="flex gap-4 mt-6">
              {["Instagram", "Pinterest", "LinkedIn"].map((name) => (
                <button
                  key={name}
                  aria-label={name}
                  className="text-[10px] uppercase tracking-[0.1em] text-muted hover:text-primary transition-colors"
                >
                  {name.slice(0, 2)}
                </button>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-primary mb-5 font-medium">
              Collections
            </p>
            <ul className="space-y-3">
              {[
                "New Arrivals",
                "Essentials",
                "Occasion Wear",
                "Seasonal Picks",
                "Modern Muse",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/collections"
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-primary mb-5 font-medium">
              Support
            </p>
            <ul className="space-y-3">
              {[
                "Size Guide",
                "Shipping & Returns",
                "Care Instructions",
                "Privacy Policy",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Boutique */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-primary mb-5 font-medium">
              Paris Boutique
            </p>
            <address className="not-italic text-sm text-muted leading-relaxed space-y-1">
              <p>12 Rue du Faubourg</p>
              <p>Saint-Honoré</p>
              <p>75008 Paris, France</p>
              <p className="mt-4">hello@alhaya.com</p>
              <p>+33 1 42 60 00 00</p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.08em]">
                Mon–Sat 10:00–19:00
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.1em] text-outline">
            © 2026 Al Haya. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[10px] uppercase tracking-[0.1em] text-outline hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
