import Image from "next/image";
import { profile, stats } from "@/lib/data";
import { ArrowIcon, MailIcon, WhatsAppIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute top-32 right-0 h-96 w-96 rounded-full bg-accent-2/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.06),transparent_55%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-soft/60 px-4 py-1.5 text-xs font-medium text-mint">
            <span className="h-2 w-2 animate-pulse rounded-full bg-mint" />
            Available for a trial, starting immediately
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Hi, I&apos;m {profile.shortName}.
            <br />
            <span className="gradient-text">Your Ecommerce &amp; Marketing VA</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            {profile.tagline} I manage Amazon &amp; TikTok Shop, run your social
            content, and because I&apos;m also a full-stack developer, I can
            build the tools your store needs, not just flag them.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-ink transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
            >
              Let&apos;s work together
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-mint hover:text-mint"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-accent hover:text-accent"
            >
              <MailIcon className="h-5 w-5" />
              Email
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="mt-1 text-xs leading-tight text-slate-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative mx-auto w-full max-w-sm animate-fade-up">
          <div className="animate-float relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent via-accent-2 to-mint opacity-30 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-line bg-card shadow-2xl shadow-black/40">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={640}
                height={640}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* floating badges */}
          <div className="glass absolute -left-4 top-10 hidden rounded-xl px-4 py-3 sm:block">
            <div className="text-xs text-slate-400">Marketplaces</div>
            <div className="text-sm font-bold text-white">Amazon · TikTok</div>
          </div>
          <div className="glass absolute -right-4 bottom-12 hidden rounded-xl px-4 py-3 sm:block">
            <div className="text-xs text-slate-400">Also a</div>
            <div className="text-sm font-bold text-white">Full-Stack Dev</div>
          </div>
        </div>
      </div>
    </section>
  );
}
