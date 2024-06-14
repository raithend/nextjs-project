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
            <Card className="px-16">
                <CardHeader className="flex-row items-center bg-slate-200 p-2">
                    <div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback><UserRoundIcon/></AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="pl-2">
                        <CardDescription className="text-base font-semibold">
                            UserName
                        </CardDescription>
                        <CardDescription>
                            UserID
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="p-0">
                    <Carousel className="w-full max-w-sm">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
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
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>
                </CardContent>

                <CardFooter className="bg-slate-200 p-2">
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

