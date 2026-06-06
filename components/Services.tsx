import Reveal from "./Reveal";
import { services } from "@/lib/data";
import { iconFor } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.06),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            What I do
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            One VA. The whole digital workload.
          </h2>
          <p className="mt-4 text-slate-400">
            From running your marketplaces to building the tools behind them,
            here&apos;s how I help your business run leaner.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10">
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                  {iconFor(s.icon, "h-6 w-6")}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {s.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
