'use client'

import React, { useState } from 'react';
import NavbarLinks from './NavbarLinks';
import Link from 'next/link';
import Image from 'next/image';
import NavbarBurger from './NavbarBurger';
import ButtonNav from './ButtonNav';
import MobileMenu from './MobileMenu';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full max-w-[1216px] mx-auto px-4 flex items-center justify-between mt-[25px] mb-[25px]">
            {/* Логотип */}
            <div className="flex-shrink-0 flex-start xl:mr-[6%] mr-[2%]">
                <Link href="/">
                    <Image
                        src="/images/Logo.svg"
                        alt="Logo"
                        width={261}
                        height={20}
                        className="w-[199px] h-[15px] sm:w-[261px] sm:h-[20px]"
                    />
                </Link>
            </div>

            {/* Меню */}
            <div className="hidden lg:flex flex-1 justify-center">
                <NavbarLinks />
            </div>

            {/* Кнопка */}
            <div className="flex items-center justify-end flex-shrink-0 xl:ml-[6%] ml-[2%] lg:max-w-[calc(100%-50px)] max-w-full">
                <div className="hidden sm:flex lg:mr-0 mr-[10px]">
                    <ButtonNav />
                </div>
                <NavbarBurger isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            </div>

            {/* Мобильное меню */}
            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </nav>
    );
}
