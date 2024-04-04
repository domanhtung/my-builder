import { partners } from "@/app/constants/service";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="container mx-auto px-5 pt-10 lg:pt-20">
      <div className="text-[18px] 2xl:text-[22px] font-semibold text-[#233FD6]">
        Meet our partners
      </div>
      <div className="text-[35px] xl:text-[40px] 2xl:text-[50px] font-bold">
        {"Our Clients"}
      </div>
      <div className="mt-10 overflow-hidden">
        <div className="animation-slide flex gap-5">
          {[...partners, ...partners]?.map((partner, index) => {
            return (
              <div
                key={index}
                className="flex py-3 px-10 items-center justify-center partner-bg cursor-pointer"
              >
                <Image
                  src={partner?.img}
                  className="max-w-[200px] max-h-[120px] object-contain"
                  width={200}
                  height={120}
                  priority
                  alt="partner"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
