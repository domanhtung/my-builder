import Image from "next/image";
import Link from "next/link";
import HomeContact from "@/components/contact";
import { serveContents, servicesContent } from "../../constants/service";
import ShopDrawing from "../components/shop-drawing";
import { serviceKey } from "@/app/constants/key";
import MarkingPlan from "../components/making-plan";
import GeneralDrawing from "../components/general-drawing";
import ClashDetection from "../components/clash-detection";
import Loading from "@/app/loader/loading";

export default function Service({ params }: { params: { slug: string } }) {
  const currentService = serveContents?.find((s) => s.key === params.slug);

  return (
    <div>
      <Loading />
      <div className="wpo-breadcumb-area">
        <div className="pt-10 lg:pt-[60px] 2xl:pt-20 text-center">
          <h1 className="!text-white text-[45px] lg:text-[54px] 2xl:text-[60px] font-bold">
            {currentService?.title}
          </h1>
          <p className="text-[16px] lg:text-[18px] 2xl:text-[20px] !text-white">
            <Link href={"/"}>Home</Link>/
            <span className="text-[#cbd4fd]">Services</span>/
            <span>{currentService?.title}</span>
          </p>
        </div>
      </div>
      <div className="max-w-[1300px] grid lg:grid-cols-3 mt-10 lg:mt-20 2xl:mt-[120px] mx-auto pb-10 lg:pb-40 gap-10">
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
            <HomeContact />
            <div className="mt-8 text-[26px] xxl:text-[35px] font-bold">
              Related Service
            </div>
            <div className="grid md:grid-cols-2 mt-5 gap-5">
              {[serveContents?.[0], serveContents?.[1]]?.map(
                (content, index) => {
                  return (
                    <Link key={index} href={content?.url}>
                      <div className="w-full service">
                        <div className="service-image relative">
                          <Image
                            src={content?.img}
                            width={410}
                            height={350}
                            priority
                            alt={content?.title}
                          />
                        </div>
                        <div className="content h-[300px] 2xl:h-[350px] p-5 lg:p-7">
                          <div className="mt-2 text-[20px] 2xl:text-[25px] font-bold hover:!text-[#ED4D5D] cursor-pointer uppercase">
                            {content?.title}
                          </div>
                          <div className="mt-2 opacity-80 text-[14px] 2xl:text-[16px]">
                            {content?.content}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="sticky-service no-scroll pb-5">
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
                    <div className="flex w-[24px] h-[24px] 2xl:w-[28px] 2xl:h-[28px] items-center justify-center bg-[#fafbfe] !text-black group-hover:!text-[#ED4D5D] rounded-full">
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
            <div className="!text-white mt-5">
              Get latest updates and offers
            </div>
            <div className="flex mt-2 items-center border !border-[#ED4D5D]">
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
    </div>
  );
}
