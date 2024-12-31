import Image from 'next/image';
import React from 'react';

export default function ContactsLink() {
    const handleMapClick = () => {
        const isMobile =
            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );

        if (isMobile) {
            const userChoice = confirm(
                'Would you like to open the address in Apple Maps or Google Maps? Click "OK" for Apple Maps or "Cancel" for Google Maps.'
            );

            if (userChoice) {
                // Открыть Apple Maps
                window.open(
                    'https://maps.apple.com/?q=The+Meydan+Hotel,+Grandstand,+6th+floor,+Meydan+Road,+Nad+Al+Sheba,+Dubai,+U.A.E',
                    '_blank'
                );
            } else {
                // Открыть Google Maps
                window.open(
                    'https://www.google.com/maps/search/?api=1&query=The+Meydan+Hotel,+Grandstand,+6th+floor,+Meydan+Road,+Nad+Al+Sheba,+Dubai,+U.A.E',
                    '_blank'
                );
            }
        } else {
            // Для десктопов: сразу открываем Google Maps
            window.open(
                'https://www.google.com/maps/search/?api=1&query=The+Meydan+Hotel,+Grandstand,+6th+floor,+Meydan+Road,+Nad+Al+Sheba,+Dubai,+U.A.E',
                '_blank'
            );
        }
    };

    return (
        <div className="pt-[69px] md:pl-[77px] pl-[38px] pb-[69px]">
            <h3 className="sm:text-[38px] text-[30px] font-semibold sm:leading-[48px] leading-[44px] text-white sm:pb-[49px] pb-[44px]">
                Have a question?
                <br />
                Get in touch!
            </h3>
            <div className="flex justify-start items-center mb-[50px]">
                <Image
                    src="../images/contactUs/phone-us.svg"
                    alt="Phone"
                    width={18}
                    height={18}
                    className="mr-[15px]"
                />
                <a
                    href="tel:971585113234"
                    className="text-base leading-6 font-normal text-white"
                >
                    +971 58 511 3234
                </a>
            </div>
            <div className="flex justify-start items-center mb-[50px]">
                <Image
                    src="../images/contactUs/email.svg"
                    alt="Email"
                    width={20}
                    height={16}
                    className="mr-[15px]"
                />
                <a
                    href="mailto:admin@active-tribe.com"
                    className="text-base leading-6 font-normal text-white"
                >
                    admin@active-tribe.com
                </a>
            </div>
            <div className="flex justify-start items-start phone:w-[292px] w-full mb-[48px]">
                <Image
                    src="../images/contactUs/location.svg"
                    alt="Location"
                    width={17}
                    height={21}
                    className="mr-[15px] pt-[3px]"
                />
                <button
                    className="flex text-base text-start font-normal leading-6 text-white"
                    onClick={handleMapClick}
                >
                    The Meydan Hotel, Grandstand, 6th floor, Meydan
                    <br className='phone:block hidden' /> Road, Nad Al Sheba, Dubai, U.A.E
                </button>
            </div>
            <div className="flex justify-start items-center gap-6">
                <a
                    className="px-[7px] py-2 rounded-full bg-[#88816e] flex justify-center items-center
				  "
                    href="https://www.linkedin.com/company/active-tribe-me/"
                >
                    <Image
                        src="../images/contactUs/linkedin.svg"
                        alt="Linkedin"
                        width={15}
                        height={14.3}
                    />
                </a>
                <a
                    className="px-[7px] py-2 rounded-full bg-[#88816e] flex justify-center items-center
				  "
                    href="https://www.linkedin.com/company/active-tribe-me/"
                >
                    <Image
                        src="../images/contactUs/instagram.svg"
                        alt="Instagram"
                        width={15}
                        height={15}
                    />
                </a>
            </div>
        </div>
    );
}
