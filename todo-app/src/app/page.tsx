import Link from "next/link"

export const metadata = {
  title: 'ChoreWise | Landing Page',
  description: 'Welcome to ChoreWise landing page',
}

export default function LandingPage() {
  return (
    <>
      <main>
        <div>
          <h1>
            Welcome to Chore-Wise
          </h1>
          <p>
            We are here to help you organise your chores!!!
          </p>
        </div>
        <div>
          <button>
            <Link href={"/login"}>
              Login
            </Link>
          </button>
          <button>
            <Link href={"/signup"}>
              Get Started
            </Link>
          </button>
        </div>
      </main>
    </>
  )
}
