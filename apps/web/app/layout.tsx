import "./globals.css";
import "@packages/tailwind-config/globals.css"
import { ApolloWrapper } from "../graphql/ApolloWrapper";
import { Navbar } from "@packages/components"
import { navItems } from "../constants/constants";

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
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}