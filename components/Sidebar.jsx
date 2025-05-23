"use client"

import { useState } from "react"

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    const [price, setPrice] = useState(0);

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setSelectedCategory(value === 'all' ? '' : value);
    };

    const handlePriceChange = (e) => {
        setPrice(Number(e.target.value));
    };

    return (
        <>
            <div className="sidebar max-md:hidden min-w-[20%] min-h-[50vh] sticky top-0">
                <div className="filters px-5 py-5 flex flex-col bg-blue-800 rounded-lg text-white">
                    <h3 className="text-lg font-semibold pb-3">Filters</h3>
                    <div className="category mb-3 flex flex-col gap-2">
                        <h3 className="py-2">Category</h3>

                        {["electronics", "jewelery", "men's clothing", "women's clothing", 'all'].map((cat) => (
                            <label key={cat} className="flex items-center gap-2 mb-1 capitalize">
                                <input type="radio" name="category" value={cat} checked={selectedCategory === cat || (cat === 'all' && selectedCategory === '')} onChange={handleCategoryChange} className="accent-blue-600 cursor-pointer" />
                                {cat}
                            </label>
                        ))}
                    </div>

                    <div className="price">
                        <h3 className="py-2">Price</h3>
                        <input type="range" min="0" max="1000" value={price} onChange={handlePriceChange} className="w-full accent-white cursor-pointer" />
                        <div className="flex justify-between text-sm mt-1">
                            <span>$.{price}</span>
                            <span>$.1000</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
