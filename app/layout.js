import localFont from "next/font/local";
import "./globals.css"
import Head from 'next/head'

const lexendGigaBlack = localFont({
  src: "./fonts/LexendGiga-Black.ttf",
  variable: "--font-lexend-giga-black",
  weight: "100 900",
});
const lexendDecaRegular = localFont({
  src: "./fonts/LexendDeca-Regular.ttf",
  variable: "--font-lexend-deca-regular",
  weight: "100 900",
});

const lexendDecaBlack = localFont({
  src: "./fonts/LexendDeca-Black.ttf",
  variable: "--font-lexend-deca-black",
  weight: "100 900",
});

export const metadata = {
  title: "iT Mídia",
  description: "Obtenha Engenharia de Software especializada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </Head>
      <body
        className={`${lexendGigaBlack.variable} ${lexendDecaRegular.variable} ${lexendDecaBlack.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
