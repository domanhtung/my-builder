import { pathnameObj } from "@/app/constants/home";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div
      id={pathnameObj.aboutUs}
      className="container grid lg:grid-cols-2 mx-auto py-20 lg:py-[120px] px-5 gap-10 xl:gap-20 items-center"
    >
      <div className="about-left-image relative">
        <Image
          src={"/images/about.jpg"}
          className="w-full h-[350px] lg:h-auto"
          width={730}
          height={811}
          priority
          alt="about"
        />
        <div className="ab-2 overflow-hidden">
          <Image
            src={"/images/about_2.png"}
            className="w-full h-auto hidden lg:block"
            width={730}
            height={811}
            priority
            alt="about"
          />
        </div>
      </div>
      <div>
        <div className="text-[18px] xl:text-[22px] font-semibold text-[#233FD6]">
          About Us
        </div>
        <div className="mt-2 text-[35px] xl:text-[50px] font-bold">
          Our Dedicated Solutions to Your Success
        </div>
        <p className="mt-3 text-[16px] xl:text-[18px]">
          Archibuild is your one-stop global destination for steel detailing
          services, including BIM, PEB, precast panel, and rebar detailing. Our
          diverse expertise and skilled team ensure precise design execution
          through 2D drawings and 3D models, facilitating efficient fabrication
          and erection methods for steel structures worldwide. With extensive
          knowledge and adeptness in various tools and techniques, we deliver
          exceptional design and drafting services tailored to each
          project&apos;s requirements.
        </p>
        <div className="grid grid-cols-2 mt-20">
          <div />
          <div>
            <div className="text-[25px] xl:text-[30px] font-semibold">
              Jodie Phan
            </div>
            <div className="text-[14px] xl:text-[18px]">
              CEO & co-founder of Archibuild
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
