import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"

import { Posts } from "@/components/posts"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div className="block md:hidden">
        sm
      </div>
      <div className="block lg:hidden">
        md
      </div>
      <div className="block xl:hidden">
        lg
      </div>
      <div className="block 2xl:hidden">
        xl
      </div>
      <div>
        2xl
      </div>
      <Posts/>
      <div>
       <ModeToggle/>
      </div>
    </main>
  );
}
