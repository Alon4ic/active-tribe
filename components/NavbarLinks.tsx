'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const navbarLinks = [
    { id: 0, name: 'For Providers', href: '/providers' },
    { id: 1, name: 'For Users', href: '/users' },
    { id: 2, name: 'About Us', href: '/#about' },
    { id: 3, name: 'How it Works', href: '/#works' },
    { id: 4, name: 'Structure', href: '/#structure' },
    { id: 5, name: 'FAQ', href: '/#faq' },
    { id: 6, name: 'Contact', href: '#contact' },
];

export default function NavbarLinks({
    isVertical,
    isFooter,
}: {
    isVertical?: boolean;
    isFooter?: boolean;
}) {
    const location = usePathname();

    return (
        <div
            className={cn(
                'flex',
                isVertical
                    ? 'flex-col space-y-2'
                    : 'justify-between items-center  text-base',
                isFooter
                    ? 'desctop:gap-5 gap-3 text-sm justify-between text-[#BDBDBD]'
                    : ''
            )}
        >
            {navbarLinks.map((item) => (
                <Link
                    href={item.href}
                    key={item.id}
                    className={cn(
                        isFooter
                            ? location === item.href
                                ? 'text-white font-semibold' // Белый цвет и жирный текст для активных ссылок в футере
                                : 'text-[#BDBDBD] hover:text-white'
                            : location === item.href
                            ? 'desctop:px-2 py-2 px-[4px] bg-muted rounded-sm'
                            : 'desctop:px-2 py-2 px-[4px] hover:bg-muted hover:bg-opacity-75 text-base',
                        'group font-medium whitespace-nowrap' // Предотвращение переноса текста
                    )}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
}
