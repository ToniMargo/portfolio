import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-100`}>
        <div className="flex flex-col justify-between min-h-screen max-h-full md:w-4/5 m-auto border bg-white">
          <header className="flex justify-end md:justify-center">
            <Navbar />
          </header>
          <main className="p-6 md:w-3/4 md:mx-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
