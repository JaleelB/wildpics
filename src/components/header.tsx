import Link from "next/link";

export default function Header(){
    return(
        <header className="w-screen z-40 text-white">
            <div className="flex h-16 md:h-20 items-center justify-between px-5 sm:px-10 text-sm md:text-base">
                <Link href="/">
                    wildpics
                </Link>
                <nav className="flex gap-4 sm:gap-8">
                    <Link href="/" className="relative group">
                        <span>gallery</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white z-10 group-hover:w-full group-hover:transition-all"></span>
                    </Link>
                    <Link href="https://github.com/JaleelB/wildpics" className="relative group">
                        <span>github</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white z-10 group-hover:w-full group-hover:transition-all"></span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}