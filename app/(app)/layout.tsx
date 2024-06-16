import { LeftSidebar } from "@/components/left-sidebar/left-sidebar";
import { RightSidebar } from "@/components/right-sidebar/right-sidebar";
import { SmartphoneNavbar } from "@/components/smartphone-navbar";
import { SmartphoneHeader } from "@/components/smartphone-header";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col justify-center md:flex-row">

			<div className="hidden md:block md:w-20 lg:w-64 xl:w-80 flex-none">
				<div className="sticky top-0">
					<LeftSidebar/>
				</div>
			</div>

			<div className="md:w-[640px] flex-initial">
				<div className="block md:hidden">
					<SmartphoneHeader/>
				</div>

				<div className="">
					{children}
				</div>

				<div className="pb-14 md:pb-0"/>
				
				<div className="block md:hidden w-full fixed bottom-0">
					<SmartphoneNavbar/>
				</div>
			</div>


			<div className="hidden md:block md:w-64 xl:w-80 flex-none">
				<div className="sticky top-0">
					<RightSidebar />
				</div>
			</div>

		</div>
	);
}
