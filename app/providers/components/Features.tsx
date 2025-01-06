import Image from 'next/image';
import React from 'react';
import { listDataOne } from '@/constants/list';
import { listDataTwo } from '@/constants/list';

export default function Features() {
    return (
        <div className="max-w-[1216px] lg:mx-auto mx-5 lg:pt-[100px] lg:pb-[100px] pt-[50px] pb-[50px]">
            <div className="flex md:flex-row flex-col justify-between">
                <h2 className="md:w-[50%] w-[100%] uppercase md:text-[50px] phone:text-[40px] text-[30px] font-bold leading-[65px] text-darkText">
                    <span className="text-darkGold md:uppercase normal-case">
                        GymStation
                    </span>{' '}
                    <br className="md:block hidden" />
                    Features
                </h2>
                <p className="md:w-[50%] w-[100%] text-lg font-satoshi leading-7 font-normal text-darkText">
                    Discover the innovative GymStation Structure, meticulously
                    engineered to provide secure storage solutions for your
                    rented sports equipment, ensuring convenience and peace of
                    mind.
                </p>
            </div>
            <div className="bg-white relative py-[25px] phone:mt-[60px] lg:mx-0 mx-[-20px] mt-10 mb-[50px]">
                <Image
                    src="/images/provid/provid-block.png"
                    alt="Gym Station"
                    width={1215}
                    height={650}
                    className="md:block hidden"
                />
                <Image
                    src="/images/provid/provid-block-smal.png"
                    alt="Gym Station"
                    width={868}
                    height={641}
                    className="md:hidden block"
                />
            </div>
            <div className="lg:grid hidden lg:grid-cols-3 gap-4 w-full">
                {listDataOne.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-start items-center px-4 py-5 bg-white border border-darkGold rounded-[10px] hover:shadow-provid transition-shadow duration-300 group"
                    >
                        <div className="w-[30px] h-[30px] rounded-full bg-darkGold group-hover:bg-baseText flex justify-center items-center mr-[10px] font-satoshi font-bold text-[15px] leading-[15px] text-white transition-color duration-300 flex-shrink-0">
                            {item.num}
                        </div>
                        <h4 className="ml-2">{item.text}</h4>
                    </div>
                ))}
            </div>
            <div className="lg:hidden grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
                {listDataTwo.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-start items-center px-4 py-5 bg-white border border-darkGold rounded-[10px] hover:shadow-provid transition-shadow duration-300 group"
                    >
                        <div className="w-[30px] h-[30px] rounded-full bg-darkGold group-hover:bg-baseText flex justify-center items-center mr-[10px] font-satoshi font-bold text-[15px] leading-[15px] text-white transition-colors duration-300 flex-shrink-0">
                            {item.num}
                        </div>
                        <h4 className="ml-2 tracking-tighter text-base text-middleText font-medium leading-7">
                            {item.text}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
