import {
  footerNavigalion,
  footerOurServices,
  socials,
} from "@/app/constants/home";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <>
      <div className="wpo-site-footer">
        <div className="container relative grid grid-cols-4 gap-10 mx-auto py-20 px-5 z-[2]">
          <div>
            <Image
              src={"/images/logo_2.svg"}
              width={155}
              height={58}
              priority
              alt="logo"
            />
            <p className="mt-5 text-light leading-[30px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              iure blanditiis labore tempora inventore laborum error molestias,
            </p>
            <div className="flex mt-5 gap-3 items-center">
              {socials?.map((social) => {
                return (
                  <div
                    key={social?.name}
                    className="p-[10px] bg-[#000B47] hover:bg-[#ED4D5D] cursor-pointer duration-150"
                  >
                    <Image
                      src={social?.img}
                      width={14}
                      height={14}
                      priority
                      alt={social?.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="pb-2 text-[30px] font-semibold text-light">
              Our Services
            </div>
            <div className="w-[80px] max-w-full h-[2px] mb-8 bg-[#ED4D5D]" />
            {footerOurServices?.map((service, index) => {
              return (
                <div
                  key={index}
                  className="text-light mt-3 text-[18px] hover:text-[#ED4D5D] cursor-pointer"
                >
                  {service?.name}
                </div>
              );
            })}
          </div>
          <div>
            <div className="pb-2 text-[30px] font-semibold text-light">
              Navigalion
            </div>
            <div className="w-[80px] max-w-full h-[2px] mb-8 bg-[#ED4D5D]" />
            {footerNavigalion?.map((service, index) => {
              return (
                <div
                  key={index}
                  className="text-light mt-3 text-[18px] hover:text-[#ED4D5D] cursor-pointer"
                >
                  {service?.name}
                </div>
              );
            })}
          </div>
          <div>
            <div className="pb-2 text-[30px] font-semibold text-light">
              Newsletter
            </div>
            <div className="w-[80px] max-w-full h-[2px] mb-8 bg-[#ED4D5D]" />
            <div className="text-light">Get latest updates and offers</div>
            <div className="flex mt-5 items-center border border-[#ED4D5D]">
              <input
                className="text-light w-full h-[45px] px-5 bg-transparent outline-none"
                placeholder="Your email"
              />
              <button className="flex w-[45px] min-w-[45px] h-[45px] items-center justify-center bg-[#ED4D5D]">
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
        <div className="container flex mx-auto py-5 px-5 items-center justify-between">
          <div className="text-light text-[14px]">
            Copyright © 2024. All Rights Reserved.
          </div>
          <div className="text-light text-[14px]">Power by @Archibuild.ai</div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
