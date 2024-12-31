import Image from 'next/image';
import React from 'react';

export default function Structure() {
    return (
        <>
            <div className="w-full relative lg:hidden">
                <Image
                    src="/images/station-gym-top.jpg"
                    alt="Station"
                    width={590}
                    height={630}
                    className="lg:rounded-[10px] rounded-[0px] w-full md:h-[630px] h-[456px]"
                />
                <Image
                    src="/images/station-gym.svg"
                    alt="Station Logo"
                    width={197}
                    height={70}
                    className="absolute left-[22px] md:bottom-[40px] bottom-[19px]"
                />
                <div className="w-full md:h-[25px] h-[45px] bg-white border-t-[0.5px] md:border-red-500 border-white" />
            </div>
            <div className="bg-[#261F18] lg:pt-[100px] pt-[60px] lg:pb-[100px] pb-[21px] relative overflow-hidden object-contain">
                <div className="max-w-[1214px] lg:mx-auto mx-5">
                    <div className="flex justify-between">
                        <div className="lg:flex hidden relative lg:w-[48.7%] w-full h-[630px]">
                            <Image
                                src="/images/station.jpg"
                                alt="Station"
                                width={590}
                                height={630}
                                className="lg:rounded-[10px] rounded-[0px] w-full h-[630px]"
                            />
                            <Image
                                src="/images/station-gym.svg"
                                alt="Station Logo"
                                width={197}
                                height={70}
                                className="absolute right-[22px] bottom-[22px]"
                            />
                        </div>
                        <div className="lg:w-[43.3%] w-full lg:ml-[8%] ml-[0px]">
                            <h2 className="uppercase  md:text-[50px] phone:text-[40px] text-[35px] font-bold lg:leading-[65px] md:leading-[72px] phone:leading-[62px] leading-[52px] text-white mb-[40px]">
                                <span className="lg:uppercase md:normal-case uppercase text-[#A29B89]">
                                    GymStation
                                </span>{' '}
                                Structure
                            </h2>
                            <p className="text-lg leading-7 font-normal text-white mb-[40px]">
                                GymStation is convenience, accessibility,
                                variety of workouts, outdoor experience, and the
                                social aspect of joining the Active Tribe
                                community.
                            </p>
                            <div className="grid grid-cols-2 lg:gap-8 gap-[48px]">
                                <div className="block lg:w-[220px] w-full">
                                    <div className="flex justify-center items-center w-[48px] h-[48px] bg-[#88816E] rounded-full mb-4">
                                        <Image
                                            src="/images/barbell.svg"
                                            alt="barbell"
                                            width={30}
                                            height={30}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-white pb-[6px]">
                                        Great equipment
                                    </h3>
                                    <p className="text-base font-normal text-white leading-[26px]">
                                        Exercise with our equipment to achieve
                                        your fitness goals.
                                    </p>
                                </div>
                                <div className="block lg:w-[220px] w-full">
                                    <div className="flex justify-center items-center w-[48px] h-[48px] bg-[#88816E] rounded-full mb-4">
                                        <Image
                                            src="/images/phone.svg"
                                            alt="Phone"
                                            width={27}
                                            height={27}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-white pb-[6px]">
                                        Available app
                                    </h3>
                                    <p className="text-base font-normal text-white leading-[26px]">
                                        Track your fitness journey with our
                                        user-friendly app.
                                    </p>
                                </div>
                                <div className="block lg:w-[220px] w-full">
                                    <div className="flex justify-center items-center w-[48px] h-[48px] bg-[#88816E] rounded-full mb-4">
                                        <Image
                                            src="/images/workout.svg"
                                            alt="barbell"
                                            width={27}
                                            height={27}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-white pb-[6px]">
                                        Build Your Workout (BYW)
                                    </h3>
                                    <p className="text-base font-normal text-white leading-[26px]">
                                        Customize your fitness plan and achieve
                                        your goals with us.
                                    </p>
                                </div>
                                <div className="block lg:w-[220px] w-full">
                                    <div className="flex justify-center items-center w-[48px] h-[48px] bg-[#88816E] rounded-full mb-4">
                                        <Image
                                            src="/images/community.svg"
                                            alt="barbell"
                                            width={30}
                                            height={30}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-white pb-[6px]">
                                        Community
                                    </h3>
                                    <p className="text-base font-normal text-white leading-[26px]">
                                        Join our vibrant community at the heart
                                        of fitness excellence.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Image
                            src="/images/sportman.svg"
                            alt="Sport"
                            width={600}
                            height={855}
                            className="absolute flex bottom-[0px] w-auto lg:left-[80%] left-[62%] lg:h-[855px] h-[535px]"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
