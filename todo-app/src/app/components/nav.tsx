import Link from "next/link";

export default function Navigation() {
    return (
        <>
            <div>
                <button>
                    <Link href={"/home"}>
                        Home
                    </Link>
                </button>
                <button>
                    <Link href={"/dashboard"}>
                        Dashboard
                    </Link>
                </button>
                <button>
                    <Link href={"/settings"}>
                        Settings
                    </Link>
                </button>
                <button>
                    <Link href={"/"}>
                        Logout
                    </Link>
                </button>
            </div>
        </>
    )
}