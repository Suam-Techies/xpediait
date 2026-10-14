import Link from "next/link";
import BUSINESS from "../business-config";
import { IconMapPin, IconPhone, IconMail } from "./Icons";
import Logo from "./Logo";
import styles from "./Footer.module.css";

const SERVICE_LINKS = [
  { label: "IT Support", href: "/#services-section" },
  { label: "Managed IT", href: "/#services-section" },
  { label: "Cybersecurity", href: "/#services-section" },
  { label: "Cloud Services", href: "/#services-section" },
];

const COMPANY_LINKS = [
  { label: "About XPediaIT", href: "/#why-xpedia" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <div style={{ marginBottom: "16px" }}>
            <Logo variant="dark" size="md" idPrefix="ftr" />
          </div>
          <p className={styles.brandDesc}>
            {BUSINESS.tagline}. Technology support for what&apos;s next.
          </p>
        </div>

        <div className={styles.col}>
          <h2 className={styles.colTitle}>Services</h2>
          <ul>
            {SERVICE_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.colLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h2 className={styles.colTitle}>Company</h2>
          <ul>
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.colLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h2 className={styles.colTitle}>Let&apos;s talk</h2>
          <ul className={styles.contactList}>
            <li>
              <IconPhone size={16} color="var(--cyan-400)" />
              <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
            </li>
            <li>
              <IconMail size={16} color="var(--cyan-400)" />
              <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
            </li>
            <li>
              <IconMapPin size={16} color="var(--cyan-400)" />
              <span>{BUSINESS.address.full}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
