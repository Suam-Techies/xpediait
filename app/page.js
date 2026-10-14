import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconBriefcase,
  IconCheck,
  IconCloud,
  IconDatabase,
  IconLaptop,
  IconLock,
  IconMonitor,
  IconNetwork,
  IconSettings,
  IconShield,
} from "./components/Icons";
import styles from "./page.module.css";

const services = [
  {
    icon: IconMonitor,
    title: "IT Support",
    description:
      "Responsive help for everyday computer, software, and technology issues.",
    href: "/#services-section",
  },
  {
    icon: IconSettings,
    title: "Managed IT",
    description:
      "Proactive maintenance and ongoing support for the technology your team relies on.",
    href: "/#services-section",
  },
  {
    icon: IconLock,
    title: "Cybersecurity",
    description:
      "Practical safeguards that help protect your devices, accounts, and business data.",
    href: "/#services-section",
  },
  {
    icon: IconNetwork,
    title: "Networks & Wi-Fi",
    description:
      "Reliable connectivity, network troubleshooting, and infrastructure support.",
    href: "/#services-section",
  },
  {
    icon: IconCloud,
    title: "Cloud Services",
    description:
      "Support for cloud tools, collaboration, user access, and migrations.",
    href: "/#services-section",
  },
  {
    icon: IconDatabase,
    title: "Backup & Recovery",
    description:
      "Backup planning and recovery readiness to help keep important data within reach.",
    href: "/#services-section",
  },
  {
    icon: IconLaptop,
    title: "Device Management",
    description:
      "Setup, maintenance, and support for the computers and devices your team uses.",
    href: "/#services-section",
  },
  {
    icon: IconBriefcase,
    title: "IT Consulting",
    description:
      "Straightforward guidance to align technology decisions with business priorities.",
    href: "/#why-xpedia",
  },
];

const strengths = [
  {
    number: "01",
    title: "People-first support",
    description:
      "Clear, approachable help that meets your team where they are.",
  },
  {
    number: "02",
    title: "Proactive by design",
    description:
      "Thoughtful maintenance and planning help prevent avoidable disruption.",
  },
  {
    number: "03",
    title: "Security-minded",
    description:
      "Security best practices are considered in day-to-day IT decisions.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description: "Share your challenge, goals, and what your team depends on.",
  },
  {
    number: "02",
    title: "Get a clear plan",
    description: "We’ll help identify a practical path forward for your business.",
  },
  {
    number: "03",
    title: "Move forward with confidence",
    description: "Get the support and guidance you need to keep work moving.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className="overline">IT services built around your business</span>
            <h1 className={styles.heroTitle}>
              Technology that works.
              <br />
              Support that cares.
            </h1>
            <p className={styles.heroSub}>
              XPediaIT helps businesses stay secure, productive, and ready for
              what&apos;s next with dependable IT support and managed services.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Talk to our team
                <IconArrowRight size={18} />
              </Link>
              <a href="#services-section" className="btn btn-outline btn-lg">
                Explore services
              </a>
            </div>
            <div className={styles.heroMeta}>
              <span>
                <IconShield size={17} color="var(--cyan-400)" />
                People-first IT support
              </span>
              <span>
                <IconCheck size={17} color="var(--cyan-400)" />
                Practical, proactive solutions
              </span>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/hero-it-environment.jpg"
              alt="Modern IT environment with monitors, networking, and business technology setup"
              width={640}
              height={400}
              priority
              className={styles.heroImg}
            />
          </div>
        </div>
      </section>

      <section className={styles.bizCard} aria-label="XPediaIT approach">
        <div className="container">
          <div className={styles.bizCardInner}>
            <div className={styles.bizCardLeft}>
              <h2 className={styles.bizCardName}>Your IT, made simpler.</h2>
              <p className={styles.bizCardTag}>
                One trusted partner for support, security, and technology planning.
              </p>
            </div>
            <Link href="/about" className="btn btn-primary">
              Meet XPediaIT
              <IconArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="overline">The XPediaIT approach</span>
            <h2>Technology support you can count on</h2>
            <p>
              Get practical expertise and a dependable partner focused on keeping
              your people and business moving forward.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: <IconShield size={28} color="var(--cyan-500)" />,
                title: "Dependable support",
                desc: "Get friendly, knowledgeable assistance when technology gets in the way of work.",
              },
              {
                icon: <IconBriefcase size={28} color="var(--cyan-500)" />,
                title: "Built for business",
                desc: "Solutions shaped around your team, your priorities, and the way you work.",
              },
              {
                icon: <IconLock size={28} color="var(--cyan-500)" />,
                title: "Security in focus",
                desc: "Make informed technology choices with security considered at every step.",
              },
            ].map((item) => (
              <div key={item.title} className={`card ${styles.valueCard}`}>
                <div className="icon-circle">{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section-gray"
        id="services-section"
        aria-labelledby="services-heading"
      >
        <div className="container">
          <div className="section-header">
            <span className="overline">What we do</span>
            <h2 id="services-heading">IT services for the work ahead</h2>
            <p>
              From a one-time issue to ongoing IT management, XPediaIT helps you
              get more from your technology.
            </p>
          </div>
          <div className="grid-4">
            {services.map(({ icon: Icon, title, description, href }) => (
              <article key={title} className={`card ${styles.serviceCard}`}>
                <div className="icon-circle icon-circle-lg">
                  <Icon size={32} color="var(--cyan-500)" />
                </div>
                <h3 className={styles.serviceTitle}>{title}</h3>
                <p className={styles.serviceDesc}>{description}</p>
                <Link href={href} className={`link-cyan ${styles.serviceLink}`}>
                  Explore service <IconArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" id="why-xpedia">
        <div className="container">
          <div className="section-header">
            <span className="overline">Why XPediaIT</span>
            <h2>A better experience with IT</h2>
          </div>
          <div className="grid-3">
            {strengths.map((item) => (
              <article key={item.number} className={`card ${styles.whyCard}`}>
                <span className={styles.whyNum}>{item.number}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-gray" id="process">
        <div className="container">
          <div className="section-header">
            <span className="overline">How it works</span>
            <h2>Good IT starts with a conversation</h2>
          </div>
          <div className={styles.processGrid}>
            {steps.map((step) => (
              <article key={step.number} className={styles.processStep}>
                <div className={styles.processNum}>{step.number}</div>
                <div className={styles.processContent}>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta} id="contact">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="overline">Let&apos;s make IT easier</span>
          <h2 className={styles.ctaTitle}>Ready for a better IT experience?</h2>
          <p className={styles.ctaSub}>
            Tell us what your business needs. We&apos;ll help you find the right
            next step.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Start a conversation
              <IconArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
