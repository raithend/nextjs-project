import { Posts } from "./posts";
import { PostButton } from "../post-button";
import { SmartphoneNavbar } from "./smartphone-navbar";
import { SmartphoneHeader } from "./smartphone-header";

export function MainContents() {
    return(
        <div className="flex flex-col items-center">
            <div className="block md:hidden w-full">
                <SmartphoneHeader/>
            </div>
            <Posts/>
            <div className="block md:hidden w-full fixed bottom-0">
                <SmartphoneNavbar/>
            </div>
        </div>
    )
}