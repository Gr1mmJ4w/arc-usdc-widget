import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Arc USDC Payment Widget",
  description: "Send USDC on Arc Testnet — built by @Gr1mmJ4w",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
