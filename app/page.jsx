import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Body from "@/components/Body";
import FAQ from "@/components/Faq";

export default function Home() {
  return (
    <>
      <header className="relative flex min-h-[640px] items-end overflow-hidden bg-ink-950 md:min-h-screen">
        <img
          src="/images/header-bg.jpg"
          alt="Tattoo artist at work"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gray-900/40" />

        <Navbar />

        <div className="relative z-10 w-full px-6 pb-16 md:px-10 md:pb-24">
          <h1 className="max-w-md font-display font-oswald text-4xl leading-none tracking-wide text-bone sm:text-5xl md:text-6xl">
            More than ink — a reflection of who you are
          </h1>

          <p className="mt-4 max-w-md font-lato text-sm leading-relaxed text-bone/80 md:text-base">
            From the first idea to the final line, we create tattoos that feel
            personal, intentional, and uniquely yours — pieces of art made to
            grow with your story.
          </p>

          <a
            href="#book"
            className="mt-8 inline-block bg-bone px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink-950 transition-colors hover:bg-ember hover:text-bone"
          >
            Book me
          </a>
        </div>
      </header>

      <main className="bg-ink-950">
        <Body />

        <div className="h-24 md:h-32" />

        <FAQ />
      </main>

      <Footer />
    </>
  );
}