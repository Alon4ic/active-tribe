import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

export default function BussinesCard() {
    return (
        <section className="relative max-w-[1215px] lg:mx-auto mx-5 lg:pt-[100px] pt-[50px] lg:pb-[100px] pb-[50px]">
            <div className="lg:flex flex-col justify-center">
                <div className="lg:flex lg:text-left phone:text-center text-left justify-between">
                    <h2 className="md:text-[50px] sm:text-[40px] text-[30px] lg:pb-0 md:pb-10 sm:pb-[30px] pb-[25px] font-bold sm:leading-[65px] leading-[45px] uppercase text-baseText lg:min-w-[291px] min-w-full">
                        <span className="text-[#88816E]">About</span> our
                        company
                    </h2>
                    <div className="lg:w-[58.3%] w-full lg:pb-0 md:pb-10 phone:pb-[30px] pb-[25px]">
                        <p className="mb-2 text-base leading-[26px]">
                            We are Active Tribe, a UAE-born company on a mission
                            to empower healthier, more vibrant communities. We
                            believe that fitness should be accessible to
                            everyone, everywhere – which is why we&apos;ve
                            created GymStation, the revolutionary outdoor
                            fitness locker that reimagines the way you
                            experience exercise.
                        </p>
                        <p className="mb-2 text-base leading-[26px]">
                            GymStation, our flagship outdoor fitness locker,
                            reimagines the way you experience exercise. Designed
                            to seamlessly integrate into the most inviting
                            outdoor areas of your city, GymStation provides a
                            comprehensive, on-demand workout experience. With
                            top-quality equipment and thoughtfully curated
                            training options, we&apos;re dedicated to helping
                            you elevate your fitness journey and discover the
                            joy of outdoor exercise.
                        </p>
                    </div>
                </div>
                <Button
                    asChild
                    className="lg:flex items-center hidden pt-[10px] pb-[11px] bg-[#88816E]  active:bg-[#88816E] hover:bg-[#A29B89] active:shadow-btnLight transition-colors duration-300 absolute top-[278px] left-[0px] rounded-3xl mx-auto"
                >
                    <a
                        href="#"
                        className="font-semibold text-[15px] py-[10px] pr-3 text-white"
                    >
                        Check our app
                        <Image
                            src="/images/ic_arrow.svg"
                            alt="Arrow"
                            width={15}
                            height={10}
                        />
                    </a>
                </Button>
                <div className="lg:hidden flex justify-center">
                    <Button
                        asChild
                        className="pt-[10px] pb-[11px] bg-[#88816E] rounded-3xl "
                    >
                        <a
                            href="#"
                            className="font-semibold text-[15px] py-[10px] pr-3 text-white"
                        >
                            Check our app
                            <Image
                                src="/images/ic_arrow.svg"
                                alt="Arrow"
                                width={15}
                                height={10}
                            />
                        </a>
                    </Button>
                </div>
            </div>
            <div className="w-full phone:mt-[60px] mt-[30px]">
                <Image
                    src="/images/Business-Card.jpg"
                    alt="Business Card"
                    width={1215}
                    height={600}
                    className="flex md:h-[600px] sm:h-[510px] phone:h-[410px] h-[310px]"
                />
            </div>
        </section>
    );
}
