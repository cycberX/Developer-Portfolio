import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const viewport: Viewport = {
  themeColor: "#e11d48",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sanskar Bandgar (mrsanskar) | Full Stack Developer & IT Engineering Student",
  description:
    "Personal developer portfolio of Sanskar Bandgar based in Satara, Maharashtra, India. Showcasing full-stack web applications, cloud engineering capabilities, verified certifications, and collaboration proposals.",
  keywords: [
    "Sanskar Bandgar",
    "mrsanskar",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Cloud Computing",
    "Satara",
    "Maharashtra",
    "SPPU",
    "Developer Portfolio",
  ],
  authors: [{ name: "Sanskar Bandgar", url: "https://github.com/mrsanskar19" }],
  creator: "Sanskar Bandgar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mrsanskar.vercel.app",
    siteName: "Sanskar Bandgar Developer Portfolio",
    title: "Sanskar Bandgar | Full Stack Developer & IT Engineering Student",
    description:
      "Explore real-world software projects, technical skills, and collaboration opportunities with Sanskar Bandgar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanskar Bandgar | Full Stack Developer",
    description:
      "Explore software engineering projects, cloud architecture focus, and collaboration opportunities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
