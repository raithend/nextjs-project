import Link from "next/link";
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import { HomeIcon, UserRoundCheckIcon, BellIcon, HeartIcon, SettingsIcon } from "lucide-react"
import { Button } from "../ui/button";

export function SmartphoneNavbar() {
    return(
        <div>
            <Card>
                <CardContent className="flex justify-between py-2">
                    <Link href="/">
                        <Button variant="ghost" size="icon">
                            <HomeIcon className="h-8 w-8" />
                        </Button>
                    </Link>
                    <Link href="./follower">
                        <Button variant="ghost" size="icon">
                            <UserRoundCheckIcon className="h-8 w-8" />
                        </Button>
                    </Link>
                    <Link href="./notification">
                        <Button variant="ghost" size="icon">
                            <BellIcon className="h-8 w-8" />
                        </Button>
                    </Link>
                    <Link href="./like">
                        <Button variant="ghost" size="icon">
                            <HeartIcon className="h-8 w-8" />
                        </Button>
                    </Link>
                    <Link href="l/setting">
                        <Button variant="ghost" size="icon">
                            <SettingsIcon className="h-8 w-8" />
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}