import Reveal from "./Reveal";
import { profile } from "@/lib/data";

const highlights = [
  {
    title: "Ecommerce operator",
    text: "Hands-on with Amazon & TikTok Shop: listings, marketplace management, and the daily upkeep that keeps a store healthy.",
  },
  {
    title: "Marketer",
    text: "Content planning, scheduling, and audience engagement across Meta Business Suite and TikTok.",
  },
  {
    title: "Technical edge",
    text: "Full-stack developer & founder of a small tech studio. JavaScript, React, and Ruby on Rails for sites, platforms & tools.",
  },
  {
    title: "Reliable remote partner",
    text: "Daily reporting, task tracking, and check-ins. Experienced working with international teams across time zones.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              About me
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              The marketing side <span className="text-slate-500">and</span> the
              technical side, in one person.
            </h2>
            <p className="mt-6 leading-relaxed text-slate-300">
              I&apos;ve watched founders stretched thin: managing stores,
              juggling social media, answering customer messages, and trying to
              market consistently, all while attempting to actually grow. The
              tasks that drive sales are usually the first to fall behind.
            </p>
            <p className="mt-4 leading-relaxed text-slate-300">
              That&apos;s where I come in. I take the day-to-day digital work off
              your plate and treat your business like it&apos;s my own. And when
              your store needs more than routine upkeep, whether a fix, an
              integration, an automation, or a landing page, I can actually
              build it.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-line bg-ink-soft px-4 py-2 text-slate-300">
                📍 {profile.location}
              </span>
              <span className="rounded-full border border-line bg-ink-soft px-4 py-2 text-slate-300">
                🕒 {profile.availability}
              </span>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-line bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-accent/50">
                  <h3 className="text-lg font-semibold text-white">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {h.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
