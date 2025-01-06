import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function DownloadApp() {
    return (
        <section className="max-w-[1214px] lg:mx-auto mx-5 pt-[60px] lg:pb-[100px] pb-[50px] leading-[54px]">
            <div className="lg:flex lg:flex-row flex-col justify-center">
                <div className="lg:w-[50%] w-[100%]">
                    <h2 className="animate-fadeInRight md:text-[40px] text-[30px] lg:text-left text-center font-bold md:leading-[54px] leading-[45px] align-middle text-baseText uppercase pb-5">
                        Download{' '}
                        <span className="text-[#88816E]">Active Tribe</span>{' '}
                        App: Your Fitness Companion
                    </h2>
                    <p className="animate-slide-in-delay font-medium text-lg lg:text-left text-center text-[#2F2D3B] leading-7">
                        Elevate your workouts and unlock the full potential of
                        GymStation. Download the Active Tribe app today and take
                        your fitness journey to the next level.
                    </p>
                </div>
                <div className="lg:w-[50%] w-[100%] flex lg:justify-end justify-center md:flex-row flex-col  lg:mt-0 mt-10">
                    <div className="w-[260px] bg-baseText h-[247px] md:mr-[4.8%] mr-[auto] ml-[auto] flex justify-between">
                        <div className="w-[130px]">
                            <div className="ml-[18px]">
                                <div className="w-[59px] h-[59px] bg-white rounded-full flex justify-center items-center mt-[23px]">
                                    <Image
                                        src="/images/aple.svg"
                                        alt="Aple"
                                        width={27}
                                        height={32}
                                        className="w-[27px] h-[32px]"
                                    />
                                </div>
                                <p className="text-xl font-bold text-white leading-6 pt-5 pb-[15px]">
                                    For iOS
                                </p>
                                <p className="text-xl font-normal text-white leading-6 mb-[22px]">
                                    iOS 15.6+
                                </p>
                                <Button
                                    asChild
                                    className="w-[116px] h-[41px] rounded-[100px] bg-[#88816E]  active:bg-[#88816E] hover:bg-[#A29B89] active:shadow-btnLight transition-colors duration-300"
                                >
                                    <Link
                                        className="font-semibold leading-[21px] text-sm text-white"
                                        href="#"
                                    >
                                        Download
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="w-[130px] flex justify-end">
                            <div className="w-84[px] h-[84px] mt-[23px] mr-[20px]">
                                <Image
                                    src="/images/qrcode.svg"
                                    alt="QR Code"
                                    width={84}
                                    height={84}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[260px] bg-baseText h-[247px] mr-[auto] ml-[auto] md:mt-[0px] mt-[30px] flex justify-between">
                        <div className="w-[130px]">
                            <div className="ml-[18px]">
                                <div className="w-[59px] h-[59px] bg-white rounded-full flex justify-center items-center mt-[23px]">
                                    <Image
                                        src="/images/android.svg"
                                        alt="Aple"
                                        width={27}
                                        height={32}
                                        className="w-[27px] h-[32px]"
                                    />
                                </div>
                                <p className="text-xl font-bold text-white leading-6 pt-5 pb-[15px]">
                                    For Android
                                </p>
                                <p className="text-xl font-normal text-white leading-6 mb-[22px]">
                                    Android 8+
                                </p>
                                <Button
                                    asChild
                                    className="w-[116px] h-[41px] rounded-[100px] bg-[#88816E]  active:bg-[#88816E] hover:bg-[#A29B89] active:shadow-btnLight transition-colors duration-300"
                                >
                                    <Link
                                        className="font-semibold leading-[21px] text-sm text-white"
                                        href="#"
                                    >
                                        Download
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="w-[130px] flex justify-end">
                            <div className="w-84[px] h-[84px] mt-[23px] mr-[20px]">
                                <Image
                                    src="/images/qrcode.svg"
                                    alt="QR Code"
                                    width={84}
                                    height={84}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
