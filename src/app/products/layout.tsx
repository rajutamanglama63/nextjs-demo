export default function ProductsLayout({ children }: { children: React.ReactNode}) {
    return(
        <div>
            {children}
            <div>
                Featured Product Section
            </div>
        </div>
    )
}