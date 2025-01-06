import React from 'react';
import blocks from '@/constants/select';
import Link from 'next/link';
import Image from 'next/image';

export default function Select() {
    return (
        <div className="max-w-[1216px] lg:mx-auto mx-5 py-[100px]">
            <h2 className="uppercase font-bold text-[50px] leading-[62px] text-center pb-[25px] text-baseText">
                Select equipment that will be in your{' '}
                <span className="normal-case text-darkGold">GymStation</span>
            </h2>
            <p className="text-base text-center font-normal text-black">
                Customize your workout by selecting the equipment you need
                within the GymStation
            </p>
            <div className="grid grid-cols align-middle phone:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {blocks.map((block) => {
                    if (block.type === 'image') {
                        return (
                            <div
                                key={block.id}
                                className="flex flex-col items-center"
                            >
                                <Image
                                    src={block.src}
                                    alt={block.text}
                                    width={289}
                                    height={300}
                                    className="w-full h-auto rounded mb-6"
                                />
                                <p className="mt-2 text-center text-darkText font-semibold text-2xl">
                                    {block.text}
                                </p>
                            </div>
                        );
                    }
                    if (block.type === 'special') {
                        return (
                            <div
                                key={block.id}
                                className={`lg:flex flex-col px-[29px] pt-[27px] p-6 rounded bg-darkGold 
              md:hidden phone:flex hidden`}
                            >
                                <h3 className="text-xl font-bold text-white">
                                    {block.title}
                                </h3>
                                <p className="mt-2 text-white">{block.text}</p>
                                <Link href="/provid/#contact" className='flex'>
                                    <span>{block.content}</span>
                                    <Image
                                        src={block.src}
                                        alt="arrow"
                                        width={20}
                                        height={15}
                                    />
                                </Link>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}
