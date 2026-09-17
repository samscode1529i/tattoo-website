'use client';

import { useEffect, useState } from 'react';


const leftLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#about-us' },
  { label: 'FAQ', href: '#FAQ' },
];

const rightLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '/contact' },
];

function NavLink({ href, label, onClick }) {
  return (
    
     <a href={href}
      onClick={onClick}
      className="group relative text-base font-semibold uppercase tracking-wide text-bone/90 transition-colors hover:text-[#E8750B]"
    >
      {label}
      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#E8750B] transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink-900/60 ' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        {/* Left links (desktop) */}
        <div className="hidden flex-1 items-center gap-8 md:flex">
          {leftLinks.map((link) => (
            <NavLink key={link.label} href={link.href} label={link.label} />
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative flex h-6 w-6 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-bone transition-transform duration-300 ease-out ${
              open ? 'translate-y-[4px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-bone transition-transform duration-300 ease-out ${
              open ? '-translate-y-[4px] -rotate-45' : ''
            }`}
          />
        </button>

        {/* Logo (center) */}
        
          <a href="/"
          className="flex-1 text-center font-display text-2xl tracking-wide text-bone md:flex-none md:text-3xl"
        >
          roaa.bayoumy
        </a>

        {/* Right links + Book me (desktop) */}
        <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
          {rightLinks.map((link) => (
            <NavLink key={link.label} href={link.href} label={link.label} />
          ))}
          <a
            href="/contact"
            className="bg-bone px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-[#E8750B] hover:text-bone"
          >
            Book me
          </a>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          className={`mx-6 overflow-hidden transition-all duration-300 ease-out md:hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`flex flex-col gap-1 border border-ink-800 bg-ink-950/95 p-6 transition-transform duration-300 ease-out ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {[...leftLinks, ...rightLinks].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base uppercase tracking-wide text-bone/90"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 bg-bone px-5 py-3 text-center text-sm font-medium text-ink-950"
            >
              Book me
            </a>
          </div>
        </div>
              )}
    </nav>
  );
}