import { LeftSidebar } from "@/components/left-sidebar/left-sidebar";
import { Navbar } from "@/components/left-sidebar/navbar";
import { RightSidebar } from "@/components/right-sidebar/right-sidebar";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col-reverse md:flex-row justify-center">
			<LeftSidebar />
			<div>{children}</div>
			<div>
				<RightSidebar />
			</div>
		</div>
	);
}
