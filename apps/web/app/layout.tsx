import "./globals.css";
import "@packages/tailwind-config/globals.css"
import { ApolloWrapper } from "../graphql/ApolloWrapper";
import { Navbar } from "@packages/components"
import { navItems } from "../constants/constants";
import { Hero } from "../containers/Hero";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <Navbar navItems={navItems} />
          <Hero />
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}