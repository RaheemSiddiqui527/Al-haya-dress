import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Al Haya — Modern Muse",
  description:
    "Premium boutique fashion. Effortless sophistication, understated luxury.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=quicksand@300,400,500,600,700,1&f[]=britney@300,400,700,1000,1&display=swap"
          rel="stylesheet"
        />
        
      </head>
      <body className="bg-background text-inverse font-quicksand antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
