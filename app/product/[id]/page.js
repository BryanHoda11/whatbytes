
async function getProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Product not found!");
    return res.json();
  }
  
  export default async function ProductDetail({ params }) {
    const product = await getProduct(params.id);
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <img src={product.image} alt={product.title} className="w-48" />
        <p className="mt-2">{product.description}</p>
        <p className="font-semibold mt-2">${product.price}</p>
      </div>
    );
  }
