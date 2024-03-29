import Image from "next/image";
import Link from "next/link";
import { serviceContent } from "../../constants/home";
import HomeContact from "@/components/contact";
import { serveContents, servicesContent } from "../../constants/service";
import ShopDrawing from "../components/shop-drawing";
import { serviceKey } from "@/app/constants/key";
import MarkingPlan from "../components/making-plan";
import GeneralDrawing from "../components/general-drawing";
import ClashDetection from "../components/clash-detection";

export default function Service({ params }: { params: { slug: string } }) {
  const currentService = serveContents?.find((s) => s.key === params.slug);

  return (
    <div>
      <div className="wpo-breadcumb-area">
        <div className="pt-10 lg:pt-[80px] text-center">
          <h1 className="!text-white text-[45px] lg:text-[60px] font-bold">
            {currentService?.title}
          </h1>
          <p className="text-[16px] lg:text-[20px] !text-white">
            <Link href={"/"}>Home</Link>/
            <span className="text-[#cbd4fd]">Services</span>/
            <span>{currentService?.title}</span>
          </p>
        </div>
      </div>
      <div className="max-w-[1300px] grid lg:grid-cols-3 mt-10 lg:mt-[120px] mx-auto pb-40 gap-10">
        <div className="lg:col-span-2">
          <div className="px-5">
            {currentService?.key === serviceKey?.shopDrawing && <ShopDrawing />}
            {currentService?.key === serviceKey?.markingPlans && (
              <MarkingPlan />
            )}
            {currentService?.key === serviceKey?.generalDrawings && (
              <GeneralDrawing />
            )}
            {currentService?.key === serviceKey?.clashPlan && (
              <ClashDetection />
            )}
            <div className="mt-8 text-[26px] lg:text-[35px] font-bold">
              Related Service
            </div>
            <div className="grid md:grid-cols-2 gap-7">
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
                        <div className="mt-2 text-[25px] font-bold hover:!text-[#ED4D5D] cursor-pointer">
                          {content?.title}
                        </div>
                        <div className="mt-2 opacity-80">
                          {content?.content}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <HomeContact />
        </div>
        <div className="px-5">
          <div className="flex w-full p-[6px] !bg-[#ED4D5D] !bg-opacity-15 rounded-[6px]">
            <input
              className="w-full px-3 bg-transparent outline-none"
              placeholder="Search Post..."
            />
            <button className="flex w-[50px] min-w-[50px] h-[50px] items-center justify-center !bg-[#ED4D5D] rounded-[6px]">
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
                  className="flex mt-5 gap-3 items-center cursor-pointer group"
                >
                  <div className="flex w-[28px] h-[28px] items-center justify-center bg-[#fafbfe] !text-black group-hover:!text-[#ED4D5D] rounded-full">
                    {index + 1}
                  </div>
                  <div className="group-hover:!text-[#ED4D5D]">
                    {value?.name}
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
