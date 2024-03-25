import Image from "next/image";
import Link from "next/link";
import { serviceContent } from "../constants/home";
import HomeContact from "@/components/contact";
import { servicesContent } from "../constants/service";

export default function Service() {
  return (
    <div>
      <div className="wpo-breadcumb-area">
        <div className="pt-[80px] text-center">
          <div className="text-light text-[60px] font-bold">Service Single</div>
          <p className="text-[20px] text-light">
            <Link href={"/"}>Home</Link> /
            <span className="text-[#cbd4fd]">Service Single</span>
          </p>
        </div>
      </div>
      <div className="max-w-[1300px] grid grid-cols-3 mt-[120px] mx-auto px-5 pb-40 gap-20">
        <div className="col-span-2">
          <Image
            src={"/images/service_5.jpg"}
            className="w-full h-auto"
            width={897}
            height={521}
            priority
            alt="service"
          />
          <div className="mt-8 text-[35px] font-bold">Civil Engineering</div>
          <p className="mt-5 opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis
            posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum
            nisi, platea condimentum cursus velit dui. Massa volutpat odio
            facilisis purus sit elementum. Non, sed velit dictum quam. Id risus
            pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
            sollicitudin diam, elit sit. Et nisi in libero facilisis sed est.
            Elit curabitur amet risus bibendum. Posuere et eget orci, tempor
            enim.
          </p>
          <p className="mt-5 opacity-70">
            Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa
            volutpat odio facilisis purus sit elementum. Non, sed velit dictum
            quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.
            Id aliquet duis sollicitudin diam, elit sit.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <Image
              src={"/images/service_6.jpg"}
              className="w-full h-auto"
              width={417}
              height={337}
              priority
              alt="service"
            />
            <Image
              src={"/images/service_7.jpg"}
              className="w-full h-auto"
              width={417}
              height={337}
              priority
              alt="service"
            />
          </div>
          <div className="mt-8 text-[35px] font-bold">Our Capabilities</div>
          <p className="mt-5 opacity-70">
            Massa volutpat odio facilisis purus sit elementum. Non, sed velit
            dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper
            tincidunt. Id aliquet duis sollicitudin diam.
          </p>
          <div className="mt-8 text-[35px] font-bold">Related Service</div>
          <div className="grid grid-cols-2 gap-7">
            {[serviceContent?.[0], serviceContent?.[1]]?.map(
              (content, index) => {
                return (
                  <div key={index} className="w-full service">
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
                  </div>
                );
              }
            )}
          </div>
          <HomeContact />
        </div>
        <div>
          <div className="flex w-full p-[6px] bg-[#FF5E14] bg-opacity-15 rounded-[6px]">
            <input
              className="w-full px-3 bg-transparent outline-none"
              placeholder="Search Post..."
            />
            <button className="flex w-[50px] min-w-[50px] h-[50px] items-center justify-center bg-[#FF5E14] rounded-[6px]">
              <Image
                src={"/images/icon_find.svg"}
                width={20}
                height={20}
                priority
                alt="search"
              />
            </button>
          </div>
          <div className="blog-sidebar relative mt-10 pb-3 text-[23px] font-bold">
            Services
          </div>
          <div>
            {servicesContent?.map((value, index) => {
              return (
                <div
                  key={index}
                  className="flex mt-5 items-center justify-between cursor-pointer group"
                >
                  <div className="group-hover:text-[#FF5E14]">
                    {value?.name}
                  </div>
                  <div className="flex w-[28px] h-[28px] items-center justify-center bg-[#fafbfe] group-hover:text-[#FF5E14] rounded-full">
                    {value?.value}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="blog-sidebar relative mt-10 pb-3 text-[23px] font-bold">
            Newsletter
          </div>
          <div className="mt-5 text-[18px]">Join 20,000 Sabscribers!</div>
          <form className="wpo-newsletter-widget">
            <input
              type="email"
              className="mt-5 outline-none"
              placeholder="Email Address"
            />
            <button type="submit">Sign Up</button>
          </form>
          <div className="text-[15px]">
            By signing up you agree to our{" "}
            <span className="font-bold">Privecy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
