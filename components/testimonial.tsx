"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "@/app/constants/home";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="container mx-auto pt-10 lg:pt-20 pb-20 px-5">
      <div className="text-[18px] xl:text-[22px] font-semibold text-[#233FD6] capitalize">
        Testimonial
      </div>
      <div className="text-[35px] xl:text-[50px] font-bold">
        {"What Our Clients Say's"}
      </div>
      <div className="pt-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
        >
          {testimonials?.map((value, index) => {
            return (
              <SwiperSlide key={index} className="pt-5">
                <div className="testimonial-card">
                  <div className="content h-[180px] p-5 xl:p-10">
                    <p>{value?.comment}</p>
                  </div>
                  <div className="flex py-10 px-10 gap-5 items-center">
                    <div className="w-[60px] min-w-[60px] h-[60px] xl:w-[80px] xl:min-w-[80px] xl:h-[80px] p-[5px] bg-[#F0F0F0] rounded-full overflow-hidden">
                      <Image
                        src={value?.img}
                        className="rounded-full w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]"
                        width={70}
                        height={70}
                        priority
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <div className="text-[18px] xl:text-[24px] font-semibold">
                        {value?.name}
                      </div>
                      <div className="text-[12px] xl:text-[15px] opacity-80">
                        {value?.job}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
