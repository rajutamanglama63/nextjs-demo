export default async function ProductPage({params}: {params: {id: string}}) {
    const {id} = await params;
    return (
        <div>
            <h1>Product {id}</h1>
        </div>
    )
}