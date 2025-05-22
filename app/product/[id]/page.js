import Quantity from "@/components/Quantity";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Product not found!");
  return res.json();
}

export default async function ProductDetail({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="details-containerw-full max-sm:px-4 sm:w-[80%] flex flex-col lg:flex-row gap-8 mx-auto my-10">
      <img src={product.image} alt={product.title} className="h-auto lg:h-[95vh]" />

      <div className="flex flex-col gap-3">
        <h1 className="text-xl md:text-3xl font-bold mb-4">{product.title}</h1>
        <p className="font-semibold text-lg md:text-2xl my-2">${product.price}</p>
        <p className="max-sm:text-sm mt-2">{product.description}</p>
        <p className="text-sm text-gray-600">{product.category}</p>
        <Quantity />
        <button className="rounded-xl max-sm:text-sm w-fit text-white bg-blue-900 px-6 py-3 cursor-pointer hover:bg-blue-950 transition-all duration-300">Add to Cart</button>
      </div>
    </div>
  );
}
