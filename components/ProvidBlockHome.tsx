import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function ProvidBlockHome() {
    return (
        <section
            // style={{
            //     backgroundImage: "url('/images/provid-2.jpg')",
            // }}
            className="flex justify-end lg:w-[50%] w-[100%] md:bg-[url('/images/provid-2.jpg')] bg-[url('/images/provid-mobile.jpg')] bg-cover bg-right bg-no-repeat"
        >
            <div className="flex flex-col lg:max-w-[512px] lg:ml-5 lg:mr-[9%] lg:mt-[98px] md:mt-[73px] mt-[82px] mb-[49px] mx-5 md:max-w-[609px] ">
                <Button
                    asChild
                    style={{ width: '175px', height: '40px' }}
                    className="hidden lg:flex items-center justify-center border border-transparent hover:border-[#E8E3D1] bg-[#E8E3D1] hover:bg-[#f2f1ee] rounded-3xl text-[#0D0D0D] text-lg uppercase font-gilroy font-bold"
                >
                    <Link href="/provid">For Provider</Link>
                </Button>
                <div className="w-[169px] h-[60px] bg-white mt-5 mb-5">
                    <Image
                        src="/images/Logo_GS.svg"
                        alt="Logo Home"
                        width={169}
                        height={60}
                        className="w-[169px] h-[60px]"
                    />
                </div>
                <h1 className="lg:block hidden font-extrabold uppercase text-[#261F18] text-[40px] leading-[55px]">
                    Unlock your fitness potential now with{' '}
                    <span className="md:uppercase normal-case md:text-white text-[#88816E]">
                        GymStation
                    </span>
                </h1>
                <h1 className="lg:hidden block font-extrabold uppercase text-[#261F18] sm:text-[40px] text-[30px] leading-[55px]">
                    promote sport/fitness Experience with{' '}
                    <span className="md:uppercase normal-case sm:text-[#88816E] text-[#261F18]">
                        GymStation
                    </span>
                </h1>
                <p className="text-[#261F18] text-xl mt-5 mb-[39px]">
                    Ready to revolutionize your community&#39;s health and
                    happiness? <span className="font-bold">GymStation</span> is
                    your answer. Let&#39;s create a healthier, more active space
                    together. Our turnkey solution boosts resident satisfaction,
                    enhances property value, and fosters a healthier lifestyle.
                    Join the movement towards accessible outdoor fitness.
                </p>
                <Link
                    className="bg-[#261F18] text-white w-[199px] lg:flex hidden justify-center items-center rounded-3xl font-semibold text-[15px] py-[10px] lg:mb-auto md:mb-[57px] hover:bg-[#45392C] active:bg-[#261F18] active:shadow-custom transition-colors duration-300"
                    href="/"
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
                    className="bg-[#261F18] lg:hidden flex text-white w-[199px] justify-center items-center rounded-3xl font-semibold text-[15px] py-[10px] lg:mb-auto md:mb-[57px] hover:bg-[#45392C] active:shadow-custom"
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
        </section>
    );
}
