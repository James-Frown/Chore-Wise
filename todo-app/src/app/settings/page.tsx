import Navigation from "../components/nav"

export const metadata = {
    title: 'ChoreWise | Home',
}

export default function DashboardPage() {
    return (
        <>
            <main>
                <div>
                    <Navigation />
                </div>
                <div>
                    <h1>
                        Settings Page
                    </h1>
                </div>
            </main>
        </>
    )
}