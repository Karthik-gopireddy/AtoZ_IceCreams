import React from 'react';
import { Link } from "react-router-dom";

const NavBarSection = () => {
  return (
    <section>
      <header className="fixed top-0 left-0 w-full body-font bg-purple-300 text-white z-50 shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-bold text-[#000000]">AtoZ</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/">
              <span className="mr-5 hover:text-white font-bold text-[#000000]">Home</span>
            </Link>
            <Link to="/menu">
              <span className="mr-5 hover:text-white font-bold text-[#000000]">Menu</span>
            </Link>
            <Link to="/cart">
              <span className="mr-5 hover:text-white font-bold text-[#000000]">Cart</span>
            </Link>
            {/* <Link to="/orders">
              <span className="mr-5 hover:text-white font-bold text-[#000000]">Orders</span>
            </Link>
            <span className="mr-5 hover:text-white font-bold text-[#000000]">Logout</span> */}
          </nav>
        </div>
      </header>
      <div className="pt-20">
        {/* Add padding to prevent content from hiding behind the fixed navbar */}
      </div>
    </section>
  );
}

export default NavBarSection;
