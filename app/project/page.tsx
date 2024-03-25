"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { projectContents } from "../constants/service";
import Image from "next/image";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "../constants/arrow";
import HomeContact from "@/components/contact";

export default function Project() {
  return (
    <div>
      <div className="wpo-breadcumb-area">
        <div className="pt-[80px] text-center">
          <div className="text-light text-[60px] font-bold">Project Single</div>
          <p className="text-[20px] text-light">
            <Link href={"/"}>Home</Link> /{" "}
            <span className="text-[#cbd4fd]">Project Single</span>
          </p>
        </div>
      </div>
      <div className="max-w-[1080px] mx-auto pb-40">
        <div className="grid grid-cols-3 mt-40">
          <div className="col-span-2 px-5">
            <div className="text-[35px] font-bold">Construction Management</div>
            <div className="mt-5 opacity-70 leading-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis
              posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum
              nisi, platea condimentum cursus velit dui. Massa volutpat odio
              facilisis purus sit elementum. Non, sed velit dictum quam. Id
              risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id
              aliquet duis.
            </div>
            <div className="mt-5 opacity-70 leading-[30px]">
              Hac nibh fermentum nisi, platea condimentum cursus velit dui.
              Massa volutpat odio facilisis purus sit elementum. Non, sed velit
              dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper
              tincidunt. Id aliquet duis sollicitudin diam, elit sit Et nisi in
              libero facilisis sed est.
            </div>
          </div>
          <div className="px-5">
            <div className="wpo-project-single-content-des-right">
              <ul>
                <li>
                  Location :<span>7 Lake Street,London</span>
                </li>
                <li>
                  Client :<span>wpOceans</span>
                </li>
                <li>
                  Architect :<span>Don Johnson</span>
                </li>
                <li>
                  Project Type :<span>Construction</span>
                </li>
                <li>
                  Duration :<span>6 Month</span>
                </li>
                <li>
                  Completion :<span>15 Dec 2024</span>
                </li>
                <li>
                  Share :<span>Industrial, Business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 px-5">
          <div className="relative">
            <div className="swiper-button swiper-button-prev items-center">
              <ArrowLeft />
            </div>
            <div className="swiper-button swiper-button-next items-center">
              <ArrowRight />
            </div>
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop
              modules={[Navigation]}
              className="mySwiper"
            >
              {projectContents?.map((content, index) => {
                return (
                  <SwiperSlide key={index} className="w-full !h-[552px]">
                    <Image
                      src={content}
                      className="w-full h-full object-cover"
                      width={1077}
                      height={552}
                      priority
                      alt="project"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="mt-10 text-[35px] font-bold">Our approach</div>
          <div className="mt-5 opacity-70 leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi
            sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id
            sed tortor sed scelerisque. Vestibulum elit elementum, magna id
            viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id.
            Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum
            vel sem adipiscing nisi vulputate molestie scelerisque molestie
            ultrices. Eu, fusce vulputate diam interdum morbi ac a.
          </div>
        </div>
        <HomeContact />
      </div>
    </div>
  );
}
