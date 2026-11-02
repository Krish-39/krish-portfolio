import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Self-hosted (OFL, see ./fonts/OFL.txt) so builds never depend on reaching Google Fonts.
const instrumentSans = localFont({
  src: "./fonts/instrument-sans-var.woff2",
  variable: "--font-instrument",
  weight: "400 700",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/jetbrains-mono-var.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
});

// Wide automotive display face, used for the name and the spec-sheet model.
const michroma = localFont({
  src: "./fonts/michroma-400.woff2",
  variable: "--font-michroma",
  weight: "400",
  display: "swap",
});

const description =
  "Software Engineering student in Berlin building full-stack products, AI systems and cloud deployments. Looking for a 6+ month internship.";

export const metadata: Metadata = {
  metadataBase: new URL("https://krriss.cloud"),
  title: "Krish Ahir | Portfolio",
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Krish Ahir",
    title: "Krish Ahir — Software Engineering student",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Krish Ahir — Software Engineering student",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${jetbrainsMono.variable} ${michroma.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* Page-view analytics; only active when hosted on Vercel with Web Analytics turned on. */}
        <Analytics />
      </body>
    </html>
  );
}
