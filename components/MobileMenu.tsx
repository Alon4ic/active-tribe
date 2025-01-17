import React, { useEffect } from 'react';
import ButtonNav from './ButtonNav';
import { navbarLinks } from './NavbarLinks';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => document.body.classList.remove('overflow-hidden');
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-300 ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
            {/* Фон затемнения */}
            <div
                className="fixed inset-0 bg-black/80"
                onClick={onClose} // Закрытие при клике по фону
            ></div>

            {/* Контейнер меню */}
            <div
                className={`fixed top-0 left-0 w-[100vw] bg-[#eee9e2] shadow-lg transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                onClick={(e) => e.stopPropagation()} // Остановка закрытия при клике по меню
            >
                {/* Верхняя панель с логотипом и кнопкой */}
                <div className="flex justify-between px-10 pt-4">
                    <Link
                        href="/"
                        onClick={onClose}
                        className="pt-[15px] pb-[15px]"
                    >
                        <Image
                            src="/images/Logo.svg"
                            alt="logo"
                            width={209}
                            height={16}
                        />
                    </Link>
                    <Button
                        onClick={onClose}
                        className="text-black bg-transparent hover:bg-[#88816E] text-sm w-[46px] h-[46px] p-2"
                    >
                        <Image
                            src="/images/btn-burger.svg"
                            alt="Button"
                            width={46}
                            height={46}
                        />
                    </Button>
                </div>

                {/* Ссылки меню */}
                <div className="relative flex pt-[34px] gap-[205px]">
                    <div className="flex md:max-w-[359px] w-[100%] flex-col md:justify-start justify-center md:items-start items-center gap-[15px] md:pl-[30px] pl-0">
                        {navbarLinks.map((item) => (
                            <Link
                                href={item.href}
                                key={item.id}
                                className="text-[40px] text-baseText leading-[58px] font-bold "
                                onClick={onClose} // Закрытие меню при клике на элемент
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex mt-4">
                            <ButtonNav />
                        </div>
                    </div>
                    <Image
                        src="/images/burger-fond.svg"
                        alt="fond"
                        width={307}
                        height={438}
                        className="absolute top-[68px] md:left-[629px] sm:left-[520px] phone:left-[487px] left-[216px]"
                    />
                    <div className="md:flex hidden flex-col justify-center items-start">
                        <div className="">
                            <p className="w-[217px] text-lg text-baseText leading-7 font-normal pb-[30px]">
                                Join the Active Tribe for a healthier and
                                happier life.
                            </p>
                            <div className="flex gap-[10px] mb-[16px] z-[100] cursor-pointer">
                                <Image
                                    src="/images/burger-mail.svg"
                                    alt="mail"
                                    width={31}
                                    height={24}
                                />
                                <a
                                    href="mailto:admin@active-tribe.com"
                                    className="text-base leading-6 font-normal text-baseText"
                                >
                                    admin@active-tribe.com
                                </a>
                            </div>
                            <div className="flex gap-[10px] cursor-pointer">
                                <Image
                                    src="/images/burger-phone.svg"
                                    alt="mail"
                                    width={24}
                                    height={24}
                                />
                                <a
                                    href="tel:971585113234"
                                    className="text-base leading-6 font-normal text-baseText cursor-pointer"
                                >
                                    +971 58 511 3234
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[49px] pb-[25px] flex justify-center">
                    <div className="mb-[25px]">
                        <Link
                            href="/privacy-policy"
                            className="uppercase font-manrope text-baseText text-[12.5px] leading-[17px] tracking-[10%]"
                            onClick={onClose}
                        >
                            Privacy Policy{' '}
                            <span
                                className="inline-block w-1 h-1 bg-[#A29B89] ml-[6px] mr-[6px] mb-1"
                                aria-hidden="true"
                            ></span>{' '}
                            Legal{' '}
                            <span
                                className="inline-block w-1 h-1 bg-[#A29B89] ml-[6px] mr-[6px] mb-1"
                                aria-hidden="true"
                            ></span>
                        </Link>
                        <p className="uppercase font-manrope text-baseText text-[12.5px] leading-[17px] tracking-[10%] pt-3">
                            Copyright 2025, Active Tribe
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-6 pb-[19px]">
                    <a
                        className="px-[7px] py-2 rounded-full bg-[#88816e] flex justify-center items-center
									  "
                        href="https://www.linkedin.com/company/active-tribe-me/"
                    >
                        <Image
                            src="../images/contactUs/linkedin.svg"
                            alt="Linkedin"
                            width={15}
                            height={14.3}
                        />
                    </a>
                    <a
                        className="px-[7px] py-2 rounded-full bg-[#88816e] flex justify-center items-center
									  "
                        href="https://www.linkedin.com/company/active-tribe-me/"
                    >
                        <Image
                            src="../images/contactUs/instagram.svg"
                            alt="Instagram"
                            width={15}
                            height={15}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
