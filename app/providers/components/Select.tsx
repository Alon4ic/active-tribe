import React from 'react';
import blocks from '@/constants/select';
import Link from 'next/link';
import Image from 'next/image';

export default function Select() {
    return (
        <div className="max-w-[1216px] lg:mx-auto mx-5 lg:py-[100px] py-[50px] border-b border-[#F2F2F2]">
            <h2 className="uppercase font-bold md:text-[50px] phone:text-[40px] text-[30px] md:leading-[62px] phone:leading-[55px] leading-[45px] text-center pb-[25px] text-baseText">
                Select equipment that will be in your{' '}
                <span className="md:normal-case uppercase text-darkGold">GymStation</span>
            </h2>
            <p className="text-base leading-[26px] text-center font-normal text-black">
                Customize your workout by selecting the equipment you need
                within the GymStation
            </p>
            <div className="grid grid-cols gap-y-[40px] align-middle phone:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 phone:mt-[60px] mt-[40px]">
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
                                <p className="text-center text-darkText font-semibold text-2xl leading-[26px]">
                                    {block.text}
                                </p>
                            </div>
                        );
                    }
                    if (block.type === 'special') {
                        return (
                            <div
                                key={block.id}
                                className={`lg:flex lg:w-auto md:w-[100%] flex-col px-[29px] pt-[27px] rounded bg-darkGold lg:text-start text-center
               md:hidden phone:flex hidden lg:justify-start phone:justify-center lg:items-start items-center`}
                            >
                                <h3 className="text-[35px] leading-[45px] font-semibold tracking-[-0.56] text-white mb-5">
                                    {block.title}
                                </h3>
                                <p className="text-base leading-[26px] font-medium text-white">
                                    {block.text}
                                </p>
                                <Link
                                    href="/providers/#contact"
                                    className="flex items-center mt-[29px]"
                                >
                                    <span className="font-semibold text-lg leading-[22px] text-white pr-4">
                                        {block.content}
                                    </span>
                                    <Image
                                        src={block.src}
                                        alt="arrow"
                                        width={25}
                                        height={24}
                                    />
                                </Link>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div
                className={`lg:hidden md:block text-center w-full mx-auto mt-10 px-[29px] pt-[27px] rounded bg-darkGold 
               phone:hidden block`}
            >
                <h3 className="text-[35px] leading-[45px] font-semibold tracking-[-0.56] text-white mb-5">
                    Custom equipment
                </h3>
                <p className="text-base leading-[26px] font-medium text-white">
                    We believe it takes great people to make a great product.
                </p>
                <Link
                    href="/providers/#contact"
                    className="flex justify-center items-center mt-[29px] pb-[27px]"
                >
                    <span className="font-semibold text-lg leading-[22px] text-white pr-4">
                        Contact Us
                    </span>
                    <Image
                        src="/images/provid/arrow-right.svg"
                        alt="arrow"
                        width={25}
                        height={24}
                    />
                </Link>
            </div>
        </div>
    );
}
