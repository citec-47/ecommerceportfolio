import Reveal from "./Reveal";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.05),transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            How we work
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            A structured system, not guesswork.
          </h2>
          <p className="mt-4 text-slate-400">
            Clear routines and reporting so you always know what&apos;s done and
            what&apos;s next.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 100}>
              <div className="group relative h-full rounded-2xl border border-line bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-accent/50">
                <div className="text-4xl font-black text-transparent [-webkit-text-stroke:1px_var(--color-accent)] opacity-70">
                  {p.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
