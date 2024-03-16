import Layout from "@/components/globals/Layout";
import "@/styles/main.css";
import type {Metadata} from "next";
import {Inter, Outfit} from "next/font/google";

const inter = Inter({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
   variable: "--font-inter",
});
const outfit = Outfit({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
   variable: "--font-inter",
});

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
   return (
      <html lang="en">
         <body className={`${inter.variable} ${outfit.variable}`}>
            <Layout>{children}</Layout>
         </body>
      </html>
   );
}
