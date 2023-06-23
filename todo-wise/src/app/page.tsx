import { Alert } from "@/components/bootstrap";
import Link from "next/link";

export const metadata = {
  title: 'ChoreWise | Landing',
  description: 'Landing Page',
}

export default function LandingPage() {
  return (
    <>
      <div>
        <div>
          <Alert>
            <h3>
              Welcome to,
            </h3>
            <h1>
              <strong> ChoreWise </strong>
            </h1>
            <span>
            </span>
            <p>
              This is a smaple project where we encourgae childeren to do tasks for their parents in return for rewards!
            </p>
          </Alert>
        </div>
        <div>
          <button>
            <Link href={"/login"}>
              Login
            </Link>
          </button>
          <button>
            <Link
              href={"/signup"}>
              SignUp
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}

