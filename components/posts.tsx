import { Post } from "@/components/post"

export function Posts() {
    return(
        <div className="w-120 bg-slate-500">
            <div>
                <Post/>
            </div>
            <div>
                <Post/>
            </div>
            <div>
                <Post/>
            </div>
        </div>
    )
}

