import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/Services/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Paw Store",
  description: "E-commerce pet store built by Al Amin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body lang="en" className={`${inter.variable} ${poppins.variable}`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
