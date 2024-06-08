import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center">
      <Navbar />
      <div>
        {children}                  
      </div>
      <div>
        <Sidebar/>
      </div>
    </div>
  );
}
