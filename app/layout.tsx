
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blackbuck",
  description: "Animal photo database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col-reverse md:flex-row justify-center">
            <Navbar/>
            <div className="bg-slate-600">
              {children}                  
            </div>
            <div className="hidden md:block w-80 bg-slate-300">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Site description
                  </CardTitle>                  
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Blackbuck is a website for posting and sharing photos of animals.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>      
          </div>

        </ThemeProvider> 
      </body>
    </html>
  );
}
