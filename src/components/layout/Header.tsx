"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 1);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed z-30 top-0 left-0 w-full p-4 flex justify-center items-center bg-transparent ${
                isScrolled ? "backdrop-blur-lg" : ""
            }`}
        >
            <div
                className={`w-full flex justify-between items-center transition-all duration-500 ease-in-out px-4 md:px-6 ${
                    isScrolled ? "max-w-[90%]" : "max-w-[100%]"
                }`}
            >
                <Link href="/">
                    <Image
                        src="/logos/bdn-logo-barco-blanco.png"
                        alt="logo"
                        width={200}
                        height={400}
                        className="w-14 h-auto"
                    />
                </Link>

                <nav className="hidden md:flex items-center font-roboto text-white space-x-4">
                    <Link
                        href="/inicio"
                        className="py-3 px-4 border-b border-transparent hover:border-white transition-all hover:drop-shadow-[0_0_10px_white]"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/menu"
                        className="py-3 px-4 border-b border-transparent hover:border-white transition-all hover:drop-shadow-[0_0_10px_white]"
                    >
                        Menú
                    </Link>
                    <Link
                        href="/contacto"
                        className="py-3 px-4 border-b border-transparent hover:border-white transition-all hover:drop-shadow-[0_0_10px_white]"
                    >
                        Contacto
                    </Link>
                </nav>

                <div className="md:hidden">
                    <HiOutlineMenu className="w-8 h-auto text-white" />
                </div>
            </div>
        </header>
    );
}
