import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TopBlock() {
    return (
        <div className="relative lg:bg-[url('/images/top-users.jpg')] md:bg-[url('/images/top-users2.jpg')] bg-[url('/images/top-users.jpg')] bg-cover bg-no-repeat ">
            <div className="max-w-[1216px] lg:mx-auto mx-5">
                <div className="flex flex-col justify-start md:pt-[141.5px] sm:pt-[221px] phone:pt-[180px] pt-[121.5px] md:pb-[218.4px] sm:pb-[221px] phone:pb-[185px] pb-[124.4px] md:max-w-[512px] max-w-[100%]">
                    <div className="w-[169px] h-[60px] p-[8.5px] bg-white rounded mb-[39px]">
                        <Image
                            src="/images/Logo_GS.svg"
                            alt="Logo Home"
                            width={152}
                            height={43}
                            className="w-[152px] h-[43px]"
                        />
                    </div>
                    <h1 className="sm:text-[40px] text-[30px] font-extrabold sm:leading-[55px] leading-[45px] text-baseText uppercase pb-5">
                        Unlock your fitness potential now with{' '}
                        <span className="md:text-darkGold text-baseText">Gymstation</span>
                    </h1>
                    <p className="pb-[10px] text-xl text-baseText font-normal leading-7">
                        Introducing{' '}
                        <span className="font-bold">GymStation</span>, the
                        innovative fitness equipment rental service in your
                        favourite outdoor location.
                    </p>
                    <p className="text-xl text-baseText font-normal leading-7">
                        Join the <span className="font-bold">GymStation</span>{' '}
                        community!
                    </p>
                    <Link
                        href="/#contact"
                        className="bg-baseText text-white w-[199px] flex justify-center items-center rounded-3xl font-semibold text-[15px] py-[14px] px-[18px] hover:bg-[#45392C] active:bg-baseText active:shadow-custom transition-colors duration-300 mt-[39px]"
                    >
                        <span>Join the community</span>
                        <Image
                            src="/images/Group.svg"
                            alt="Right Arrow"
                            width={11.25}
                            height={11.25}
                            className="ml-[10px]"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
