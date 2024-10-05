import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Centrum Sterowania",
  description: "Moje personalne centrum sterowania",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChakraProvider>
          {/* Kontener dla Navbar i Sidebar */}
          <Box display="flex" flexDirection="column" height="100vh">
            <Navbar />
            <Box display="flex" flex="1">
              {/* Sidebar */}
              <Sidebar />
              {/* Główna zawartość */}
              <main
                style={{
                  flex: 1,
                  padding: "16px",
                  marginTop: "0",
                  overflowY: "auto",
                }}
              >
                {children}
              </main>
            </Box>
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
