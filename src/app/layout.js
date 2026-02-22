import "./globals.css";

export const metadata = {
  title: "The Arcam Project | Timeless Digital Experiences",
  description: "Premium digital agency crafting world-class websites, digital systems, and brand experiences for ambitious businesses. EST. 2026 | Timeless By Design",
  keywords: "digital agency, premium websites, brand identity, conversion optimization, web design",
  authors: [{ name: "The Arcam Project" }],
  creator: "The Arcam Project",
  openGraph: {
    title: "The Arcam Project | Timeless Digital Experiences",
    description: "Premium digital agency crafting world-class digital experiences",
    url: "https://thearcamproject.com",
    siteName: "The Arcam Project",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#050505" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
