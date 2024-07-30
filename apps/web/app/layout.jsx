import "./globals.css";
import "@packages/tailwind-config/globals.css"
import { ApolloWrapper } from "../graphql/ApolloWrapper";
import { Navbar } from "@packages/components"
import StyledJsxRegistry from "./registry";
import { LanguageProvider } from "@packages/contexts/LanguageContext";
import { navItems } from "../constants/Data";

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
          </LanguageProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}