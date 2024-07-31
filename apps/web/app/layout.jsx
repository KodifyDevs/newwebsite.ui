import "./globals.css";
import "@packages/tailwind-config/globals.css"
import { Navbar, Footer } from "@packages/components"
import StyledJsxRegistry from "./registry";
import { LanguageProvider } from "@packages/contexts/LanguageContext";
import { navItems } from "../constants/data";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href="favicon.ico" sizes="any" />
        <LanguageProvider>
          <Navbar navItems={navItems} />
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
          <Footer footerItems={navItems} />
        </LanguageProvider>
      </body>
    </html>
  );
}