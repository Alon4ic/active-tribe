import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function ButtonNav() {
  return (
      <>
          <Button
              className="bg-[#88816E]  active:bg-[#88816E] hover:bg-[#A29B89] active:shadow-btnLight transition-colors duration-300 rounded-3xl pt-[10px] pl-4 pb-[11px] pr-[14.8px]"
              asChild
          >
              <Link href="#">
                  <span className="text-white text-sm font-satoshi font-bold pl-[10px]">
                      Join Active Tribe
                  </span>
                  <Image
                      src="/images/ic_arrow.svg"
                      alt="Right Arrow"
                      width={20}
                      height={20}
                  />
              </Link>
          </Button>
      </>
  );
}
