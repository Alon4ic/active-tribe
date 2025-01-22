'use client'

import Image from 'next/image';
import React from 'react';
import locations from '@/constants/locations';

export default function Locations() {
	const handleMapClick = (
        googleMapsLink?: string,
        appleMapsLink?: string
    ) => {
        if (!googleMapsLink || !appleMapsLink) {
            alert('Map link is not available for this location.');
            return;
        }

        const isMobile =
            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );

        if (isMobile) {
            const userChoice = confirm(
                'Would you like to open the address in Apple Maps or Google Maps? Click "OK" for Apple Maps or "Cancel" for Google Maps.'
            );

            if (userChoice) {
                window.open(appleMapsLink, '_blank');
            } else {
                window.open(googleMapsLink, '_blank');
            }
        } else {
            window.open(googleMapsLink, '_blank');
        }
    };
  return (
      <div className="max-w-[1214px] lg:mx-auto mx-5 lg:pt-[100px] pt-[50px] lg:pb-[100px] pb-[50px]">
          <div className="flex md:flex-row flex-col justify-between md:pb-[60px] pb-[40px]">
              <h2 className="uppercase md:text-[50px] phone:text-[40px] text-[30px] md:leading-[65px] phone:leading-[55px] font-bold text-baseText md:mr-[122px] mr-0 md:pb-0 phone:pb-[25px] pb-5">
                  <span className="text-darkGold">Our</span> locations
              </h2>
              <p className="lg:w-[52%] font-satoshi text-lg text-normal leading-7 text-darkText lg:pr-[12%] pr-0">
                  Discover our global network of locations, designed to serve
                  you wherever you are.
              </p>
          </div>
          <div className="flex lg:flex-row flex-col">
              <div className="lg:w-[50%] w-[100%] lg:pb-0 pb-[65px]">
                  <Image
                      src="/images/users/users-location.jpg"
                      alt="Our Location"
                      width={597}
                      height={630}
					  className='lg:flex md:hidden flex'
                  />
                  <Image
                      src="/images/users/users-location2.jpg"
                      alt="Our Location"
                      width={978}
                      height={630}
					  className='lg:hidden md:flex hidden'
                  />

              </div>
              <div className="lg:w-[50%] w-[100%] pt-5 lg:pb-8 pb-0 lg:pl-[5.3%] pl-0 lg:pr-[4.7%] pr-0">
                  <ul className="space-y-6">
                      {locations.map((location) => (
                          <li key={location.id}>
                              <button
                                  className={`flex justify-start items-center w-[100%] px-5 py-4 rounded-[10px] font-satoshi text-lg font-bold leading-[24.3px] ${
                                      location.googleMapsLink &&
                                      location.appleMapsLink
                                          ? 'bg-white'
                                          : 'bg-white text-gray-700 cursor-auto'
                                  }`}
                                  onClick={() =>
                                      handleMapClick(
                                          location.googleMapsLink,
                                          location.appleMapsLink
                                      )
                                  }
                                  disabled={
                                      !location.googleMapsLink ||
                                      !location.appleMapsLink
                                  }
                              >
                                  <div className="bg-darkGold w-[30px] h-[30px] rounded-full flex justify-center items-center mr-[10px]">
                                      <Image
                                          src="/images/users/location.svg"
                                          alt="Location"
                                          width={20}
                                          height={20}
                                      />
                                  </div>

                                  {location.text}
                              </button>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </div>
  );
}
