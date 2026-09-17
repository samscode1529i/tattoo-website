import { Bebas_Neue, Work_Sans } from 'next/font/google';
import { Oswald, Lato } from "next/font/google";
import './globals.css';

const display = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});


const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'roaa.bayoumy',
  description: 'Custom tattoo studio — blackwork, fine line, and traditional styles.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${display.variable} ${sans.variable} ${oswald.variable} ${lato.variable}`}>
      <body className="bg-ink-950 font-sans text-bone antialiased">{children}</body>
    </html>
  );
}

