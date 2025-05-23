'use client'

import { useState } from "react";
import Products from "@/components/Products";
import Sidebar from "@/components/Sidebar";
import { FaFilter } from "react-icons/fa";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div className="main-container flex flex-col md:flex-row px-5 my-10 mx-auto gap-5">
        <div className="filter-toggle block md:hidden">
          <p onClick={() => setSidebar(!sidebar)} className="flex gap-2 items-center cursor-pointer">Filters <FaFilter className="text-blue-600" /></p>
        </div>
        <Sidebar
          className="hidden md:block"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sidebar={sidebar}
          setSidebar={setSidebar}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        <Products
          selectedCategory={selectedCategory}
          maxPrice={maxPrice} />
      </div>
    </>
  );
}
