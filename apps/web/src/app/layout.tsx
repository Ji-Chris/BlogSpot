import {Roboto_Serif, Roboto_Mono} from "next/font/google"
import { Metadata } from "next";
import "./globals.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata:Metadata = {
  title: 'BlogSpot',
  description: 'Blogging site built on NextJS'
}

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin']
});

const robotoSerif = Roboto_Serif({
  variable: '--font-roboto-serif',
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} ${robotoSerif.variable}`}>
          <Navbar />
          <main className="p-6">{children}</main>
          <Footer />
        </body>
    </html>
  );
}
