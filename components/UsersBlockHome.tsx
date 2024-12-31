import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function UsersBlockHome() {
    return (
        <section
            // style={{
            //     backgroundImage: "url('/images/users-2.jpg')",
            // }}
            className="flex justify-start lg:w-[50%] w-[100%] md:bg-[url('/images/users-2.jpg')] sm:bg-[url('/images/users-mobile.jpg')] bg-[url('/images/users-smal.jpg')] bg-cover bg-left bg-no-repeat"
        >
            <div className="flex flex-col max-w-[512px] lg:ml-[9%] ml-[20px] md:mt-[90px] mt-[82px] lg:mb-auto mb-[89px] lg:mt-[98px]">
                <Button
                    asChild
                    style={{ width: '133px', height: '40px' }}
                    className="hidden lg:flex items-center justify-center bg-[#E8E3D1] hover:bg-[#f2f1ee] rounded-3xl text-[#0D0D0D] text-lg uppercase font-gilroy font-bold"
                >
                    <Link href="/provid">For Users</Link>
                </Button>
                <div className="hidden lg:block w-[169px] h-[60px] bg-white mt-5 mb-5">
                    <Image
                        src="/images/Logo_GS.svg"
                        alt="Logo Home"
                        width={169}
                        height={60}
                        className="w-[169px] h-[60px]"
                    />
                </div>
                <h1 className="font-extrabold uppercase text-[#261F18] sm:text-[40px] text-[30px] leading-[55px]">
                    Unlock your fitness potential now with{' '}
                    <span className="md:uppercase normal-case md:text-[#261F18] sm:text-[#88816E] text-[#261F18]">
                        GymStation
                    </span>
                </h1>
                <p className="text-[#261F18] text-xl mt-5">
                    Introducing GymStation, the innovative fitness equipment
                    rental service in your favourite outdoor location.
                </p>
                <p className="text-[#261F18] text-xl mb-[39px] mt-2">
                    Join the <span className="font-bold">GymStation</span>{' '}
                    community!
                </p>
                <Link
                    className="bg-[#261F18] text-white w-[199px] flex justify-center items-center rounded-3xl font-semibold text-[15px] py-[10px] hover:bg-[#45392C] active:shadow-custom transition-colors duration-300"
                    href="/"
                >
                    Join the community
                    <Image
                        src="/images/Group.svg"
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
