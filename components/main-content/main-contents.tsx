import { ModeToggle } from "@/components/ui/mode-toggle"

import { Posts } from "./posts";
import { PostButton } from "../post-button";
import { SmartphoneNavbar } from "./smartphone-navbar";

export function MainContents() {
    return(
        <div className="flex flex-col items-center">
            <div>
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
            </div>

            <Posts/>

            <div>
                <ModeToggle/>
            </div>
            <div className="block md:hidden w-full fixed bottom-0">
                <SmartphoneNavbar/>
            </div>
        </div>
    )
}