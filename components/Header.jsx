"use client"
import { IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa6";

const Header = () => {
    return (
        <>
            <nav className="flex w-full items-center justify-between p-4 bg-blue-700 text-white">
                <div className="logo font-bold text-lg">LOGO</div>

                <div className="search">
                    <input className="w-[500px] px-4 py-2 border rounded-xl" type="text" name="search" placeholder="Search for products..." />
                </div>

                <div className="buttons flex items-center gap-3">
                    <button className="cart flex items-center gap-2 rounded-xl bg-blue-900 px-4 py-2 cursor-pointer hover:bg-blue-950 transition-all duration-300">Cart <IoMdCart /></button>
                    <button className="profile flex items-center gap-2 rounded-xl bg-blue-900 px-4 py-2 cursor-pointer hover:bg-blue-950 transition-all duration-300">Profile <FaUser /></button>
                </div>
            </nav>
        </>
    )
}

export default Header
