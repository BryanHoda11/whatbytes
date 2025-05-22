"use client"

import { useState } from "react"

const Sidebar = () => {
    const [price, setPrice] = useState(0);
    return (
        <>
            <div className="sidebar w-[20%] min-h-[50vh]">
                <div className="filters px-5 py-5 flex flex-col bg-blue-800 rounded-lg text-white">
                    <h3 className="text-lg font-semibold">Filters</h3>

                    <div className="category mb-3">
                        <h3 className="py-2">Category</h3>

                        <label className="flex items-center gap-2 mb-1">
                            <input type="radio" name="category" value="electronics" className="accent-blue-600 cursor-pointer" />
                            Electronics
                        </label>

                        <label className="flex items-center gap-2 mb-1">
                            <input type="radio" name="category" value="clothing" className="accent-blue-600 cursor-pointer" />
                            Clothing
                        </label>

                        <label className="flex items-center gap-2 mb-1">
                            <input type="radio" name="category" value="home" className="accent-blue-600 cursor-pointer" />
                            Home
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="radio" name="category" value="all" className="accent-blue-600 cursor-pointer" />
                            All
                        </label>
                    </div>

                    <div className="price">
                        <h3 className="py-2">Price</h3>
                        <input type="range" min="0" max="1000" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full accent-white cursor-pointer" />
                        <div className="flex justify-between text-sm mt-1">
                            <span>0</span>
                            <span>$.1000</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
