import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Testimonials" };

const ALL = [
  // Coaching client testimonials — Claudia "The Imperfect Coach"
  { quote: "Working with Claudia has been a game-changer. Her intuitive strategies are gold & her vibrant energy is infectious. I have achieved milestones I never thought possible!", name: "Juliana Silva", role: "Health Communications Professional · Albuquerque, NM", photo: "/images/testimonials/Juliana Silva.jpg" },
  { quote: "Claudia's approach to coaching is both compassionate and results driven. I have found a newfound clarity and direction in my career, all thanks to her guidance.", name: "Nina Van Houten", role: "Artist & Creative · San Jose, CA", photo: "/images/testimonials/Nina Van Houten.jpg" },
  { quote: "Claudia encouraged me to dream big and then equipped me with the intuitive tools to make those dreams a reality. I feel more empowered and inspired than ever before.", name: "Bailey D. Dupont", role: "Public Relations Director · Houston, TX", photo: "/images/testimonials/Bailey DuPont.jpg" },
  { quote: "Working with Claudia gave me the confidence I needed to transition from the gaming world to becoming a full-time spiritual entrepreneur. I am happy and living my life purpose.", name: "Derrick Hobbs", role: "App and Game Developer · Los Angeles, CA", photo: "/images/testimonials/Derrick Hobbs.jpg" },
  { quote: "I dreamt of finding a Nubian King to marry but lacked the self-confidence to put myself out there. Claudia lovingly (and hilariously) coached me to success. I am ENGAGED y'all!", name: "Claudia Alvares", role: "Hairstylist & Soon-to-Be Bride · Dallas, TX", photo: "/images/testimonials/Claudia Alvares.jpg" },
  { quote: "Claudia's unique insights and her attention to the 'not so obvious' lends to her overall spirit and excellence as an intuitive business acceleration coach. She is truly exceptional.", name: "Leslie Steffenson", role: "Interior Design Business Owner · Brooklyn, NY", photo: "/images/testimonials/Leslie Steffenson.jpg" },
  { quote: "Working with Claudia at the VIP level manifested a miracle. Her non-judgmental coaching sessions saved my marriage. She gave us the gifts of imperfection & grace.", name: "Marjorie Brown", role: "Retired Professor · Miami, FL", photo: "/images/testimonials/Marjorie Brown.jpg" },
  { quote: "I don't make any major business decisions without consulting with Claudia. She is my secret weapon. I call her 'The Woo of Wall Street.' She developed my insights!", name: "Bradley H. Welch", role: "Financial Advisor · New York, NY", photo: "/images/testimonials/Bradley Welch.jpg" },
  { quote: "Claudia encouraged me to pursue my creativity and equipped me with the tools to transition from school teaching to a $3M+ Content Creator living with freedom.", name: "Marianna Ortiz", role: "Content Creator · Venezuela", photo: "/images/testimonials/Marianna Ortiz.jpg" },

  // Reading / healing / class client testimonials
  { quote: "When I was at my lowest, Claudia helped me see the situation for what it was. The angelic card readings and Vision Board class helped guide me in the right direction. Her advice on how to bring abundance to me worked and still is working! Everyone around me can't believe how lucky I am. I am still experiencing on-going miracles! Claudia is the best! She uses God's light to guide her.", name: "Cindy G.", role: "Texas, USA", photo: "/images/testimonials/Cindy G.jpg" },
  { quote: "Claudia is the most accessible, understanding, calm human being I have ever encountered. She often knows what I need/feel long before I am aware of it. Claudia's classes helped this beginner tap into my inner power. I felt comfortable from the first second I entered her presence. I left every class feeling at peace, connected with my peers and most of all with a better understanding of myself.", name: "Nicole B.", role: "Texas, USA", photo: "/images/testimonials/Nicole B.jpg" },
  { quote: "Claudia's dedication to her clients and passion for what she does is unmatched. She sets forth the best intention and seeks to offer her best self in all aspects of services she offers. Classes and literature provided are well organized and professional. Meeting Claudia has been life changing.", name: "Tammiko J.", role: "Texas, USA", photo: "/images/testimonials/Tammiko J.jpg" },
  { quote: "Claudia is absolutely exceptional. She makes you feel at ease and completely comfortable during your readings. Her messages she receives are spot on and very insightful. During class she really helps you understand and hone your gifts. She always takes the time to answer questions. All around she is an amazing person with such a big heart!", name: "Mayra L.", role: "Texas, USA", photo: "/images/testimonials/Mayra L.jpg" },
  { quote: "Claudia is very intuitive, helpful, caring and kind. She validated a lot of things that were going on in my life even while being 1000s of miles apart. Her guidance is very enriching to better one's life. The world is very blessed to have a soul like hers, roaming it. You can just feel her sunny spirit.", name: "Patricia M.", role: "New York, USA", photo: "/images/testimonials/Patricia M.jpg" },
  { quote: "I am so happy to share my experience with Claudia. She is truly the real deal. She has always been open, honest, and most important to me, transparent in her readings. Her messages just flow freely through her. Her delivery is exceptional. Claudia's positivity prevails in all she does.", name: "Eleanor R.", role: "Texas, USA", photo: "/images/testimonials/Eleanor R.jpg" },
  { quote: "Claudia's channeled readings through loving Angelic Beings has been a blessing in my life. Also, her intuitive classes have given me plenty of knowledge and tools to support my Reiki practice. I highly recommend all her products, classes, and card readings. Thank you, Claudia!", name: "Norma G.M.", role: "Puerto Rico", photo: "/images/testimonials/Norma GM.jpg" },
  { quote: "I came to Claudia for help on my resume. She took what I had and created an intuitive professional resume that I was proud to present. After submitting my resume to several companies, I received an immediate reply for an interview followed by a successful job offer during the COVID pandemic.", name: "Monica R.L.", role: "Texas, USA", photo: "/images/testimonials/Monica RL.jpg" },
  { quote: "Working with Claudia there is only one word to describe her sessions: Amazing. Not only do you leave each card reading and class feeling light and positive inside, but you also feel empowered to seek out your greatest and highest good using your own gifts and strengths. Things are discussed that there is no way she could have prior knowledge to.", name: "Lauren M.", role: "Texas, USA", photo: "/images/testimonials/Lauren M.jpg" },
  { quote: "My resume was pretty basic with details that read more like a job ad than a true resume. Claudia was able to highlight my strengths and format it intuitively. After working with her, I received a call to apply for a position that I didn't know existed and got an offer less than 2 weeks later. The director noted that it was 'the best resume she had seen!'", name: "Kera M.", role: "Texas, USA", photo: "/images/testimonials/Kera M.jpg" },
  { quote: "I was looking for an eye catching, yet professional resume and Claudia delivered exactly what I was looking for! My skills showcased in my new resume have afforded me multiple interviews and job offers with Claudia's guidance. She is easy to work with, listens and provides great feedback. I am a forever client!", name: "Tausha C.", role: "California, USA", photo: "/images/testimonials/Tausha C.jpg" },
  { quote: "I can't thank Claudia enough for the amazing classes she has held, as well as the safe place she provides for us to practice our senses. I have learned so much with the different techniques that she has shown us in class. I have become more in tuned with my spiritual self.", name: "Laura L.", role: "Texas, USA", photo: "/images/testimonials/Laura L.jpg" },
  { quote: "Claudia is awesome! She's an extremely talented intuitive. Her gifts are extraordinary! She has a calm and pleasant personality. You'll be amazed by her card reading and the information she receives. Open your heart and give her an opportunity to guide you. You'll be glad you did.", name: "Rosa V.", role: "Texas, USA", photo: "/images/testimonials/Rosa V.jpg" },
  { quote: "Since attending Claudia's intuitive development classes I have become more confident in myself. I've learned to be independent, self-aware, and better at expressing myself. I've learned how to pay attention to my intuition and how to react to my surroundings.", name: "Elsa L.", role: "Texas, USA", photo: "/images/testimonials/Elsa L.jpg" },
  { quote: "I am personally very skeptical when it comes to choosing services such as the ones Claudia offers. Claudia has been like a mirror to me and has taken the time to teach me, guide me, and coach me. She is a great teacher and a humble individual who serves her clients with an open heart. I genuinely believe Claudia is living her life purpose!", name: "Laura O.", role: "Texas, USA", photo: "/images/testimonials/Laura O.jpeg" },
  { quote: "I've had the pleasure of knowing Claudia for only a short time, but her insight and patience has helped me dramatically over the last year. I've made many adjustments to my life with her spiritual mentoring and professional resume coaching. I truly recommend her as an excellent source of information and inspiration.", name: "Craig M.", role: "Texas, USA", photo: "/images/testimonials/Craig M.jpg" },
  { quote: "Claudia is an amazing Spiritual Channel and Reader. Her compassion, wisdom, empathy, and respect permeate in all that she does as a Channeler and Medium. Her centeredness allows her to tap into the Highest Guidance available to you.", name: "Shirley T.", role: "Florida, USA", photo: "/images/testimonials/Shirley T.jpg" },
  { quote: "Claudia Romo is someone you meet once in a lifetime. Her beautiful energy and Angelic presence makes one feel very comfortable and safe. Her card readings are accurate and detailed. The information has made a big difference in my life. She is truly a gift from God.", name: "Vanessa E.", role: "Texas, USA", photo: "/images/testimonials/Vanessa E.jpg" },
  { quote: "I'm eternally grateful to have crossed paths with Claudia. I was already a positive and happy person but never realized I often sabotaged my wants and desires. Claudia immediately felt my Angels speaking to her. I'm eternally grateful for the advice she shared.", name: "Deyis V.", role: "Texas, USA", photo: "/images/testimonials/Deyis V.jpg" },
  { quote: "Her classes in learning to read personal cards, create vision boards, and cleanse our spaces have changed the way we work, personally and in business. The result has been excellent. Thanks to the way she has taught us to manage our intuition and envision everything we can achieve.", name: "Lorena R.", role: "México", photo: "/images/testimonials/Lorena R.jpg" },
];

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <header className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Kind Words</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl italic font-medium">
          In their <span className="text-plum-soft">own words</span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-muted">
          A decade of readings, classes, and coaching. Here&apos;s what it has
          meant to the people I&apos;ve walked alongside.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {ALL.map((t, i) => (
          <article
            key={i}
            className="relative flex flex-col gap-5 rounded-2xl border border-white/5 bg-surface/60 p-7 shadow-xl scroll-reveal"
          >
            <svg width="28" height="22" viewBox="0 0 28 22" className="text-gold/70" fill="currentColor" aria-hidden>
              <path d="M0 22V10.9C0 7.9 0.6 5.4 1.9 3.4 3.1 1.4 5 0 7.3 0l1.7 3.3C7.7 3.7 6.8 4.4 6.2 5.3c-0.6 0.9-0.9 1.9-0.9 3h3.6V22H0zm15.3 0V10.9c0-3 0.6-5.5 1.9-7.5C18.4 1.4 20.3 0 22.6 0l1.7 3.3c-1.3 0.4-2.2 1.1-2.8 2-0.6 0.9-0.9 1.9-0.9 3h3.5V22h-8.8z" />
            </svg>
            <p className="flex-1 text-sm leading-relaxed text-ink/90">{t.quote}</p>
            <footer className="flex items-center gap-3 border-t border-white/5 pt-4">
              <span className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-gold/30">
                <Image src={t.photo} alt={t.name} fill sizes="48px" className="object-cover" />
              </span>
              <div>
                <p className="text-sm font-medium text-white">{t.name}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold/80">{t.role}</p>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
