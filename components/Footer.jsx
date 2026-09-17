import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#FAQ" },
  { label: "Contact Us", href: "/contact-us" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/yourusername",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/yourusername",
    icon: FaFacebookF,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@yourusername",
    icon: FaTiktok,
  },
];

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-ink-800 bg-ink-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10">

        {/* Brand */}
        <div className="md:col-span-2">
          <p className="font-display text-2xl tracking-wide text-bone">
            roaa.bayoumy
          </p>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
            A small studio in the city center, working by appointment across
            blackwork, fine line, and traditional styles.
          </p>
        </div>

        {/* Explore */}
        <div>
          <p className="text-sm text-bone">
            Explore
          </p>

          <hr className="pb-2 mt-2 border-mist" />


          <ul className="mt-4 flex flex-col gap-3">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-mist transition-colors hover:text-ember"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Visit */}
        <div>
          <p className="text-sm text-bone">
            Visit
          </p>

          <hr className="pb-2 mt-2 border-mist" />


          <address className="mt-4 flex flex-col gap-2 text-sm not-italic text-mist">
            <span>142 maadi street</span>
            <span>Open Tue–Sat, 11–7</span>

            <a
              href="mailto:hello@noirneedle.com"
              className="transition-colors hover:text-ember"
            >
              hello@noirneedle.com
            </a>
          </address>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-ink-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-mist md:flex-row md:px-10">

          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} roaa.bayoumy
          </p>

          {/* Social Icons */}
          <div className="flex gap-5">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-mist transition-colors hover:text-ember"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </footer>
  );
}