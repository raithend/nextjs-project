import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"

import { Posts } from "@/components/posts"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <Posts/>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Blackbuck</DropdownMenuLabel>
            <DropdownMenuItem>ホーム</DropdownMenuItem>
            <DropdownMenuItem>検索</DropdownMenuItem>
            <DropdownMenuItem>投稿</DropdownMenuItem>
            <DropdownMenuItem>いいね</DropdownMenuItem>
            <DropdownMenuItem>アバター</DropdownMenuItem>
            <DropdownMenuItem>設定</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>
       <ModeToggle/>
      </div>

    </main>
  );
}
