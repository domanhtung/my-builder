"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { serveContents } from "@/app/constants/service";
import { ArrowLeft, ArrowRight } from "@/app/constants/arrow";

const ServeComponent = () => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop
        navigation={{
          nextEl: ".serve-button-next",
          prevEl: ".serve-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {serveContents?.map((content, index) => {
          return (
            <SwiperSlide key={index} className="pb-10">
              <div className="serve py-20">
                <div className="container grid lg:grid-cols-2 gap-5 lg:gap-0 mx-auto px-5">
                  <div className="lg:pr-20">
                    <div className="text-[18px] xl:text-[22px] text-[#7C90F9] font-semibold">
                      We serve
                    </div>
                    <div className="py-3 text-light text-[30px] xl:text-[36px] font-bold">
                      {content?.title}
                    </div>
                    <div className="text-light text-[16px] xl:text-[18px]">
                      {content?.content}
                    </div>
                    <div className="btn_history mt-10">
                      <Link href={content?.url}>Discover More</Link>
                    </div>
                  </div>
                  <div>
                    <div className="mb-[-120px] p-3 !bg-[#ED4D5D]">
                      <Image
                        src={content?.img}
                        className="w-full object-cover"
                        width={883}
                        height={516}
                        priority
                        alt="serve"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex pt-10 px-5 gap-10 justify-center">
        <div className="!relative md:!absolute swiper-button swiper-button-prev serve-button-prev items-center">
          <ArrowLeft />
        </div>
        <div className="!relative md:!absolute swiper-button swiper-button-next serve-button-next items-center">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ServeComponent;
