"use client"

import { useState } from "react"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Quantity = () => {
    const [quantity, setQuantity] = useState(0);
    return (
        <>
            <div className="quantity flex items-center gap-6 my-5">
                <div onClick={() => setQuantity(quantity - 1)} className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-700 text-white cursor-pointer"><FaMinus /></div>
                <p className="text-lg">{quantity}</p>
                <div onClick={() => setQuantity(quantity + 1)} className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-700 text-white cursor-pointer"><FaPlus /></div>
            </div>
        </>
    )
}

export default Quantity
