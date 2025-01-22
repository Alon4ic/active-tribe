import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PolicyTop() {
  return (
      <div className="max-w-[1216px] lg:mx-auto">
          <div className="lg:pt-[189.5px] phone:pt-[205px] pt-[186px] lg:pb-[170.5px] md:pb-[204px] phone:pb-[155px] pb-[84px] pl-5 flex flex-col justify-start">
              <h1 className="uppercase phone:text-[40px] text-[30px] text-baseText font-bold phone:leading-[55px] leading-[45px]">
                  Privacy Policy
              </h1>
              <Link
                  href="/"
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
  );
}
