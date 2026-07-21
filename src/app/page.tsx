import HelloWorld from "@/components/HelloWorld";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* ================= HERO / ABOUT ================= */}
        <section className="relative flex min-h-screen items-center overflow-hidden px-6">
          {/* soft radial glow behind the headline */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.18] blur-[110px]"
            style={{
              background:
                "radial-gradient(circle, #8ab4ff 0%, #b69bff 45%, transparent 70%)",
            }}
          />

          <div className="mx-auto w-full max-w-5xl">
            <Reveal>
              <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tighter text-zinc-50 sm:text-6xl md:text-7xl">
                Hi, I&rsquo;m Sai.
              </h1>
            </Reveal>

            <Reveal delay={90}>
              <p className="mt-6 max-w-3xl text-balance text-2xl font-medium tracking-tight text-zinc-300 sm:text-3xl">
                I&rsquo;m a SWE. I like to write{" "}
                <span className="text-gradient">colorful letters</span> on a
                computer screen.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                I&rsquo;m a software engineer. But the honest version is simpler
                than a title: I love software, I like building things, and I
                like it even more when the thing I built makes someone&rsquo;s
                day a little better. That&rsquo;s most of what drives me &mdash;
                the rest is just, well, colorful lettering.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                >
                  See what I&rsquo;m building
                  <span className="transition-transform group-hover:translate-y-0.5">
                    ↓
                  </span>
                </a>
                <a
                  href="#contact"
                  className="text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  Or just say hi →
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= STORY ================= */}
        <section id="story" className="border-t border-white/[0.06] px-6 py-28 md:py-40">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                How I got here
              </p>
            </Reveal>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-zinc-400">
              <Reveal delay={60}>
                <p>
                  I didn&rsquo;t start in software. I was a Chemistry major,
                  pre-med, fully pointed at medical school &mdash; until my
                  senior year, when I realized this wasn&rsquo;t it. I
                  wasn&rsquo;t excited.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <p>
                  So I took a leap of faith and switched to Computer Science. It
                  remains one of the best decisions I&rsquo;ve ever made.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <p>
                  The moment it clicked is embarrassingly specific: an intro
                  class (ITSC-1212, to be exact) had us write{" "}
                  <span className="font-mono text-zinc-200">
                    &ldquo;Hello, World&rdquo;
                  </span>{" "}
                  in Java. That was all it took. I had no idea what I was doing
                  or how any of it actually worked under the hood &mdash; but I
                  knew, immediately, that this was what I wanted to do with my
                  time. Since then, I&rsquo;ve dove head first into the world of
                  coding &amp; computing. I&rsquo;ve been chasing that same
                  feeling ever since.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="my-2">
                  <HelloWorld />
                </div>
              </Reveal>

              <Reveal delay={300}>
                <p>
                  I currently work at SAS as an associate software developer.
                </p>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="mt-14 border-l-2 border-accent/50 pl-6">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                  Where I&rsquo;m headed
                </p>
                <p className="mt-4 text-xl leading-relaxed text-zinc-200 md:text-2xl">
                  That &ldquo;Hello, World&rdquo; jolt is still the thing that
                  keeps me motivated to continue building &mdash; continue
                  shipping software that reaches real people and makes their
                  lives meaningfully better.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= WORK / PROJECTS ================= */}
        <section id="projects" className="border-t border-white/[0.06] px-6 py-28 md:py-40">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                Things I&rsquo;m building
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="group mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-white/20 md:p-10">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
                    YeetCode
                  </h3>
                  <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-accent">
                    In progress
                  </span>
                </div>

                <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                  A supplementary playground for LeetCode and NeetCode that
                  cares about exactly one thing:{" "}
                  <span className="text-zinc-200">the Hards.</span>{" "}
                  No easies, no mediums to pad your streak &mdash; just the
                  problems that actually humble you.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-zinc-400">
                  If you want to test your coding chops, step into the coding
                  crucible. And when a problem wins &mdash; because
                  some of them will &mdash; there&rsquo;ll be written
                  walkthroughs and video explanations, so you leave having{" "}
                  <span className="italic text-zinc-300">learned</span> it
                  rather than just rage-quitting. Remember: Yeet it.
                </p>

                <p className="mt-8 font-mono text-sm text-zinc-500">
                  Live site coming soon.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="border-t border-white/[0.06] px-6 py-28 md:py-40">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                Say hi
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                The internet&rsquo;s a big place, but I&rsquo;m not that hard to
                find.
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <ul className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {[
                  {
                    label: "Email",
                    value: "smaganti.pro@gmail.com",
                    href: "mailto:smaganti.pro@gmail.com",
                  },
                  {
                    label: "GitHub",
                    value: "github.com/sai-maganti",
                    href: "https://github.com/sai-maganti",
                  },
                  {
                    label: "LinkedIn",
                    value: "in/saimaganti",
                    href: "https://www.linkedin.com/in/saimaganti/",
                  },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center justify-between gap-4 py-5 transition-colors"
                    >
                      <span className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                        {item.label}
                      </span>
                      <span className="flex items-center gap-3 text-base text-zinc-300 transition-colors group-hover:text-zinc-50 md:text-lg">
                        {item.value}
                        <span className="text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:text-accent">
                          →
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-white/[0.06] px-6 py-10">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-zinc-600 sm:flex-row">
            <span className="font-mono">
              saimaganti<span className="text-accent">.</span>io
            </span>
            <span>
              &copy; {new Date().getFullYear()} Sai Maganti &middot; Built with
              Next.js
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
