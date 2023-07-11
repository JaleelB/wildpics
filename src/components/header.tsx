import Link from "next/link";

export default function Header(){
    return(
        <header className="w-screen z-40 px-4">
            <div className="container max-w-[1400px] flex h-20 items-center justify-between py-6 mx-auto">
                <Link href="/">
                    wildpics
                </Link>
                <nav className="flex gap-8">
                    <Link href="/">
                        about
                    </Link>
                    <Link href="https://github.com/JaleelB/wildpics">
                        github
                    </Link>
                </nav>
            </div>
        </header>
    )
}