'use client'

import { useState, useEffect } from "react"

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await fetch('https://fakestoreapi.com/products');
                const data = await products.json();
                console.log(data);
                setProducts(data)
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        }

        fetchProducts()
    }, [])

    return (
        <>
            <div className="products w-full md:w-[80%] min-h-[50vh]">
                <h2 className="text-xl font-semibold">Product Listing</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
                    {products.map(product => (
                        <div key={product.id} className="bg-white min-w-[100px] h-auto flex flex-col gap-3 p-4 rounded-lg shadow-md">
                            <img src={product.image} alt={product.title} className="h-50 mx-auto object-contain hover:scale-105 transition-all duration-300 cursor-pointer" />
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <p className="text-sm text-gray-600">{product.category}</p>
                            <p className="text-blue-600 font-bold my-2">${product.price}</p>
                            <button className="rounded-xl text-white bg-blue-900 px-4 py-2 cursor-pointer hover:bg-blue-950 transition-all duration-300">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products
