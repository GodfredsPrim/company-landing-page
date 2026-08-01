import {
  ArrowRightIcon,
  BackpackIcon,
  BarChartIcon,
  CheckCircledIcon,
  CodeIcon,
  CommitIcon,
  CubeIcon,
  GlobeIcon,
  HeartIcon,
  HomeIcon,
  LightningBoltIcon,
  MagnifyingGlassIcon,
  OpenInNewWindowIcon,
  PersonIcon,
  SewingPinIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { PageProgress } from "./components/PageProgress";
import { Reveal } from "./components/Reveal";
import { SectionHeading } from "./components/SectionHeading";

const capabilities = [
  {
    icon: MagnifyingGlassIcon,
    title: "Problem Discovery",
    copy: "We study challenges, affected communities and the limits of existing approaches.",
  },
  {
    icon: LightningBoltIcon,
    title: "Product Innovation",
    copy: "We turn validated ideas into focused products with clear users and measurable outcomes.",
  },
  {
    icon: CodeIcon,
    title: "Technology Development",
    copy: "We build secure, intelligent and scalable platforms with modern software and AI.",
  },
  {
    icon: PersonIcon,
    title: "Growth and Partnerships",
    copy: "We work with institutions, communities and investors to launch and scale impact.",
  },
];

const productFeatures = [
  "Curriculum-grounded AI tutoring",
  "WASSCE-style practice questions",
  "Answers, marking and explanations",
  "Personalised learning recommendations",
  "Examination-readiness tracking",
  "Mock examinations and quiz challenges",
  "Teacher and school tools",
  "Digital learning resources",
  "Mobile Money and SMS integration",
];

const projects = [
  {
    name: "Fosogo",
    domain: "fosogo.onrender.com",
    url: "https://fosogo.onrender.com/",
    description: "A community-first platform focused on connecting people to useful services with clarity and trust.",
    logo: "/assets/solvxit-logo.png",
  },
  {
    name: "BroxStudies",
    domain: "broxstudies.com",
    url: "https://broxstudies.com/",
    description: "An AI-powered learning companion built to support WASSCE readiness, practice, and exam confidence.",
    logo: "/assets/solvxit-logo.png",
  },
  {
    name: "Kooqs",
    domain: "kooqs.vercel.app",
    url: "https://kooqs.vercel.app/",
    description: "A modern experience designed to simplify discovery, interaction, and digital engagement for users.",
    logo: "/assets/solvxit-logo.png",
  },
  {
    name: "Salon Pro",
    domain: "salon-pro-brown.vercel.app",
    url: "https://salon-pro-brown.vercel.app/",
    description: "A polished service platform for scheduling, presenting, and growing salon businesses with ease.",
    logo: "/assets/solvxit-logo.png",
  },
  {
    name: "Bisarx",
    domain: "bisarx-8ym0.onrender.com",
    url: "https://bisarx-8ym0.onrender.com/",
    description: "A product concept shaped around practical digital tools for everyday business and customer needs.",
    logo: "/assets/solvxit-logo.png",
  },
  {
    name: "TastyChef",
    domain: "tastychef-weld.vercel.app",
    url: "https://tastychef-weld.vercel.app/",
    description: "A food-forward experience crafted to make recipes, discovery, and culinary inspiration feel effortless.",
    logo: "/assets/solvxit-logo.png",
  },
  {
    name: "GDSS Hackathon",
    domain: "gdss-hackathon.vercel.app",
    url: "https://gdss-hackathon.vercel.app/",
    description: "A collaborative digital experience built for innovation, learning, and community-led problem solving.",
    logo: "/assets/solvxit-logo.png",
  },
  {
    name: "SolidHands",
    domain: "solidhands-4w32.onrender.com",
    url: "https://solidhands-4w32.onrender.com/",
    description: "A practical platform designed to support service delivery, partnerships, and community impact.",
    logo: "/assets/solvxit-logo.png",
  },
  {
    name: "CampusConnect",
    domain: "campusconnect-beta-ruddy.vercel.app",
    url: "https://campusconnect-beta-ruddy.vercel.app/",
    description: "A student-centered product built to connect people, opportunities, and campus communities more effectively.",
    logo: "/assets/solvxit-logo.png",
  },
];

const industries = [
  { icon: BackpackIcon, name: "Education" },
  { icon: HeartIcon, name: "Healthcare" },
  { icon: BarChartIcon, name: "Financial Technology" },
  { icon: GlobeIcon, name: "Agriculture" },
  { icon: HomeIcon, name: "Business Infrastructure" },
  { icon: PersonIcon, name: "Community Development" },
];

const process = [
  ["Discover", "Identify and investigate a meaningful problem."],
  ["Validate", "Speak with affected users and test the assumptions."],
  ["Design", "Create a focused and accessible solution."],
  ["Develop", "Build, test and improve the technology."],
  ["Deliver", "Launch, measure impact and scale responsibly."],
];

const team = [
  {
    name: "Boakye De-Graft Yeboah",
    role: "Chief Executive Officer / Business Lead",
    image: "/assets/solomon-bentum.jpg",
    position: "50% 34%",
    responsibilities: [
      "Leads business strategy and operations",
      "Builds partnerships and manages stakeholders",
      "Handles fundraising, competitions and investor relations",
      "Coordinates the overall team",
    ],
  },
  {
    name: "Godfred Bio",
    role: "Founder & Chief Technology Officer",
    image: "/assets/godfred-bio.jpg",
    position: "50% 30%",
    responsibilities: [
      "Defines the product vision",
      "Leads software architecture and development",
      "Oversees AI, backend, infrastructure and technical decisions",
      "Manages the engineering team and product roadmap",
    ],
  },
  {
    name: "Solomon Okyere Bentum",
    role: "Chief Product Officer / Product Manager",
    image: "/assets/foster-tetteh.jpg",
    position: "50% 24%",
    responsibilities: [
      "Conducts user research",
      "Defines product features and priorities",
      "Creates product requirements and roadmap",
      "Ensures the product solves real user problems",
    ],
  },
  {
    name: "Foster Tetteh",
    role: "Chief Operations Officer / Finance & Administration",
    image: "/assets/boakye-yeboah.jpg",
    position: "50% 25%",
    responsibilities: [
      "Manages day-to-day operations",
      "Oversees budgets and financial records",
      "Coordinates legal, compliance and documentation",
      "Tracks project timelines and team productivity",
    ],
  },
  {
    name: "Rebecca Agyapomaa Forkuoh",
    role: "Chief Marketing Officer / Growth & Community Lead",
    image: "/assets/rebecca-forkuo.jpg",
    position: "50% 27%",
    responsibilities: [
      "Manages branding and social media",
      "Develops marketing campaigns",
      "Builds the user community",
      "Leads customer acquisition and institutional partnerships",
    ],
  },
];

const partnershipAreas = [
  "Product pilots",
  "Institutional adoption",
  "Technology collaboration",
  "Research and validation",
  "Investment and acceleration",
  "Sponsored access and social impact",
];

function App() {
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let interval: number | undefined;
    const startSlideshow = () => {
      window.clearInterval(interval);
      interval = window.setInterval(() => {
        setHeroSlide((current) => (current + 1) % team.length);
      }, 10000);
    };
    const handleVisibility = () => {
      if (document.hidden) {
        window.clearInterval(interval);
      } else {
        startSlideshow();
      }
    };

    startSlideshow();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const activeHeroImage = team[heroSlide];

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <PageProgress />
      <Navigation />

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-grid page-width">
            <Reveal className="hero-copy">
              <p className="hero-tagline">Future-ready innovation</p>
              <h1>Building intelligent products for Africa&apos;s next chapter.</h1>
              <p className="hero-support">
                We create bold, human-centered digital systems that turn complex challenges into practical impact across education, health, and enterprise.
              </p>
              <div className="hero-badges" aria-label="Key strengths">
                <span>AI-native</span>
                <span>Human-centered</span>
                <span>Built in Ghana</span>
              </div>
              <div className="hero-actions">
                <a className="button" href="#products">
                  Explore Our Work <ArrowRightIcon width={18} height={18} />
                </a>
                <a className="button button-secondary" href="#partnerships">
                  Partner With Us
                </a>
              </div>
            </Reveal>

            <Reveal className="hero-visual" delay={0.12}>
              <div className="hero-primary-image">
                <img
                  key={activeHeroImage.image}
                  src={activeHeroImage.image}
                  alt={`${activeHeroImage.name}, ${activeHeroImage.role}`}
                  fetchPriority="high"
                />
              </div>
              <div className="hero-panel" aria-label="SOLVXIT-GH impact overview">
                <div className="hero-panel-header">
                  <p>Impact pulse</p>
                  <span>Live</span>
                </div>
                <div className="hero-panel-grid">
                  <div>
                    <strong>{team[heroSlide].name.split(" ").slice(-1)[0]}</strong>
                    <span>featured leader</span>
                  </div>
                  <div>
                    <strong>4</strong>
                    <span>sectors</span>
                  </div>
                  <div>
                    <strong>100%</strong>
                    <span>product focus</span>
                  </div>
                </div>
              </div>
              <img
                className="hero-secondary-image"
                src="/assets/rebecca-forkuo.jpg"
                alt="Forkuo Agyapomaa Rebecca of SOLVXIT-GH"
                fetchPriority="high"
              />
              <img
                className="hero-texture-image"
                src="/assets/digital-kente-texture.png"
                alt=""
                aria-hidden="true"
              />
            </Reveal>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="page-width about-grid">
            <Reveal>
              <SectionHeading title="We build solutions that matter." />
            </Reveal>
            <Reveal className="about-copy" delay={0.08}>
              <p>
                SOLVXIT-GH brings together technology, research, product
                development, business strategy and partnerships. We study
                problems through the eyes of the people affected, validate
                potential solutions and build for real-world adoption.
              </p>
              <p>
                Our ambition is to create an African innovation company capable
                of launching and scaling products across sectors.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section capabilities" id="what-we-do">
          <div className="page-width">
            <Reveal>
              <SectionHeading
                title="From insight to lasting impact."
                body="Four connected capabilities help us move responsibly from an important problem to a product people can use."
              />
            </Reveal>
            <div className="capability-list">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal className="capability-row" key={item.title} delay={index * 0.06}>
                    <span className="capability-icon">
                      <Icon width={28} height={28} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                    <ArrowRightIcon className="row-arrow" width={22} height={22} />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section product" id="products">
          <div className="page-width">
            <Reveal className="product-intro">
              <p className="eyebrow">Our flagship product</p>
              <h2>BroxStudies</h2>
              <p>
                AI-powered curriculum intelligence and examination readiness
                for Ghanaian SHS, STEM and TVET students.
              </p>
            </Reveal>

            <Reveal className="product-frame" delay={0.08}>
              <img
                src="/assets/broxstudies-dashboard.png"
                alt="BroxStudies dashboard showing a WASSCE readiness plan and AI tutor"
                loading="lazy"
              />
            </Reveal>

            <div className="product-lower">
              <Reveal className="product-copy">
                <p>
                  BroxStudies connects curriculum resources, historical
                  examination patterns and student performance data to deliver
                  grounded tutoring, structured practice, marking and personal
                  recommendations.
                </p>
                <div className="product-actions">
                  <a
                    className="button"
                    href="https://broxstudies.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit BroxStudies <ArrowRightIcon width={18} height={18} />
                  </a>
                  <a className="text-link" href="https://broxstudies.com/" target="_blank" rel="noreferrer">
                    Learn About the Product
                  </a>
                </div>
              </Reveal>
              <Reveal className="feature-cloud" delay={0.08}>
                {productFeatures.map((feature) => (
                  <span key={feature}>
                    <CheckCircledIcon width={17} height={17} /> {feature}
                  </span>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section project-portfolio" id="project-portfolio">
          <div className="page-width">
            <Reveal>
              <SectionHeading
                title="Products built across real needs"
                body="Explore the growing portfolio of digital products and platforms created by the SOLVXIT-GH team."
              />
            </Reveal>
            <div className="project-grid">
              {projects.map((project, index) => (
                <Reveal className="project-card" key={project.url} delay={index * 0.04}>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <div className="project-card-top">
                      <div className="project-logo-wrap">
                        <img src={project.logo} alt={`${project.name} logo`} loading="lazy" />
                      </div>
                      <span className="project-type">Product site</span>
                    </div>
                    <div className="project-card-content">
                      <strong>{project.name}</strong>
                      <p>{project.description}</p>
                      <span className="project-domain">{project.domain}</span>
                      <OpenInNewWindowIcon className="project-open" width={20} height={20} />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section industries">
          <div className="page-width">
            <Reveal>
              <SectionHeading
                title="Innovation without sector boundaries"
                body="We enter a sector only when we understand the problem and believe technology can create meaningful, sustainable improvement."
              />
            </Reveal>
            <div className="industry-grid">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <Reveal className="industry-item" key={industry.name} delay={index * 0.04}>
                    <Icon width={30} height={30} />
                    <span>{industry.name}</span>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section process">
          <div className="page-width">
            <Reveal>
              <SectionHeading title="How we turn problems into products" />
            </Reveal>
            <div className="process-track">
              {process.map(([title, copy], index) => (
                <Reveal className="process-item" key={title} delay={index * 0.06}>
                  <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section team" id="team">
          <div className="page-width">
            <Reveal>
              <SectionHeading
                title="The people building SOLVXIT-GH"
                body="A multidisciplinary founding team aligned around useful technology and responsible growth."
              />
            </Reveal>
            <div className="team-grid">
              {team.map((member, index) => (
                <Reveal className="team-card" key={member.name} delay={index * 0.05}>
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    style={{ objectPosition: member.position }}
                    loading="lazy"
                  />
                  <div className="team-copy">
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <ul className="team-responsibilities">
                      {member.responsibilities.map((responsibility) => (
                        <li key={responsibility}>
                          <CheckCircledIcon width={15} height={15} />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section purpose">
          <div className="page-width purpose-grid">
            <Reveal className="purpose-panel vision">
              <BarChartIcon width={34} height={34} />
              <h2>Our Vision</h2>
              <p>
                To become a leading African innovation company creating
                technology-driven solutions that improve lives and expand
                opportunities.
              </p>
            </Reveal>
            <Reveal className="purpose-panel mission" delay={0.08}>
              <CommitIcon width={34} height={34} />
              <h2>Our Mission</h2>
              <p>
                To discover meaningful problems, develop practical products and
                deliver scalable solutions designed around African realities.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section partnerships" id="partnerships">
          <div className="page-width partnership-grid">
            <Reveal className="partnership-copy">
              <SectionHeading title="Great solutions are built through strong partnerships." />
              <p>
                We welcome schools, businesses, government institutions,
                development organisations, technology partners, investors and
                communities committed to solving meaningful problems.
              </p>
              <a className="button" href="mailto:solvxitgh@gmail.com">
                Start a Conversation <ArrowRightIcon width={18} height={18} />
              </a>
            </Reveal>
            <Reveal className="partnership-list" delay={0.1}>
              {partnershipAreas.map((area) => (
                <div key={area}>
                  <PersonIcon width={22} height={22} />
                  <span>{area}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section final-cta" id="contact">
          <div className="page-width final-cta-inner">
            <Reveal>
              <CubeIcon width={42} height={42} />
              <h2>Let&apos;s build solutions that move Africa forward.</h2>
              <p>
                If you represent an institution, community, business or
                investment organisation, we are ready to explore problems worth
                solving.
              </p>
              <div className="final-actions">
                <a className="button" href="mailto:solvxitgh@gmail.com">
                  Email Our Team
                </a>
                <a className="button button-secondary" href="tel:+233599170775">
                  Call Our Team
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact-details">
        <div className="page-width footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-crop">
              <img src="/assets/solvxit-logo.png" alt="SOLVXIT-GH logo" />
            </div>
            <p>
              A Ghanaian technology and innovation company building practical
              solutions for meaningful African challenges.
            </p>
          </div>
          <div>
            <h2>Navigate</h2>
            <a href="#about">About</a>
            <a href="#what-we-do">What We Do</a>
            <a href="#products">Products</a>
            <a href="#team">Team</a>
          </div>
          <div>
            <h2>Products</h2>
            <a href="https://broxstudies.com/" target="_blank" rel="noreferrer">
              BroxStudies
            </a>
            <a href="#project-portfolio">Project Portfolio</a>
          </div>
          <div>
            <h2>Contact</h2>
            <a href="mailto:solvxitgh@gmail.com">solvxitgh@gmail.com</a>
            <a href="tel:+233599170775">0599170775</a>
            <a href="tel:+233203623689">0203623689</a>
            <span className="location"><SewingPinIcon width={17} height={17} /> Cape Coast, Ghana</span>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} SOLVXIT-GH. All rights reserved.</span>
          <div>
            <span>Privacy Policy: To be provided</span>
            <span>Terms of Use: To be provided</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
