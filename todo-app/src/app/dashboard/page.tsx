import Navigation from "../components/nav"

export const metadata = {
    title: 'ChoreWise | Dashboard',
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
                        DashBoard
                    </h1>
                </div>
            </main>
        </>
    )
}