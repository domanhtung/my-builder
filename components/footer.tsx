"use client";
import {
  footerNavigalion,
  footerOurServices,
  navname,
  pathnameObj,
  socials,
} from "@/app/constants/home";
import { scrollToView } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FooterComponent = () => {
  const router = useRouter();

  return (
    <>
      <div className="wpo-site-footer">
        <div className="container relative grid dm:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto py-10 2xl:py-20 px-5 z-[2]">
          <div>
            <Link href={"https://archibuild.ai"} target="_blank">
              <Image
                src={"/images/logo.png"}
                className="w-[120px] h-[29px] xl:w-[134px] xl:h-[35px] 2xl:w-[166px] 2xl:h-[40px]"
                width={166}
                height={40}
                priority
                alt="logo"
              />
            </Link>
            <p className="mt-5 !text-white xl:leading-[24px] 2xl:leading-[30px] text-[14px] 2xl:text-[16px]">
              Archibuild provides global steel detailing services, including
              BIM, PEB, precast panel. Our expert team delivers precise 2D
              drawings and 3D models for efficient fabrication worldwide.
            </p>
            <div className="flex mt-5 gap-3 items-center">
              {socials?.map((social, index) => {
                return (
                  <Link key={index} href={social?.url} target="_blank">
                    <div
                      key={social?.name}
                      className="p-[10px] bg-[#000B47] hover:!bg-[#ED4D5D] cursor-pointer duration-150"
                    >
                      <Image
                        src={social?.img}
                        width={14}
                        height={14}
                        priority
                        alt={social?.name}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <div className="pb-2 text-[25px] 2xl:text-[30px] font-semibold !text-white">
              Our Services
            </div>
            <div className="w-[80px] max-w-full h-[2px] mb-8 !bg-[#ED4D5D]" />
            <div>
              {footerOurServices?.map((service, index) => {
                return (
                  <div key={index} className="w-fit">
                    <Link href={service?.url}>
                      <div className="w-fit !text-white mt-3 text-[16px] 2xl:text-[18px] hover:!text-[#ED4D5D] cursor-pointer">
                        {service?.name}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="pb-2 text-[25px] 2xl:text-[30px] font-semibold !text-white">
              Navigalion
            </div>
            <div className="w-[80px] max-w-full h-[2px] mb-8 !bg-[#ED4D5D]" />
            <div>
              {navname?.map((nav) => {
                return (
                  <div
                    className="w-fit !text-white mt-3 text-[16px] 2xl:text-[18px] hover:!text-[#ED4D5D] cursor-pointer"
                    key={nav?.key}
                    onClick={() => {
                      nav.key !== pathnameObj.contact &&
                        nav.key !== pathnameObj.visualization &&
                        scrollToView(nav.key, router);
                    }}
                  >
                    {nav.key === pathnameObj.contact ||
                    nav.key === pathnameObj.visualization ? (
                      <Link
                        href={`${nav?.url}`}
                        className="!text-white mt-3 text-[16px] 2xl:text-[18px] hover:!text-[#ED4D5D] cursor-pointer"
                        target={
                          nav.key === pathnameObj.visualization
                            ? "_blank"
                            : "_self"
                        }
                      >
                        {nav?.name}
                      </Link>
                    ) : (
                      <span className="!text-white mt-3 text-[16px] 2xl:text-[18px] hover:!text-[#ED4D5D] cursor-pointer">
                        {nav?.name}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="pb-2 text-[25px] 2xl:text-[30px] font-semibold !text-white">
              Newsletter
            </div>
            <div className="w-[80px] max-w-full h-[2px] mb-8 !bg-[#ED4D5D]" />
            <div className="!text-white">Get latest updates and offers</div>
            <div className="flex mt-5 items-center border !border-[#ED4D5D]">
              <input
                className="!text-white w-full h-[45px] px-5 bg-transparent outline-none"
                placeholder="Your email"
              />
              <button className="flex w-[45px] min-w-[45px] h-[45px] items-center justify-center !bg-[#ED4D5D]">
                <Image
                  src={"/images/icon_send_email.svg"}
                  width={19}
                  height={19}
                  priority
                  alt="send email"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000B47]">
        <div className="container sm:flex mx-auto py-5 px-5 text-center sm:text-left items-center justify-between">
          <div className="!text-white text-[14px]">
            Copyright © 2024. All Rights Reserved.
          </div>
          <div className="!text-white text-[14px]">
            <Link href={"https://archibuild.ai"} target="_blank">
              Power by @Archibuild.ai
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
