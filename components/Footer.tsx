import { profile } from "@/lib/data";
import { MailIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-sm font-black text-ink">
            NM
          </span>
          <div>
            <div className="text-sm font-semibold text-white">
              {profile.name}
            </div>
            <div className="text-xs text-slate-500">{profile.role}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-slate-300 transition-colors hover:border-accent hover:text-accent"
          >
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-slate-300 transition-colors hover:border-mint hover:text-mint"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
        Tailwind CSS.
      </p>
    </footer>
  );
}
