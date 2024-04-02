"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { pathnameObj, serviceContent } from "@/app/constants/home";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "@/app/constants/arrow";

const HomeService = () => {
  return (
    <div
      id={pathnameObj.service}
      className="relative pt-5 lg:pt-10 pb-10 lg:pb-[120px] overflow-hidden"
    >
      <div className="container relative mx-auto">
        <div className="px-5 text-[18px] xl:text-[22px] font-semibold text-[#233FD6]">
          What We Offer
        </div>
        <div className="px-5 text-[35px] xl:text-[50px] font-bold">
          Our Services
        </div>
        <div className="slider-service mt-5 px-5 md:pl-5 md:pr-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop
            breakpoints={{
              640: {
                slidesPerView: "auto",
              },
            }}
            navigation={{
              nextEl: ".service-button-next",
              prevEl: ".service-button-prev",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {serviceContent?.map((content, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="w-full sm:!w-[410px] group cursor-pointer service"
                >
                  <div className="service-image relative">
                    <Image
                      src={content?.img}
                      className="w-full"
                      width={410}
                      height={338}
                      priority
                      alt={content?.title}
                    />
                    <span>{`0${index + 1}`}</span>
                    <div className="line-one"></div>
                    <div className="line-two"></div>
                  </div>
                  <div className="content h-[250px] px-7 py-10">
                    <div className="icon">
                      <Image
                        src={content?.icon}
                        width={40}
                        height={40}
                        priority
                        alt="icon"
                      />
                    </div>
                    <div className="mt-2 text-[25px] font-bold group-hover:!text-[#ED4D5D] cursor-pointer">
                      {content?.title}
                    </div>
                    <div className="mt-2 opacity-80">{content?.content}</div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="flex pt-10 px-5 gap-10 justify-center">
        <div className="!relative md:!absolute swiper-button swiper-button-prev service-button-prev items-center">
          <ArrowLeft />
        </div>
        <div className="!relative md:!absolute swiper-button swiper-button-next service-button-next items-center">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default HomeService;
