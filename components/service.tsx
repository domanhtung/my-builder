"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { serviceContent } from "@/app/constants/home";
import Image from "next/image";

const HomeService = () => {
  return (
    <div className="mt-10 pb-[120px] overflow-hidden">
      <div className="container mx-auto">
        <div className="px-5 text-[22px] font-semibold text-[#233FD6]">
          What We Offer
        </div>
        <div className="px-5 text-[50px] font-bold">Our Services</div>
        <div className="slider-service mt-5 pl-5">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            loop
            className="mySwiper"
          >
            {serviceContent?.map((content, index) => {
              return (
                <SwiperSlide key={index} className="!w-[410px] service">
                  <div className="service-image relative">
                    <Image
                      src={content?.img}
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
                    <div className="mt-2 text-[25px] font-bold hover:text-[#ff5e14] cursor-pointer">
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
    </div>
  );
};

export default HomeService;
