/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { bannerContents } from "@/app/constants/banner";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ItemProps {
  value: {
    img: string;
    numb: number;
    title: string;
    content: string;
  };
  index: number;
  isAnimate: boolean;
}

const BannerContentItem = ({ value, index, isAnimate }: ItemProps) => {
  let currentNumber = 0;
  const ref = useRef<any>();

  useEffect(() => {
    if (isAnimate) {
      const numberPercent =
        value?.numb > 50 ? Math?.floor(value?.numb / 50) : 1;
      const intervalId = setInterval(() => {
        if (ref?.current) {
          currentNumber += numberPercent;
          if (currentNumber >= value?.numb) {
            ref.current.innerHTML = value?.numb + "+";
            clearInterval(intervalId);
          } else {
            ref.current.innerHTML = currentNumber + "+";
          }
        }
      }, 60);
      return () => clearInterval(intervalId);
    }
  }, [isAnimate]);

  return (
    <div
      key={value?.title}
      className={clsx(
        "grid md:block relative pb-3 md:pb-0 pl-5 xl:pl-20 justify-center md:justify-start text-center md:text-left",
        index < bannerContents?.length - 1 &&
          "wpo-feature-section border-b !border-black border-opacity-20 md:border-none"
      )}
    >
      <Image
        src={value?.img}
        className="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] mx-auto md:mx-0"
        width={60}
        height={60}
        priority
        alt={value?.title}
      />
      <div
        ref={ref}
        className="mt-3 text-[34px] xl:text-[40px] font-bold text-[#000B47]"
      >{`${value?.numb}+`}</div>
      <div className="text-[20px] xl:text-[25px] font-semibold text-[#625F71]">
        {value?.title}
      </div>
      <div className="text-[14px] xl:text-[18px] text-[#625F71]">
        {value?.content}
      </div>
    </div>
  );
};

const Banner = () => {
  const currentRef = useRef<any>();
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (currentRef?.current) {
      const observer = new IntersectionObserver(function (entries) {
        if (entries?.[0]?.isIntersecting) {
          setIsAnimate(true);
          observer?.unobserve(currentRef?.current);
        }
      }, {});
      observer?.observe(currentRef?.current);
      return () =>
        observer?.unobserve &&
        currentRef?.current &&
        observer?.unobserve(currentRef?.current);
    }
  }, []);

  return (
    <>
      <div className="static-hero min-h-[800px] lg:min-h-screen">
        <div className="container mx-auto px-5 lg:pl-[120px]">
          <p className="text-[18px] xl:text-[20px] !text-[#ED4D5D] font-semibold">
            Welcome to Archibuild
          </p>
          <h1 className="!text-white text-[30px] md:text-[40px] lg:text-[58px] xl:text-[70px] font-bold">
            Quality Steel Detailing Services, Competitive Pricing
          </h1>
          <p className="max-w-[780px] text-[18px] xl:text-[20px] !text-white">
            At Archibuild, you will find the best team of steel detailers,
            drafters, and designers who are experienced in steel fabrication and
            shop drawing services delivery.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="theme-btn mt-10">Discover More</button>
          </div>
        </div>
      </div>
      <div className="container relative mt-[-165px] mx-auto px-5 lg:px-[120px] z-[2]">
        <div className="grid md:grid-cols-4 p-5 xl:p-10 gap-5 md:gap-0 z-[2] bg-white shadow-xl">
          {bannerContents?.map((value, index) => {
            return (
              <BannerContentItem
                key={value?.title}
                value={value}
                index={index}
                isAnimate={isAnimate}
              />
            );
          })}
          <div ref={currentRef} />
        </div>
      </div>
    </>
  );
};

export default Banner;
