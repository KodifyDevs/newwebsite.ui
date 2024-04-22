import { ApolloWrapper } from "../lib/ApolloWrapper";
import "./globals.css";
import "@packages/components/styles.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}