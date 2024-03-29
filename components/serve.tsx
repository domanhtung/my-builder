"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { serveContents } from "@/app/constants/service";

const ServeComponent = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
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
  );
};

export default ServeComponent;
