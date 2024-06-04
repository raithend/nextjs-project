import Link from "next/link";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HomeIcon, SearchIcon} from "lucide-react"

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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col-reverse md:flex-row justify-center">
            <Card>
              <CardHeader className="flex">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>Blackbuck</AvatarFallback>  
                </Avatar>
                <CardTitle>
                  Blackbuck
                </CardTitle>
              </CardHeader>

              <div className="flex md:flex-col">
                <Link href="/" className="flex items-center justify-center">
                  <HomeIcon className="h-8 w-8" />
                  <div className="hidden md:block">
                    ホーム
                  </div>
                </Link>
                <Link href="./search" className="flex items-center justify-center">
                  <SearchIcon className="h-8 w-8" />
                  <div className="hidden md:block">
                    検索
                  </div>
                </Link>
                <Link href="./post" className="flex items-center justify-center">
                  投稿
                </Link>
                <Link href="./like" className="flex items-center justify-center">
                  いいね
                </Link>
                <Link href="./setting" className="flex items-center justify-center">
                  設定
                </Link>
                <Link href="./profile" className="flex items-center justify-center">
                  プロフィール
                </Link>
              </div>
            </Card>

            <div className="bg-slate-600">
              {children}                  
            </div>
            <div className="hidden md:block">
              <Card className="max-w-25">
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
