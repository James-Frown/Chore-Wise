import Link from "next/link"

export const metadata = {
    title: 'ChoreWise | Login',
}

export default function LoginPage() {
    return (
        <>
            <main>
                <div>
                    <h1>
                        Welcome Back,
                    </h1>
                    <p>
                        Please Enter Your Details to Continue!!
                    </p>
                </div>
                <div>
                    <form>
                        <li>
                            <p>
                                Email:
                            </p>
                            <input type="email" placeholder="eg: me@gmail.com" />
                        </li>
                        <li>
                            <p>
                                Password:
                            </p>
                            <input type="password" placeholder="eg: 123456789" />
                        </li>
                        <button type="submit">
                            <Link href={"/home"}>
                                Login
                            </Link>
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}