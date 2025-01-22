import content from '@/constants/content';
import React from 'react'

export default function PolicyContent() {
  return (
      <div>
          <div className="max-w-[1010px] lg:mx-auto lg:px-0 px-5 phone:pt-[70px] pt-[50px] flex flex-col">
              <h2 className="font-bold text-[36px] leading-[55px] text-black pb-[30px]">
                  How does the Privacy Policy work?
              </h2>
              <h3 className="font-normal text-[28px] leading-7 pb-[10px] text-darkText">
                  Your Privacy Matters to Us!
              </h3>
              <p className="text-lg leading-7 text-darkText font-normal pb-[10px]">
                  Welcome to Active Tribe! By using our website and services,
                  you consent to our privacy practices and cookie usage as
                  detailed in this policy.
              </p>
              <p className="text-lg leading-7 text-darkText font-normal pb-[10px]">
                  We gather data like IP address, site usage, location, browser
                  details, transaction history, and personal details for service
                  registration and communication.
              </p>
              <ul className="text-lg leading-7 text-darkText font-normal ml-5 pl-5 line-none pb-[10px]">
                  {content.map((item, index) => (
                      <li
                          key={index}
                          className="relative before:content-['●'] before:text-black before:text-sm before:absolute before:-left-6 before:top-1 before:mr-5"
                      >
                          {item.text}
                      </li>
                  ))}
              </ul>
              <p className="text-lg leading-7 text-darkText font-normal">
                  Remember, your privacy is of utmost importance to us at Active
                  Tribe, and we are committed to safeguarding it while providing
                  you with topnotch service.
              </p>
          </div>
      </div>
  );
}
