'use client'

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-blue-950 text-white">
                <div className="flex flex-col md:flex-row max-md:gap-8 w-[75%] md:justify-between px-4 pt-7 md:mx-auto">

                    <div>
                        <h3 className='text-lg font-bold pb-2'>Filters</h3>

                        <ul className='flex flex-col items-start gap-2 py-2'>
                            <Link href='#' className="cursor-pointer hover:underline">All</Link>
                            <Link href='#' className="cursor-pointer hover:underline">Clothing</Link>
                            <Link href='#' className="cursor-pointer hover:underline">Electronics</Link>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-lg font-bold pb-2'>About Us</h3>

                        <ul className='flex flex-col gap-2 py-2'>
                            <Link href='#' className="cursor-pointer hover:underline">About Us</Link>
                            <Link href='#' className="cursor-pointer hover:underline">Contact</Link>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-lg font-bold pb-2'>Follow us</h3>

                        <ul className='flex items-center gap-4 py-2'>
                            <li className="h-9 w-9 flex items-center justify-center rounded-full bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer"><FaFacebookF /></li>
                            <li className="h-9 w-9 flex items-center justify-center rounded-full bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer"><FaXTwitter /></li>
                            <li className="h-9 w-9 flex items-center justify-center rounded-full bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer"><FaInstagram /></li>
                        </ul>
                    </div>
                </div>
                <p className="max-md:px-4 md:text-center pb-3">&copy; 2024. American</p>
            </footer>
        </>
    )
}

export default Footer
