import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { UserRoundIcon, HeartIcon, MessageCircleIcon } from "lucide-react"

export function Post() {
    return(
        <div>
            <Card className="px-10">
                <CardHeader className="flex-row">
                    <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback><UserRoundIcon/></AvatarFallback>
                    </Avatar>
                    <CardDescription className="pl-2">
                        UserID
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div>
                        <Carousel className="w-full max-w-xs">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-0">
                                        <Image
                                        src="/blackbuck.jpg"
                                        alt="Blackbuck picture"
                                        width={1000}
                                        height={1000}
                                        />
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        </Carousel>
                    </div>
                </CardContent>

                <CardFooter>
                    <div>
                        <div>
                            <div className="my-1">
                                Taxonomy
                            </div>
                            <div className="my-1">
                                Location
                            </div>
                            <div className="my-1">
                                Description
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <HeartIcon/>
                            <MessageCircleIcon/>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

