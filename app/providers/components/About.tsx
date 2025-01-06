import Image from 'next/image';
import React from 'react';

export default function About() {
    return (
        <div className="flex lg:flex-row flex-col">
            <div className="lg:w-[50%] w-[100%] bg-darkText hover:bg-darkText/4 relative flex flex-col lg:pt-[104px] pt-[15px] lg:pb-[89px] pb-[10px]">
                <Image
                    src="/images/sportman.svg"
                    alt="vector"
                    width={600}
                    height={855}
                    className="absolute top-0 lg:left-[-247px] left-[541px] w-[600px] h-[855px]"
                />
                <div className="lg:max-w-[607px] max-w-[100%] lg:pl-[30px] pl-[18px] lg:pr-[60px] pr-5 pt-[35px] hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 ml-auto rounded group">
                    {/* Добавлено ml-auto для прижатия к правой стороне */}
                    <div className="flex justify-start items-center mb-[25px]">
                        <div className="w-10 h-10 font-satoshi text-lg font-bold leading-6 text-white bg-darkGold rounded-full flex justify-center items-center mr-[15px] flex-shrink-0">
                            1
                        </div>
                        <h3 className="text-white text-xl font-bold leading-6">
                            Foster Happier, Healthier Communities:
                        </h3>
                    </div>
                    <p className="text-lightWhite text-base leading-[26px] font-normal mb-[25px]">
                        Invest in the well-being of your residents, employees,
                        or visitors. GymStation transforms underutilized spaces
                        into vibrant fitness hubs, promoting physical activity,
                        social interaction, and a sense of community. A
                        healthier community is a happier community.
                    </p>
                    <div className="h-[0.5px] w-full bg-lightGray opacity-50 mb-[10px] group-hover:bg-[rgba(255,255,255,0.1)]  transition-all duration-300" />
                </div>
                <div className="lg:max-w-[607px] max-w-[100%] lg:pl-[30px] pl-[18px] lg:pr-[60px] pr-5 pt-[35px] hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 ml-auto rounded group">
                    {/* Добавлено ml-auto для прижатия к правой стороне */}
                    <div className="flex justify-start items-center mb-[25px]">
                        <div className="w-10 h-10 font-satoshi text-lg font-bold leading-6 text-white bg-darkGold rounded-full flex justify-center items-center mr-[15px] flex-shrink-0">
                            2
                        </div>
                        <h3 className="text-white text-xl font-bold leading-6">
                            Reliable, Low-Maintenance Solution:
                        </h3>
                    </div>
                    <p className="text-lightWhite text-base leading-[26px] font-normal mb-[25px]">
                        Our GymStations are built to last, with durable
                        materials and weather-resistant design. Our smart
                        technology ensures seamless operation and minimal
                        maintenance requirements, allowing you to focus on other
                        priorities.
                    </p>
                    <div className="h-[0.5px] w-full bg-lightGray opacity-50 mb-[10px] group-hover:bg-[rgba(255,255,255,0.1)]  transition-all duration-300" />
                </div>
                <div className="lg:max-w-[607px] max-w-[100%] lg:pl-[30px] pl-[18px] lg:pr-[60px] pr-5 pt-[35px] hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 ml-auto rounded">
                    {/* Добавлено ml-auto для прижатия к правой стороне */}
                    <div className="flex justify-start items-center mb-[25px]">
                        <div className="w-10 h-10 font-satoshi text-lg font-bold leading-6 text-white bg-darkGold rounded-full flex justify-center items-center mr-[15px] flex-shrink-0">
                            3
                        </div>
                        <h3 className="text-white text-xl font-bold leading-6">
                            Generate Positive Media Impact & Attract Investment:
                        </h3>
                    </div>
                    <p className="text-lightWhite text-base leading-[26px] font-normal mb-[35px]">
                        GymStation is a unique and eye-catching addition to any
                        space, attracting positive media attention and
                        potentially drawing further investment to your area. By
                        prioritizing health and wellness, you create a desirable
                        environment that people want to be a part of.
                    </p>
                </div>
            </div>
            <div className="relative lg:w-[50%] w-[100%] bg-[url('/images/provid/provid-bg.jpg')] bg-no-repeat bg-cover lg:pt-[10%] phone:pt-[95%] pt-[99.5%]">
                <div className="absolute phone:w-[197px] w-[140px] phone:h-[70px] h-[50px] p-[10px] bottom-[20px] right-[19px] bg-white rounded">
                    <Image
                        src="/images/Logo_GS.svg"
                        alt="Logo"
                        width={177}
                        height={50}
                    />
                </div>
            </div>
        </div>
    );
}
