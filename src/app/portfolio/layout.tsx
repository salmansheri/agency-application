export default function PortfolioLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <h1 className="text-5xl font-extrabold">Our Works</h1>
            {children}
        </div>
    )

}