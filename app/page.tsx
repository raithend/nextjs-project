import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"

import { Posts } from "@/components/posts"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>
        <Button>Click me</Button>
      </div>

      <Posts/>     


      <div>
       <ModeToggle/>
      </div>

    </main>
  );
}
