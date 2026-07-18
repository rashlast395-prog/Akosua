import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LoaderProvider } from "@/components/providers/loader-provider";
import { CursorProvider } from "@/components/providers/cursor-provider";
import CustomCursor from "@/components/animations/custom-cursor";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kumi Ebenezer Tenkorang — Creative Designer",
    template: "%s | Kumi Design",
  },
  description:
    "Kumi Ebenezer Tenkorang is a creative designer based in Accra, Ghana specializing in Graphic Design, Brand Identity, Motion Graphics, Video Editing, Social Media Design, and Print Design.",
  keywords: [
    "creative designer",
    "graphic design",
    "brand identity",
    "motion graphics",
    "video editing",
    "social media design",
    "print design",
    "Accra",
    "Ghana",
  ],
  authors: [{ name: "Kumi Ebenezer Tenkorang" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kumidesign.com",
    siteName: "Kumi Design",
    title: "Kumi Ebenezer Tenkorang — Creative Designer",
    description:
      "Helping brands tell compelling stories through graphic design, motion graphics, video editing, and brand identity.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kumi Ebenezer Tenkorang — Creative Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumi Ebenezer Tenkorang — Creative Designer",
    description:
      "Helping brands tell compelling stories through graphic design, motion graphics, video editing, and brand identity.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} font-body antialiased`}
      >
        <LoaderProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CursorProvider>
              <CustomCursor />
              {children}
            </CursorProvider>
          </ThemeProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}
