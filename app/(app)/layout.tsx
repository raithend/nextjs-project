import { LeftSidebar } from "@/components/left-sidebar/left-sidebar";
import { RightSidebar } from "@/components/right-sidebar/right-sidebar";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex justify-center">
			<div className="hidden md:block md:w-20 lg:w-64 xl:w-80 flex-none">
				<div className="sticky top-0">
					<LeftSidebar/>
				</div>			
			</div>
			<div className="w-[640px] flex-initial">
				{children}
			</div>
			<div className="hidden md:block w-80 flex-initial">
				<div className="sticky top-0">
					<RightSidebar />
				</div>				
			</div>

		</div>
	);
}
