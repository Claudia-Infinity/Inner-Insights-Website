type FAQGuide = { label: string; href: string };
type FAQ = { q: string; a: string[]; guides?: FAQGuide[]; cta?: { label: string; href: string } };

// Answers are verbatim from Claudia's FAQ documents.
const FAQS: FAQ[] = [
  {
    q: "Can I book my sessions on an App?",
    a: [
      "Yes. Download the Inner Insights Booking App on your iPhone or Android smartphone.",
      "Click the button below to begin the download process — or copy the link and paste it into your favorite browser to install the app on your smartphone, tablet, or desktop computer.",
      "Below are easy-to-follow booking app guides, complete with screenshots, to help you schedule card readings, energy healings, life coaching, and coach mentorship sessions.",
    ],
    cta: { label: "Download the Booking App", href: "https://innerinsights.simplybook.me/v2/app" },
    guides: [
      { label: "Inner Insights Client Booking App Guide (PDF)",          href: "https://drive.google.com/file/d/1nA0NbB5JQb--Wns2f-A3paPWL2eUheek/view?usp=drive_link" },
      { label: "The Imperfect Coach Client Booking App Guide (PDF)",     href: "https://drive.google.com/file/d/1lm3_5WIZNeG2VQeodfX-6MGMym-dEbB0/view?usp=drive_link" },
      { label: "The Imperfect Coach Mentorship Booking App Guide (PDF)", href: "https://drive.google.com/file/d/1VejB5hBOJcIwm4RApvjTzmQgRcWvZuW3/view?usp=drive_link" },
    ],
  },
  {
    q: "Why should I do a card reading?",
    a: [
      "Tarot card readings are a tool to enlighten you about the choices at your disposal and the possibilities that each one has depending on the path you decide to take. The guidance that you get from a reading should help you take control of your life and give clarity to make informed decisions. To get the most out of the card reading sessions, you need to have an open mind, come prepared with questions, and trust the reading process.",
    ],
  },
  {
    q: "Why explore psychic development coaching?",
    a: [
      "Intuitive people often have untapped or underdeveloped spiritual gifts, and without an understanding of what to do with that power, life can get exhausting or confusing. But as with any other skill, practice matters. So does a good Teacher!",
      "If you want to know what to do with your gut instincts or if you're super curious and ready to start poking around on the other side, get started today and book a session with Claudia.",
    ],
  },
  {
    q: "Why try energy healing?",
    a: [
      "Everyone can benefit from Energy Healing. Whether you have been diagnosed with a physical disease or are experiencing physical discomfort, are struggling with mental or emotional difficulties, or are looking to bring your mind, body, and spirit into alignment, you can benefit from this service. Energy Healing opens you up to a deeper sense of ease, well-being, and purpose, and brings you back to your true self.",
      "Energy Healing is supportive for patients in all phases of traditional medical care and treatment. It is effective as an independent therapy and is also extremely successful as an adjunct therapy to traditional healthcare.",
    ],
  },
  {
    q: "Why smudge your space?",
    a: [
      "If you're feeling stuck, negative, sluggish, or even downright depressed, it may be due to stagnant energy in your auric field. Your auric fields include your emotional, energetic, mental, spiritual, or physical body, and your environment, whether it's your home, office, or other physical space. Stagnant or negative energy can have extremely detrimental effects on your mental and physical state and is even believed to manifest into things like a lack of happiness and success as well as pain and disease.",
    ],
  },
  {
    q: "Why work with an intuitive life coach?",
    a: [
      "There is no better time than now to start living the life you've always desired but may be too scared to wish for.",
      "Like a lot of people, the desire to be perfect or wait for a perfect time to start trapped me for many years in unhealthy relationships, in a dysmorphic body image, in financial fear, and in a corporate healthcare career that left me feeling emotionally drained, stressed, and physically ill. Perfectionism kept me from living my life with joy.",
      "You see, when we overanalyze our desires, and keep finding flaws, it creates a bottleneck in your flow of abundance and creates resistance to finding joy, love, money, life purpose, and connection. Perfectionism ultimately hurts you and keeps you from making forward progress.",
      "Here's the secret that I discovered and ultimately freed me. You don't have to be perfect to BE HAPPY. That's why I call myself \"The Imperfect Coach.\" I can teach you to live a fabulous life imperfectly and with great delight!",
    ],
  },
  {
    q: "Legal Disclaimer",
    a: [
      "Please be advised that sessions cannot predict, forecast, diagnose, or provide information with absolute certainty. A session should be for your own enjoyment and spiritual growth. I cannot claim 100% accuracy due to things unforeseen, free-will, a change during life events or an element of human error.",
      "No guarantees or assurances of any kind are given, and Claudia Romo will not be held accountable for any interpretations or decisions made by recipients based on information provided during sessions. Also, due to my ethics regarding privacy, I will NEVER share the contents and details of personal sessions in a public forum or within social media unless you give consent.",
      "* For medical concerns, please consult with a licensed Physician.",
      "* For legal matters, please contact a licensed Attorney.",
    ],
  },
  {
    q: "Emergency 24-Hour Notice Cancellation Policy",
    a: [
      "In case you have an emergency or illness and cannot make your appointment, you must give Claudia 24-hour notice to receive a full refund.",
      "Please notify Claudia by telephone by calling or texting 214-686-5188. Leave a message with your name, date and time of appointment or send an email with the requested details to: claudia@innerinsights.shop",
      "Claudia will collaborate with you to reschedule your appointment at no extra cost.",
    ],
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 scroll-mt-40 scroll-reveal">
      <div className="mx-auto mb-12 flex max-w-3xl items-center gap-6 px-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/50" aria-hidden />
        <h2 className="font-display text-3xl sm:text-4xl italic font-medium whitespace-nowrap">
          Frequently <span className="text-plum-soft">asked</span>
        </h2>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/50" aria-hidden />
      </div>

      <div className="space-y-3">
        {FAQS.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-white/5 bg-surface/40 px-5 py-4 transition hover:border-gold/30 open:border-gold/40 open:bg-surface/70"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-ink marker:content-['']">
              <span>{f.q}</span>
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform duration-300 group-open:rotate-45">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <line x1="6" y1="1" x2="6" y2="11" />
                  <line x1="1" y1="6" x2="11" y2="6" />
                </svg>
              </span>
            </summary>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              {f.a.map((para, i) => <p key={i}>{para}</p>)}
              {f.cta && (
                <p>
                  <a
                    href={f.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-gold px-5 py-2 text-sm font-semibold text-background transition hover:bg-gold/90"
                  >
                    {f.cta.label}
                  </a>
                </p>
              )}
              {f.guides && f.guides.length > 0 && (
                <ul className="mt-2 space-y-2">
                  {f.guides.map((g) => (
                    <li key={g.href}>
                      <a
                        href={g.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-plum-soft underline underline-offset-4 hover:text-gold"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <path d="M14 2v6h6" />
                        </svg>
                        {g.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
