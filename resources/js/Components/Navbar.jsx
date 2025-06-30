import React from "react";
import Logo from "../../../public/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "Complaints",
        link: "/profile",
    },
    {
        id: 3,
        name: "Resolved Issues",
        link: "/dashboard",
    },
];
const Navbar = () => {
    return (
        <div className="shadow-md relative z-40">
            {/* Top Section - Logo, Search, Cart */}
            <div className="bg-primary/40 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <a
                        href="#"
                        className="font-bold text-2xl sm:text-3xl flex items-center gap-2"
                    >
                        <img src={Logo} className="w-10" />
                        ReactLaravel
                    </a>

                    {/* Search & Cart */}
                    <div className="flex items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="search"
                                className="w-[200px] sm:w-[250px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:border-primary"
                            />
                            <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>

                        {/* Cart Button */}
                        <button
                            onClick={() => alert("Ordering not available yet")}
                            className="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-full flex items-center justify-center"
                        >
                            <FaCartShopping className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Menu Links */}
            <div className="bg-white">
                <div className="container mx-auto">
                    <ul className="flex justify-center items-center gap-6 py-2">
                        {Menu.map((data) => (
                            <li key={data.id}>
                                <a
                                    href={data.link}
                                    className="text-sm font-medium text-black hover:text-primary transition duration-200 px-2"
                                >
                                    {data.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
