import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

interface ButtonProps {
    href: string;
    text: string;
}

export default function ButtonNav({ href, text }: ButtonProps) {
    return (
        <Button className="flex items-center bg-[#88816E] active:bg-[#88816E] hover:bg-[#A29B89] active:shadow-btnLight transition-colors duration-300 rounded-3xl pt-[10px] pl-4 pb-[11px] pr-[14.8px]" asChild>
            <Link href={href}>
                <span className="text-white text-sm font-satoshi font-bold pl-[10px]">
                    {text}
                </span>
                <Image
                    src="/images/ic_arrow.svg"
                    alt="Right Arrow"
                    width={20}
                    height={20}
                />
            </Link>
        </Button>
    );
}
