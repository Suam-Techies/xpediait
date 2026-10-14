import BUSINESS from "../business-config";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS.name,
    description:
      "IT support, managed services, cybersecurity, cloud solutions, and technology guidance for businesses.",
    serviceType: [
      "IT Support",
      "Managed IT Services",
      "Computer Support",
      "Network Support",
      "Cloud Services",
      "Cybersecurity",
      "Backup & Data Recovery",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
