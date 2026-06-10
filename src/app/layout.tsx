import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elevate with Revo — Real Training. Real Results.",
  description: "Join the Revo fitness community in Puerto Banús, Marbella. 7 days free.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.33.0/dist/tabler-icons.min.css"
        />
      </head>
      <body style={{ background: "#050508", margin: 0, cursor: "none" }}>{children}</body>
    </html>
  );
}
