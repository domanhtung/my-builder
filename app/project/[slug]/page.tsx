import { projectKey, projectNameByKey } from "@/app/constants/project";
import SpeersPoint from "../components/speers-point";
import Loading from "@/app/loader/loading";
import Link from "next/link";
import Delnorth from "../components/delnorth";

export default function Project({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Loading />
      <div className="wpo-breadcumb-area">
        <div className="pt-[80px] text-center">
          <div className="!text-white text-[45px] lg:text-[60px] font-bold">
            {projectNameByKey?.[params?.slug]}
          </div>
          <p className="text-[16px] lg:text-[20px] !text-white">
            <Link href={"/"}>Home</Link> /{" "}
            <span className="text-[#cbd4fd]">
              {projectNameByKey?.[params?.slug]}
            </span>
          </p>
        </div>
      </div>
      {params?.slug === projectKey.speersPoint && <SpeersPoint />}
      {params?.slug === projectKey.delnorth && <Delnorth />}
    </div>
  );
}
