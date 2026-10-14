import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "XPediaIT | IT Support & Managed IT Services",
  description:
    "XPediaIT provides dependable IT support, managed services, cybersecurity, cloud solutions, and technology guidance for businesses.",
  openGraph: {
    title: "XPediaIT | IT Support & Managed IT Services",
    description:
      "Dependable IT support, managed services, cybersecurity, cloud solutions, and technology guidance for businesses.",
    siteName: "XPediaIT",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
