import Link from "next/link"

export const metadata = {
    title: 'ChoreWise | SignUp',
}

export default function LoginPage() {
    return (
        <>
            <main>
                <div>
                    <h1>
                        Welcome,
                    </h1>
                    <p>
                        Please Enter Your Details to Continue!!
                    </p>
                </div>
                <div>
                    <form>
                        <li>
                            <p>
                                First Name:
                            </p>
                            <input type="text" placeholder="enter your first name" />
                        </li>
                        <li>
                            <p>
                                Last Name:
                            </p>
                            <input type="text" placeholder="enter your last name" />
                        </li>
                        <li>
                            <p>
                                Account Type:
                            </p>
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label>Parent</label>
                            <span></span>
                            <input type="radio" id="css" name="fav_language" value="CSS" />
                            <label>Child</label>
                        </li>
                        <li>
                            <p>
                                Account Link:
                            </p>
                            <input type="text" placeholder="enter your last name" />
                        </li>
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
                                Sign Up
                            </Link>
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}