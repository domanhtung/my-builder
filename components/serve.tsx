import Image from "next/image";
import Link from "next/link";

const ServeComponent = () => {
  return (
    <div className="serve py-20">
      <div className="container grid lg:grid-cols-2 gap-5 lg:gap-0 mx-auto px-5">
        <div className="pr-20">
          <div className="text-[18px] xl:text-[22px] text-[#7C90F9] font-semibold">
            We serve
          </div>
          <div className="py-3 text-light text-[30px] xl:text-[36px] font-bold">
            Shop Drawing
          </div>
          <div className="text-light text-[16px] xl:text-[18px]">
            We offer a diverse array of Steel Shop Drawings, encompassing sheet
            metal, woodwork, and structural drawings. Our comprehensive drawings
            adhere to fabrication and manufacturing standards, ensuring precise
            dimensions. Our Structural Shop Drawings provide project managers
            and installers with detailed blueprints, facilitating reliable
            project approval.
          </div>
          <div className="btn_history mt-10">
            <Link href="/">Discover More</Link>
          </div>
        </div>
        <div>
          <div className="mb-[-120px] p-3 bg-[#ED4D5D]">
            <Image
              src={"/images/serve_1.png"}
              className="w-full"
              width={883}
              height={516}
              priority
              alt="serve"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServeComponent;
