import { Button, Navbar } from "@packages/components"
import { ApolloWrapper } from "../graphql/ApolloWrapper";
import "@packages/tailwind-config/globals.css"
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
           <Navbar />  
           <Button />
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}