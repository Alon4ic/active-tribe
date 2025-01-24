import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function TopBlock() {
    return (
        <div className="relative bg-[url('/images/provid/top-block-provid.jpg')] bg-right bg-cover bg-no-repeat ">
            <div className="max-w-[1216px] lg:mx-auto mx-5">
                <div className="flex md:justify-end justify-start">
                    <div className="flex flex-col xl:mt-[126px] md:mt-[66px] phone:mt-[94px] mt-[51px] xl:mb-[192px] md:mb-[66px] phone:mb-[95px] mb-[50px] xl:mr-0 lg:mr-[10%] md:mr-[15%] mr-0 sm:w-[495px] w-full">
                        <div className="w-[169px] h-[60px] p-[8.5px] bg-white rounded">
                            <Image
                                src="/images/Logo_GS.svg"
                                alt="Logo Home"
                                width={152}
                                height={43}
                                className="w-[152px] h-[43px]"
                            />
                        </div>
                        <h1 className="uppercase phone:text-[40px] text-[30px] phone:leading-[55px] leading-[45px] font-extrabold text-baseText phone:mt-10 mt-[30px]">
                            promote sport/fitness Experience with{' '}
                            <span className="text-white">GymStation</span>
                        </h1>
                        <p className="text-baseText text-xl mt-5 mb-[39px]">
                            Ready to revolutionize your community&#39;s health
                            and happiness?{' '}
                            <span className="font-bold">GymStation</span> is
                            your answer. Let&#39;s create a healthier, more
                            active space together. Our turnkey solution boosts
                            resident satisfaction, enhances property value, and
                            fosters a healthier lifestyle. Join the movement
                            towards accessible outdoor fitness.
                        </p>
                        <Link
                            className="bg-baseText text-white w-[199px] lg:flex hidden justify-center items-center rounded-3xl font-semibold text-[15px] py-[14px] px-[18px] lg:mb-auto md:mb-[57px] hover:bg-[#45392C] active:bg-baseText active:shadow-custom transition-colors duration-300"
                            href="#contact"
                        >
                            Find Out More
                            <Image
                                src="/images/Group.svg"
                                alt="Right Arrow"
                                width={11.25}
                                height={11.25}
                                className="ml-[10px]"
                            />
                        </Link>
                        <Link
                            className="bg-baseText lg:hidden flex text-white w-[199px] justify-center items-center rounded-3xl font-semibold text-[15px] py-[10px] hover:bg-[#45392C] active:shadow-custom"
                            href="/"
                        >
                            Become a partner
                            <Image
                                src="/images/Vector.svg"
                                alt="Right Arrow"
                                width={11.25}
                                height={11.25}
                                className="ml-[10px]"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
