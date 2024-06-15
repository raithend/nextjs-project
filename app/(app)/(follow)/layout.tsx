import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
  } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { UserRoundIcon } from "lucide-react";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="justify-center">
			<div>
				<Tabs defaultValue="followee">
					<TabsList>
						<TabsTrigger value="followee">フォロー中</TabsTrigger>
						<TabsTrigger value="follower">フォロワー</TabsTrigger>
					</TabsList>
					<TabsContent value="followee">
						<Card>
							<CardContent className="flex flex-row items-center p-2">
								<div>
									<Avatar>
										<AvatarImage src="https://github.com/shadcn.png" />
										<AvatarFallback><UserRoundIcon/></AvatarFallback>
									</Avatar>
								</div>
								<div className="pl-2">
									<div className="text-base font-semibold">
										UserName
									</div>
									<div>
										UserID
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="follower">Change your password here.</TabsContent>
				</Tabs>
			</div>
			<div>
				{children}
			</div>
		</div>
	);
}
