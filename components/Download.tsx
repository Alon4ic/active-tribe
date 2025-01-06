import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Download() {
    return (
        <div className="max-w-[1026px] lg:mx-auto mx-5 pt-[50px] md:pb-[77px] pb-[50px]">
            <div className="flex flex-col justify-center text-center">
                <h2 className="md:text-[50px] phone:text-[40px] text-[30px] font-bold md:leading-[70px] phone:leading-[60px] leading-[45px] text-baseText uppercase mb-[11px]">
                    Start your transformation With{' '}
                    <span className="text-[#88816E]">Active Tribe</span> today
                </h2>
                <div className="max-w-[880px] block mx-auto text-center mb-[27px]">
                    <p className="text-lg leading-7 font-normal">
                        Register in activetribe app and take the first step
                        towards achieving your health and wellness goals.
                        Download our app now.
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-[520px] flex phone:flex-row flex-col gap-[17px]">
                        <Link href="https://www.apple.com/app-store/">
                            <Image
                                src="/images/appstore.jpg"
                                alt="App Store"
                                width={249}
                                height={76}
                            />
                        </Link>
                        <Link href="https://play.google.com/store/games">
                            <Image
                                src="/images/googleplay.jpg"
                                alt="Google play"
                                width={254}
                                height={77}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
