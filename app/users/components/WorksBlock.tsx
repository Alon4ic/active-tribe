import WorksList from '@/components/WorksList';
import Image from 'next/image';
import React from 'react';

export default function WorksBlock() {
    return (
        <div className="max-w-[1214px] lg:mx-auto mx-6 lg:pt-[100px] pt-[50px] pb-[50px]">
            <div className="block lg:flex lg:justify-between mb-[60px]">
                <div className="lg:w-[50%] w-full">
                    <h2 className="text-baseText uppercase md:text-[50px] phone:text-[40px] text-[30px] font-bold">
                        <span className="text-[#88816E]">How</span> it works
                    </h2>
                </div>
                <div className="lg:w-[50%] w-full lg:pt-[0px] pt-[20px] lg:pb-[0px]">
                    <p className="text-lg text-baseText leading-7">
                        At Active Tribe we make renting and using fitness
                        equipment a seamless and hassle-free experience. Here is
                        a step-by-step breakdown of how our service works.
                    </p>
                </div>
            </div>
            <div className="lg:flex block lg:pt-5 pt-[0px]">
                <div className="lg:w-[50%] w-full lg:pr-[6.5%] pr-[0px]">
                    <WorksList />
                </div>
                <div className=" flex lg:w-[50%] lg:mx-0 w-full sm:h-[716px] h-full relative lg:mt-0 mt-10">
                    <Image
                        src="/images/works-block.jpg"
                        alt="Map"
                        width={597}
                        height={716}
                        className="lg:block md:hidden block lg:w-[597px] w-full h-auto object-cover"
                    />
                    <Image
                        src="/images/works-block2.jpg"
                        alt="Station"
                        width={974}
                        height={716}
                        className="lg:hidden md:block hidden lg:w-[597px] w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
