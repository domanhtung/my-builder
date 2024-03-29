import { projectContents } from "@/app/constants/banner";
import { pathnameObj } from "@/app/constants/home";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div id={pathnameObj.project} className="project-bg py-20">
      <div className="container mx-auto px-5">
        <div className="text-[18px] xl:text-[22px] font-semibold text-[#7C90F9]">
          Our Projects
        </div>
        <div className="text-[35px] xl:text-[50px] font-bold">
          Our special Projects
        </div>
        <div className="grid lg:grid-cols-3 gap-3 xl:gap-7 mt-5 xl:mt-10">
          {projectContents?.map((project, index) => {
            return (
              <div key={index} className="group flex flex-col">
                <div className="w-full h-[200px] xl:h-[290px] overflow-hidden">
                  <Image
                    src={project?.img}
                    className="w-full h-full object-cover group-hover:scale-110 duration-300"
                    width={417}
                    height={278}
                    priority
                    alt="project"
                  />
                </div>
                <div className="bg-light flex-1">
                  <div className="project-card relative flex w-fit mx-auto mt-[-19px] text-[12px] xl:text-[15px] !bg-[#ED4D5D] z-[1]">
                    <div className="py-2 px-3 xl:px-4 !text-white">
                      {project?.time}
                    </div>
                    <div className="content relative py-2 px-3 xl:px-4 !text-white">
                      {project?.by}
                    </div>
                  </div>
                  <div className="p-5">
                    <Link href={`/${pathnameObj.project}`}>
                      <div className="text-[20px] xl:text-[30px] font-bold cursor-pointer hover:!text-[#ED4D5D]">
                        {project?.title}
                      </div>
                    </Link>
                    <div className="mt-2 text-[14px] xl:text-[16px]">
                      {project?.content}
                    </div>
                    <div className="project-readmore flex w-fit items-center gap-2 mt-5 cursor-pointer">
                      <Link href={`/${pathnameObj.project}`}>
                        <span className="text-[16px] xl:text-[18px] font-bold">
                          READ MORE
                        </span>
                      </Link>
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.4141 8.68457L8.64453 16.4893L7.87109 15.7158L14.375 9.21191H0.839844V8.15723H14.375L7.87109 1.65332L8.64453 0.915039L16.4141 8.68457Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
