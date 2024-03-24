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
        value?.numb > 25 ? Math?.floor(value?.numb / 25) : 1;
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
      }, 30);
      return () => clearInterval(intervalId);
    }
  }, [isAnimate]);

  return (
    <div
      key={value?.title}
      className={clsx(
        "relative pl-20",
        index < bannerContents?.length - 1 && "wpo-feature-section"
      )}
    >
      <Image
        src={value?.img}
        width={60}
        height={60}
        priority
        alt={value?.title}
      />
      <div
        ref={ref}
        className="mt-3 text-[40px] font-bold text-[#000B47]"
      >{`${value?.numb}+`}</div>
      <div className="text-[25px] font-semibold text-[#625F71]">
        {value?.title}
      </div>
      <div className="text-[18px] text-[#625F71]">{value?.content}</div>
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
      <div className="static-hero min-h-screen">
        <div className="container mx-auto pl-[120px]">
          <p className="text-[20px] !text-[#FF5E14] font-semibold">
            Welcome to Sailo
          </p>
          <h1 className="!text-white text-[70px] font-bold">
            Quality Steel Detailing Services, Competitive Pricing
          </h1>
          <p className="max-w-[780px] text-[20px] !text-white">
            At Archibuild, you will find the best team of steel detailers,
            drafters, and designers who are experienced in steel fabrication and
            shop drawing services delivery.
          </p>
          <button className="theme-btn mt-10">Discover More</button>
        </div>
      </div>
      <div className="container relative mt-[-165px] mx-auto px-[120px] z-[2]">
        <div
          ref={currentRef}
          className="grid grid-cols-4 p-10 z-[2] bg-white shadow-xl"
        >
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
        </div>
      </div>
    </>
  );
};

export default Banner;
