import "./globals.css";
import "@packages/tailwind-config/globals.css"
import { ApolloWrapper } from "../graphql/ApolloWrapper";
import { Navbar } from "@packages/components"
import { navItems } from "../constants";
import StyledJsxRegistry from "./registry";
import { LanguageProvider } from "@packages/contexts/LanguageContext";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
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