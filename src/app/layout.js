import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata = {
  title: "CUIRS | Chittagong University Research and Higher Study Society",
  description: "Chittagong University Research and Higher Study Society",
  icons: {
    icon: "/favicon-cuirs.svg", // or '/favicon.png'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} font-sans antialiased`}>
        <div className="min-h-screen w-full bg-white relative">
          {/* Emerald Glow Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #009edb 100%)
      `,
              backgroundSize: "100% 100%",
            }}
          />

          {children}
        </div>
      </body>
    </html>
  );
}
