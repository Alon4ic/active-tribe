import React from 'react';
import Link from 'next/link';
import ButtonNav from '@/components/ButtonNav';
import Image from 'next/image';
import workoutData from '@/constants/workout';

export default function Workout() {
    return (
        <div className="max-w-[1216px] lg:mx-auto lg:pt-[100px] pt-[50px] lg:pb-[100px] pb-[50px]">
            <div className="block">
                <div className="flex lg:flex-row flex-col w-[100%] lg:justify-between justify-center mb-[15px] lg:mx-auto lg:pl-0 pl-5 lg:pr-0 pr-5">
                    <div className="lg:w-[48.8%] w-[100%] lg:mb-0 mb-[40px] lg:text-left text-center">
                        <h2 className="uppercase md:text-[50px] phone:text-[40px] text-[50px] md:leading-[62px] phone:leading-[55px] leading-[62px] font-bold text-baseText">
                            Build your own{' '}
                            <span className="text-darkGold">Workout</span>
                        </h2>
                    </div>
                    <div className="lg:w-[50%] w-[100%]">
                        <p className="text-lg leading-7 font-normal text-darkText lg:pb-[40px] pb-[35px]">
                            <span className="font-bold">GymStation</span> is
                            convenience, accessibility, variety of workouts,
                            outdoor experience, and the social aspect of joining
                            the
                            <span className="font-bold">
                                {' '}
                                Active Tribe
                            </span>{' '}
                            community.
                        </p>
                        <p>
                            The Ultimate Workout Flexibility: Take control of
                            your fitness journey with our customizable workout
                            builder. Choose from a variety of exercises
                            targeting different muscle groups and fitness
                            levels, and create a routine that perfectly suits
                            your needs and preferences.
                        </p>
                    </div>
                </div>
                <div className="w-full flex lg:justify-start justify-center lg:mt-[-40px] mt-[40px] ">
                    <div className="w-[156px]">
                        <ButtonNav href="#contact" text="Check our app" />
                    </div>
                </div>
                <div className="md:flex hidden mt-[90px] mb-[50px] rounded-[10px]">
                    <Image
                        src="/images/users/users-work.jpg"
                        alt="Workout"
                        width={1215}
                        height={650}
                    />
                </div>
                <div className="md:hidden flex phone:mt-[40px] mt-[30px] mb-[50px] rounded-[10px]">
                    <Image
                        src="/images/users/users-work-2.jpg"
                        alt="Workout"
                        width={768}
                        height={650}
                    />
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[15px] lg:mx-auto mx-5">
                    {workoutData.map((item, index) => {
                        if (item.isButton) {
                            return (
                                <Link
                                    href="/#contact"
                                    key={index}
                                    className="flex items-center justify-start py-[17.5px] pl-5 rounded-[10px] transition-colors duration-300 hover:bg-gray-50 lg:col-span-1 md:col-span-2 md:w-full border border-darkGold"
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={25}
                                        height={25}
                                        className="mr-[10px]"
                                    />
                                    <span className="text-lg font-satoshi font-normal leading-7 text-darkText">
                                        {item.text}
                                    </span>
                                </Link>
                            );
                        }
                        return (
                            <div
                                key={index}
                                className="flex items-center justify-start py-[17.5px] pl-5 rounded-[10px] border border-darkGold"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={25}
                                    height={25}
                                    className="mr-[10px]"
                                />
                                <p className="text-center text-gray-700 font-semibold">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
