import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luxury Online Shopping",
  description: " Luxury Online Shopping"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> {children} </body>{" "}
    </html>
  );
}
