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
import { Input } from "@/components/ui/input"

import { SearchIcon } from "lucide-react"

export function RightSidebar() {
    return(
        <div>
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
            <Card>
                <CardContent>
                    <Input placeholder= "検索" />
                </CardContent>
            </Card>
        </div>     
    )
}