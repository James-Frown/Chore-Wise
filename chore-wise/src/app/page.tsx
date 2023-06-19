import styles from './page.module.css'

export default function Landing() {
  await new Promise
  return (
    <>
      <main className={styles.main}>
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
            Login
          </button>
          <button>
            signup
          </button>
        </div>
      </main>
    </>
  )
}
