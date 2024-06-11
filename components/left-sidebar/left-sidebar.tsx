import { Navbar } from "./navbar";
import { PostButton } from "../post-button";

export function LeftSidebar() {
    return(
        <div className="w-80 bg-slate-300">
            <Navbar/>
            <PostButton/>
        </div>
    )
}