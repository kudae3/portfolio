import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { StarsBackground } from "./components/ui/stars-background";
import { ShootingStars } from "./components/ui/shooting-stars";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Kudae Sithu | Portfolio",
  description:
    "A portfolio showcasing my projects and skills as a software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="min-h-screen bg-black">
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <ShootingStars />
          <StarsBackground />
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
