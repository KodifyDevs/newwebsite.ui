import "./globals.css";
import "@packages/tailwind-config/globals.css"
import { ApolloWrapper } from "../graphql/ApolloWrapper";
import { Navbar } from "@packages/components"
import { navItems } from "../constants/constants";
import StyledJsxRegistry from "./registry";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <Navbar navItems={navItems} />
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
        </ApolloWrapper>
      </body>
    </html>
  );
}