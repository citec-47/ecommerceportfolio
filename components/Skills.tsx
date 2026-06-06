import Reveal from "./Reveal";
import { skills, tools } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Skills
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Tools &amp; capabilities I bring on day one.
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              A blend of ecommerce operations, marketing, and real engineering,
              so most things you need stay in-house with one person.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line bg-ink-soft px-4 py-2 text-sm text-slate-200 transition-colors hover:border-accent hover:text-accent"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-line bg-card/60 p-8">
              <h3 className="text-lg font-semibold text-white">
                Two skill sets, one VA
              </h3>
              <div className="mt-6 space-y-6">
                <SkillBar label="Ecommerce Management (Amazon · TikTok)" value={92} />
                <SkillBar label="Social Media & Content Marketing" value={88} />
                <SkillBar label="AI Tools & Workflow Automation" value={85} />
                <SkillBar label="Web Development (JS · React · Rails)" value={90} />
                <SkillBar label="Reporting & Remote Collaboration" value={95} />
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <div className="text-xs uppercase tracking-widest text-slate-500">
                  Platforms I work in
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-ink-soft px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-200">{label}</span>
        <span className="text-slate-400">{value}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink-soft">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
