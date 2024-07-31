import "./globals.css";
import "@packages/tailwind-config/globals.css"
import { ApolloWrapper } from "../graphql/ApolloWrapper";
import { Footer, Navbar } from "@packages/components"
import { navItems } from "../constants";
import StyledJsxRegistry from "./registry";
import { LanguageProvider } from "@packages/contexts/LanguageContext";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href="favicon.ico" sizes="any" />
        <ApolloWrapper>
          <LanguageProvider>
            <Navbar navItems={navItems} />
            <StyledJsxRegistry>{children}</StyledJsxRegistry>
            <Footer footerItems={navItems} />
          </LanguageProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}