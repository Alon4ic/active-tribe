import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import NavbarLinks from './NavbarLinks';

export default function Footer() {
    return (
        <footer className="bg-[#0D0D0D] phone:pt-[77px] pt-[50px]">
            <div className="max-w-[1211px] block lg:mx-auto mx-5">
                <div className="phone:flex block justify-between items-center phone:mb-[80px] mb-[23px]">
                    <div className="phone:mb-0 mb-[23px]">
                        <Link href="/">
                            <Image
                                src="/images/logofooter.svg"
                                alt="Logo"
                                width={201}
                                height={15}
                            />
                            <p className="text-sm leading-6 font-normal font-satoshi text-[#B6B4BD] pt-[10px]">
                                We built an elegant solution.{' '}
                            </p>
                        </Link>
                    </div>
                    <div className="md:flex justify-between hidden">
                        <NavbarLinks isFooter={true} />
                    </div>
                    <div className="flex gap-6">
                        <Link href="https://www.linkedin.com/company/active-tribe-me/">
                            <Image
                                src="/images/linkedin-footer.svg"
                                alt="Linkedin"
                                width={30}
                                height={30}
                            />
                        </Link>
                        <Link href="https://www.instagram.com/youractivetribe?igsh=NTBkbzc1YWc5bDQ1">
                            <Image
                                src="/images/instagram-footer.svg"
                                alt="Instagram"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </div>
                </div>
                <div className="w-full sm:flex block justify-between phone:pb-[85px] pb-[44px]">
                    <div className="flex flex-col sm:mb-0 mb-[23px]">
                        <div className="flex justify-start items-center mb-4">
                            <Image
                                src="../images/contactUs/email.svg"
                                alt="Email"
                                width={20}
                                height={16}
                                className="mr-[15px]"
                            />
                            <a
                                href="mailto:admin@active-tribe.com"
                                className="text-sm leading-[16.5px] font-medium text-white"
                            >
                                admin@active-tribe.com
                            </a>
                        </div>
                        <div className="flex justify-start items-center">
                            <Image
                                src="../images/contactUs/phone-us.svg"
                                alt="Phone"
                                width={18}
                                height={18}
                                className="mr-[15px]"
                            />
                            <a
                                href="tel:971585113234"
                                className="text-sm leading-[16.5px] font-medium text-white"
                            >
                                +971 58 511 3234
                            </a>
                        </div>
                    </div>
                    <div className="md:flex hidden">
                        <p className="text-base text-white leading-7 font-normal">
                            Join the Active Tribe for a healthier and happier
                            life.
                        </p>
                    </div>
                    <div>
                        <div className="flex gap-[13px]">
                            <Link href="https://www.apple.com/app-store/">
                                <Image
                                    src="/images/appstore-footer.svg"
                                    alt="App Store"
                                    width={187}
                                    height={57}
                                    className="w-[187.7px] h-[57px]"
                                />
                            </Link>
                            <Link href="https://play.google.com/store/games">
                                <Image
                                    src="/images/googleplay-footer.svg"
                                    alt="Google play"
                                    width={191}
                                    height={58}
                                    className="w-[191.5px] h-[58px]"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#333333] pt-5 pb-5">
                    <div className="flex sm:flex-row flex-col justify-between">
                        <div className="sm:pb-0 pb-5">
                            <p className="text-sm font-normal leading-4 text-[#BDBDBD]">
                                Copyright &copy; 2024 Active Tribe. All Rights
                                Reserved.
                            </p>
                        </div>
                        <div className="flex flex-end space-x-4">
                            <Link
                                href="/terms-of-service"
                                className="text-sm font-normal leading-4 text-[#BDBDBD] whitespace-nowrap"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="text-sm font-normal leading-4 text-[#BDBDBD] whitespace-nowrap"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/"
                                className="text-sm font-normal leading-4 text-[#BDBDBD] whitespace-nowrap"
                            >
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
