import { Navbar } from "@/components/ui/navbar";

// Import ThemeProvider (if you're using a separate provider for theme)
import "./globals.css";
import Footer from "@/components/ui/Footer";
import { LanguageProvider } from "@/components/context/LanguageContext";
import { ThemeProvider } from "@/components/context/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Wrap with LanguageProvider and ThemeProvider */}
        <LanguageProvider>
          <ThemeProvider>
            <header>
              <Navbar />
            </header>
            {children}
            <footer>
              <Footer />
            </footer>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
