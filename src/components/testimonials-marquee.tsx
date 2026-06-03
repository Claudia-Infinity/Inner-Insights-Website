import Link from "next/link";
import Image from "next/image";

const TESTIMONIALS = [
  // Coaching client testimonials — Claudia "The Imperfect Coach"
  { quote: "Working with Claudia has been a game-changer. Her intuitive strategies are gold & her vibrant energy is infectious. I have achieved milestones I never thought possible!",                          name: "Juliana Silva",    role: "Health Communications Professional · Albuquerque, NM",         photo: "/images/testimonials/Juliana Silva.jpg" },
  { quote: "Claudia's approach to coaching is both compassionate and results driven. I have found a newfound clarity and direction in my career, all thanks to her guidance.",                                   name: "Nina Van Houten",  role: "Artist & Creative · San Jose, CA",                              photo: "/images/testimonials/Nina Van Houten.jpg" },
  { quote: "Claudia encouraged me to dream big and then equipped me with the intuitive tools to make those dreams a reality. I feel more empowered and inspired than ever before.",                              name: "Bailey D. Dupont", role: "Public Relations Director · Houston, TX",                       photo: "/images/testimonials/Bailey DuPont.jpg" },
  { quote: "Working with Claudia gave me the confidence I needed to transition from the gaming world to becoming a full-time spiritual entrepreneur. I am happy and living my life purpose.",                    name: "Derrick Hobbs",    role: "App and Game Developer · Los Angeles, CA",                      photo: "/images/testimonials/Derrick Hobbs.jpg" },
  { quote: "I dreamt of finding a Nubian King to marry but lacked the self-confidence to put myself out there. Claudia lovingly (and hilariously) coached me to success. I am ENGAGED y'all!",                   name: "Claudia Alvares",  role: "Hairstylist & Soon-to-Be Bride · Dallas, TX",                   photo: "/images/testimonials/Claudia Alvares.jpg" },
  { quote: "Claudia's unique insights and her attention to the 'not so obvious' lends to her overall spirit and excellence as an intuitive business acceleration coach. She is truly exceptional.",              name: "Leslie Steffenson",role: "Interior Design Business Owner · Brooklyn, NY",                 photo: "/images/testimonials/Leslie Steffenson.jpg" },
  { quote: "Working with Claudia at the VIP level manifested a miracle. Her non-judgmental coaching sessions saved my marriage. She gave us the gifts of imperfection & grace.",                                 name: "Marjorie Brown",   role: "Retired Professor · Miami, FL",                                 photo: "/images/testimonials/Marjorie Brown.jpg" },
  { quote: "I don't make any major business decisions without consulting with Claudia. She is my secret weapon. I call her 'The Woo of Wall Street.' She developed my insights!",                                name: "Bradley H. Welch", role: "Financial Advisor · New York, NY",                              photo: "/images/testimonials/Bradley Welch.jpg" },
  { quote: "Claudia encouraged me to pursue my creativity and equipped me with the tools to transition from school teaching to a $3M+ Content Creator living with freedom.",                                     name: "Marianna Ortiz",   role: "Content Creator · Venezuela",                                   photo: "/images/testimonials/Marianna Ortiz.jpg" },

  // Reading / healing / class client testimonials
  { quote: "When I was at my lowest, Claudia helped me see the situation for what it was. Her advice on how to bring abundance to me worked and still is working!",            name: "Cindy G.",    role: "Texas",          photo: "/images/testimonials/Cindy G.jpg" },
  { quote: "Claudia is the most accessible, understanding, calm human being I have ever encountered. She often knows what I need long before I am aware of it.",                name: "Nicole B.",   role: "Texas",          photo: "/images/testimonials/Nicole B.jpg" },
  { quote: "Her dedication to her clients and passion for what she does is unmatched. Meeting Claudia has been life changing.",                                                  name: "Tammiko J.",  role: "Texas",          photo: "/images/testimonials/Tammiko J.jpg" },
  { quote: "Her messages are spot on and incredibly insightful. She really helps you understand and hone your gifts. An amazing person with such a big heart.",                  name: "Mayra L.",    role: "Texas",          photo: "/images/testimonials/Mayra L.jpg" },
  { quote: "Claudia validated so many things going on in my life, even from thousands of miles away. The world is blessed to have a soul like hers.",                            name: "Patricia M.", role: "New York",       photo: "/images/testimonials/Patricia M.jpg" },
  { quote: "She is truly the real deal. Always open, honest, transparent. I walked away amazed at how she talked to me about things I hadn't even shared.",                       name: "Eleanor R.",  role: "Texas",          photo: "/images/testimonials/Eleanor R.jpg" },
  { quote: "Every card reading leaves me feeling light and empowered. You feel safe to be vulnerable and learn. Her tools for protection are part of my daily practice.",         name: "Lauren M.",   role: "Texas",          photo: "/images/testimonials/Lauren M.jpg" },
  { quote: "I can't thank Claudia enough. Her classes and the safe space she creates to practice our senses have helped me become more in tune with my spiritual self.",         name: "Laura L.",    role: "Texas",          photo: "/images/testimonials/Laura L.jpg" },
];

function Card({ quote, name, role, photo }: typeof TESTIMONIALS[number]) {
  return (
    <article className="relative flex w-[22rem] flex-shrink-0 flex-col gap-5 rounded-2xl border border-white/5 bg-surface/60 p-7 shadow-xl backdrop-blur-sm">
      <svg width="28" height="22" viewBox="0 0 28 22" className="text-gold/70" fill="currentColor" aria-hidden>
        <path d="M0 22V10.9C0 7.9 0.6 5.4 1.9 3.4 3.1 1.4 5 0 7.3 0l1.7 3.3C7.7 3.7 6.8 4.4 6.2 5.3c-0.6 0.9-0.9 1.9-0.9 3h3.6V22H0zm15.3 0V10.9c0-3 0.6-5.5 1.9-7.5C18.4 1.4 20.3 0 22.6 0l1.7 3.3c-1.3 0.4-2.2 1.1-2.8 2-0.6 0.9-0.9 1.9-0.9 3h3.5V22h-8.8z" />
      </svg>
      <p className="flex-1 text-sm leading-relaxed text-ink/90">{quote}</p>
      <footer className="flex items-center gap-3 border-t border-white/5 pt-4">
        <span className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-gold/30">
          <Image src={photo} alt={name} fill sizes="44px" className="object-cover" />
        </span>
        <div>
          <p className="text-sm font-medium text-white">{name}</p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold/80">{role}</p>
        </div>
      </footer>
    </article>
  );
}

export default function TestimonialsMarquee() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Testimonials</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl italic font-medium">
          In their own <span className="text-plum-soft">words</span>
        </h2>
      </div>

      <div className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <Card key={i} {...t} />
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-medium text-ink transition hover:border-gold hover:bg-gold/10"
        >
          More Testimonials
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
