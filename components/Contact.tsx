import Reveal from "./Reveal";
import { profile } from "@/lib/data";
import { MailIcon, WhatsAppIcon, ArrowIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-card to-ink-soft p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-2/20 blur-[100px]" />

            <div className="relative grid gap-10 md:grid-cols-[1.2fr_1fr]">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Let&apos;s talk
                </span>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Ready to take the busywork off your plate?
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-slate-300">
                  I&apos;m available <strong className="text-white">20 hours a week</strong> and
                  ready to start a trial immediately. Tell me about your store
                  and where you&apos;re stretched thin — let&apos;s grow your
                  business without the overwhelm.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={profile.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 font-semibold text-ink transition-transform hover:scale-105"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Chat on WhatsApp
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={`mailto:${profile.email}?subject=Let's%20work%20together`}
                    className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-semibold text-slate-100 transition-colors hover:border-accent hover:text-accent"
                  >
                    <MailIcon className="h-5 w-5" />
                    Send an email
                  </a>
                </div>
              </div>

              <div className="space-y-4 self-center">
                <ContactRow
                  icon={<MailIcon className="h-5 w-5" />}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactRow
                  icon={<WhatsAppIcon className="h-5 w-5" />}
                  label="WhatsApp"
                  value={profile.whatsapp}
                  href={profile.whatsappLink}
                />
                <ContactRow
                  icon={<span className="text-base">🕒</span>}
                  label="Availability"
                  value="20 hrs/week · Trial-ready"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-xl border border-line bg-ink/40 px-4 py-3.5 transition-colors hover:border-accent/50">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-ink-soft text-accent">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-slate-500">
          {label}
        </div>
        <div className="truncate text-sm font-medium text-white">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}
