import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "技術課題",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
        <body className={inter.className}>
            <ChakraProvider>
                <Sidebar />
            </ChakraProvider>
            {children}
        </body>
    </html>
  );
}
