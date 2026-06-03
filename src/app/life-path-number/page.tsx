import type { Metadata } from "next";
import Image from "next/image";
import LifePathNumberForm from "@/components/life-path-number-form";

export const metadata: Metadata = {
  title: "Free Life Path Number Assessment",
  description:
    "Enter your birthday and discover the core energy guiding your life. Your Life Path Number reveals natural strengths, hidden challenges, and the soul lessons shaping your journey.",
};

export default function LifePathNumberPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(201,165,102,0.12),transparent_60%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_80%,rgba(151,71,255,0.12),transparent_55%)]" aria-hidden />

      <section className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Free Guide</p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl italic font-medium leading-tight">
              What is your <span className="text-plum-soft">life path number</span>—really?
            </h1>
            <div className="mt-5 space-y-4 text-sm sm:text-base text-muted leading-relaxed">
              <p>
                You&apos;ve always felt there was more to your story than coincidence. Patterns
                that repeat. Lessons that won&apos;t let go. A quiet sense that your life is trying
                to teach you something important.
              </p>
              <p>
                Your <span className="italic text-plum-soft">Life Path Number</span>{" "}
                reveals the core energy you&apos;re here to embody — your natural strengths, hidden challenges, and the
                soul lessons shaping your journey across a lifetime.
              </p>
              <p>
                It&apos;s not just a number; it&apos;s a mirror reflecting who you are becoming and
                how you&apos;re meant to move through the world.
              </p>
              <p>
                Enter your birthday below to discover your number, then drop your email and receive
                the full <span className="italic text-plum-soft">Life Path Number Guide</span> — a
                grounded, insightful introduction to the numerological archetypes that influence your
                purpose, relationships, career, and personal growth. Free.
              </p>
            </div>

            <LifePathNumberForm source="dedicated-page" />
          </div>

          <div className="relative md:sticky md:top-44">
            <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(201,165,102,0.25),transparent_65%)] blur-2xl" aria-hidden />
            <div className="relative aspect-[4/5] [mask-image:radial-gradient(ellipse_at_50%_45%,black_55%,transparent_92%)] [-webkit-mask-image:radial-gradient(ellipse_at_50%_45%,black_55%,transparent_92%)]">
              <Image
                src="/images/services/Love Your Life.jpg"
                alt="Claudia Romo"
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-surface/30 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Want deeper, personalized insight?</p>
          <p className="mt-3 text-base text-ink/90 leading-relaxed">
            Your Life Path Number comes fully alive when it&apos;s interpreted in context — your
            experiences, your cycles, your questions, and where you are right now.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <a
              href="https://innerinsights.simplybook.me/v2/#book/category/1/count/1/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-gold/30 bg-surface/40 p-5 transition hover:border-gold hover:bg-surface/60"
            >
              <p className="text-base font-medium text-ink">🔮 Book a Card Reading</p>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Gain personalized insight into how your Life Path Number is currently expressing
                itself, what lessons are active, and how to work with your natural energy instead of
                against it.
              </p>
            </a>
            <a
              href="/#services"
              className="block rounded-xl border border-plum/30 bg-surface/40 p-5 transition hover:border-plum hover:bg-surface/60"
            >
              <p className="text-base font-medium text-ink">🌱 Explore Life Coaching</p>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Use your Life Path Number as a foundation for conscious growth, aligned
                decision-making, and long-term transformation — guided, supported, and tailored to you.
              </p>
            </a>
          </div>
          <p className="mt-6 text-sm italic text-plum-soft">Clarity is the first step. Alignment is the next.</p>
        </div>
      </section>
    </div>
  );
}
