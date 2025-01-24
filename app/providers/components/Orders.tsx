import Image from 'next/image';
import React from 'react';
import orderData from '@/constants/order';
import Link from 'next/link';

export default function Orders() {
    return (
        <div className="max-w-[1254px] lg:mx-auto mx-5 lg:my-[100px] my-[50px]">
            <div className="flex md:flex-row flex-col justify-between md:mb-[60px] phone:mb-10 mb-[30px]">
                <div className="md:w-[39%] w-[100%]">
                    <h2 className="font-bold lg:text-[64px] md:text-[50px] phone:text-[40px] text-[30px] lg:leading-[74px] leading-[64px] text-baseText uppercase md:pb-0 phone:pb-[25px] pb-5">
                        <span className="text-darkGold">The order</span> process
                    </h2>
                </div>
                <div className="md:w-[49%] w-[100%]">
                    <p className="text-darkText font-normal text-lg leading-7">
                        At Active Tribe we make renting and using fitness
                        equipment a seamless and hassle-free experience. Here is
                        a step-by-step breakdown of how our service works.
                    </p>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between gap-6">
                {orderData.map((item) => (
                    <div
                        key={item.id}
                        className="md:max-w-[388.7px] w-full flex flex-col rounded-sm mt-5"
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={389}
                            height={236}
                            className="mb-[30px] w-full h-auto object-cover rounded"
                        />
                        <div className="flex justify-start gap-4 items-center">
                            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-darkGold text-white text-lg font-bold leading-6">
                                {item.num}
                            </div>
                            <p className="text-xl leading-6 font-bold text-baseText">
                                {item.title}
                            </p>
                        </div>
                        <div className="pt-[30px] break-words text-darkGray text-base font-normal leading-[26px]">
                            {item.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex phone:flex-row flex-col justify-center items-center gap-5 lg:mt-[60px] mt-10">
                <Link
                    href="#contact"
                    className="text-sm tracking-extra-tight leading-[21px] phone:w-[auto] w-full font-semibold text-white py-[14px] px-6 bg-darkText rounded-[100px]"
                >
                    <span>Let&apos;s get started</span>
                    <Image
                        src="/images/provid/arrow-right.svg"
                        alt="arrow"
                        width={15}
                        height={15}
                        className="hidden pl-[10px]"
                    />
                </Link>
                <Link
                    href="#contact"
                    className="text-sm tracking-extra-tight leading-[21px] phone:w-[auto] w-full font-semibold text-white py-[14px] px-6 lg:bg-darkText bg-darkGold rounded-[100px]"
                >
                    <span>Free consultation</span>
                    <Image
                        src="/images/provid/free-icon.svg"
                        alt="arrow"
                        width={12}
                        height={12}
                        className="hidden pl-[10px]"
                    />
                </Link>
            </div>
        </div>
    );
}
