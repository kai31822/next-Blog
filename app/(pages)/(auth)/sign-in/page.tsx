import { FC } from "react";
import Link from "next/link";
import SignIn from "@/app/components/SignIn";

const page: FC = () => {
    return <div className="h-full max-w-2xl mx-auto flex flex-col item-center justify-center gap-20">
        <Link href='/' className='bg-slate-400'>Home</Link>
        <SignIn></SignIn>
    </div>
}
export default page
