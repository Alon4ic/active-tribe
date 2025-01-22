import blockData from '@/constants/block';
import Image from 'next/image';
import React from 'react'

export default function SelectBlock() {
  return (
      <div className="max-w-[1216px] lg:mx-auto mx-5 lg:py-[100px] py-[50px]">
          <h2 className="uppercase font-bold md:text-[50px] phone:text-[40px] text-[30px] md:leading-[62px] phone:leading-[55px] leading-[45px] text-center pb-[25px] text-baseText">
              The equipment that you can use in{' '}
              <span className="normal-case text-darkGold">
                  GymStation
              </span>
          </h2>
          <p className="text-base leading-[26px] text-center font-normal text-black">
              Customize your workout by selecting the equipment you need within
              the GymStation
          </p>
          <div className="grid grid-cols gap-y-[40px] align-middle phone:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 phone:mt-[60px] mt-[40px]">
              {blockData.map((block) => (
                  <div key={block.id} className="flex flex-col items-center">
                      <Image
                          src={block.src}
                          alt={block.text}
                          width={289}
                          height={300}
                          className="w-full h-auto rounded mb-6"
                      />
                      <p className="text-center text-darkText font-semibold text-2xl leading-[26px]">
                          {block.text}
                      </p>
                  </div>
              ))}
          </div>
      </div>
  );
}
