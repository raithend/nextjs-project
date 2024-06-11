import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { HomeIcon, SearchIcon, PlusIcon, HeartIcon, SettingsIcon, PlusCircleIcon} from "lucide-react"
import { Button } from "../ui/button";

export function Navbar() {
    return(
        <div>            
            <Card>
                <CardHeader className="flex flex-row">
                    <div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>Blackbuck</AvatarFallback>  
                    </Avatar>                    
                    </div>
                    <div>
                    <CardTitle>
                        Blackbuck
                    </CardTitle>                    
                    </div>
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
                    <Link href="./like" className="flex items-center justify-center">
                        <HeartIcon className="h-8 w-8" />
                        <div className="hidden md:block">
                            いいね
                        </div>
                    </Link>
                    <Link href="./setting" className="flex items-center justify-center">
                        <SettingsIcon className="h-8 w-8" />
                        <div className="hidden md:block">
                            設定
                        </div>
                    </Link>
                    <Link href="./profile" className="flex items-center justify-center">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>Blackbuck</AvatarFallback>  
                        </Avatar>
                        <div>
                            プロフィール
                        </div>
                    </Link>
                </div>
            </Card>
        </div>
    )
}