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
import { PlusCircleIcon} from "lucide-react"
import { Button } from "@/components/ui/button";

export function PostButton() {
    return(
        <div className="w-80 bg-slate-300">            
            <div className="flex items-center justify-center">
                <div className="hidden md:block mt-4">
                <Button className="p-6">
                    <PlusCircleIcon className="h-8 w-8 mr-4" />
                    <div>
                        投稿
                    </div>                             
                </Button>                      
                </div>      
            </div>
        </div>
    )
}