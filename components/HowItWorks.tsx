import React from 'react';
import WorksList from './WorksList';
import Image from 'next/image';

export default function HowItWorks() {
    return (
        <section className="max-w-[1214px] lg:pt-[100px] pt-[50px] mx-auto px-4 lg:px-0 pb-[50px]">
            {/* Заголовок и описание */}
            <div className="block lg:flex lg:justify-between mb-[60px]">
                <div className="lg:w-[50%] w-full">
                    <h2 className="text-[#261F18] uppercase md:text-[50px] phone:text-[40px] text-[30px] font-bold">
                        <span className="text-[#88816E]">How</span> it works
                    </h2>
                </div>
                <div className="lg:w-[50%] w-full lg:pt-[0px] pt-[20px] lg:pb-[0px]">
                    <p className="text-lg text-[#261F18] leading-7">
                        At Active Tribe we make renting and using fitness
                        equipment a seamless and hassle-free experience. Here is
                        a step-by-step breakdown of how our service works.
                    </p>
                </div>
            </div>
            {/* Контент */}
            <div className="lg:flex block lg:pt-5 pt-[0px]">
                {/* Список шагов */}
                <div className="lg:w-[50%] w-full lg:pr-[6.5%] pr-[0px]">
                    <WorksList />
                </div>
                {/* Блок с изображениями */}
                <div className=" flex lg:w-[50%] w-full sm:h-[716px] h-full relative lg:mt-0 mt-10">
                    {/* Основное изображение для больших экранов */}
                    <Image
                        src="/images/map.jpg"
                        alt="Map"
                        width={597}
                        height={716}
                        className="lg:block md:hidden block lg:w-[597px] w-full h-auto object-cover"
                    />
                    <Image
                        src="/images/lg_map.jpg"
                        alt="Map"
                        width={597}
                        height={716}
                        className="lg:hidden md:block hidden lg:w-[597px] w-full h-auto object-cover"
                    />
                    <Image
                        src="/images/phone-logo.svg"
                        alt="Logo"
                        width={196.9}
                        height={70}
                        className="absolute right-[34px] sm:w-[196px] w-[100px] sm:h-[70px] h-[35px] lg:bottom-[33px]  md:bottom-[30px] bottom-[20px] lg:right-[50px]"
                    />
                </div>
            </div>
        </section>
    );
}
