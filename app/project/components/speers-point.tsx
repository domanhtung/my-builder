"use client";
import Image from "next/image";
import HomeContact from "@/components/contact";

const SpeersPoint = () => {
  return (
    <div>
      <div className="max-w-[1080px] mx-auto pb-10 2xl:pb-40">
        <div className="grid lg:grid-cols-3 mt-20 2xl:mt-40">
          <div className="lg:col-span-2 px-5">
            <div className="text-[30px] 2xl:text-[35px] font-bold">Project Description</div>
            <div className="mt-3 opacity-70 leading-[30px]">
              The recent endorsement by the New South Wales Government of a plan
              to convert a well-established educational establishment into
              cutting-edge learning spaces represents a substantial advancement
              in the promotion of a modern learning environment. Being
              enthusiastic contributors to this progressive undertaking, we are
              delighted to offer our specialised knowledge and skills in
              conjunction with our extensive array of services. By specialising
              in collision detection and steel detailing, our team guarantees
              that each phase of the building process is thoroughly organised
              and carried out in accordance with the most elevated criteria.
            </div>
            <div className="mt-5 opacity-70 leading-[30px]">
              By prioritising safety and efficiency, Speers Point Public School
              can have confidence that it will acquire facilities of the highest
              quality that surpass all expectations. By maintaining a steadfast
              commitment to excellence, we guarantee that the educational
              institution will possess facilities that surpass mere aesthetics
              in terms of durability, structural integrity, and capacity to
              motivate future generations of students.
            </div>
          </div>
          <div className="px-5 mt-5 lg:mt-0">
            <div className="wpo-project-single-content-des-right shadow-light">
              <ul>
                <li className="flex gap-1">
                  Location:<span>Bell St Speers Point NSW 2284</span>
                </li>
                <li className="flex gap-1">
                  Client:<span>Private</span>
                </li>
                <li className="flex gap-1">
                  Architect:<span>Archibuild</span>
                </li>
                <li className="flex gap-1">
                  Project Type:
                  <span>Full cycle Steel detailing, Clash Detection</span>
                </li>
                <li className="flex gap-1">
                  Duration:<span>2 Months</span>
                </li>
                <li className="flex gap-1">
                  Completion:<span>15 Dec 2023</span>
                </li>
                <li className="flex gap-1">
                  Share:<span>Industrial, Business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 px-5">
          <div className="relative">
            <Image
              src={"/images/projects/project_1.png"}
              className="w-full h-full object-cover"
              width={1077}
              height={552}
              priority
              alt="project"
            />
          </div>
          <div className="mt-8 text-[30px] 2xl:text-[35px] font-bold">Our approach</div>
          <div className="mt-3 opacity-70 leading-[30px]">
            The undertaking comprises multiple subdivisions that are
            interconnected and supported by a sturdy steel framework. Although
            it may seem uncomplicated, its implementation necessitated:
            <br />
            1. Coordination between the team and the Australian client in a
            professional manner.
            <br />
            2. Unique affiliations
            <br />
            3. Significant structural requirements
            <br />
            In addition to supervising the refurbishment of classroom areas, our
            duties encompass the integration of state-of-the-art facilities,
            such as a capacious auditorium, enhanced amenities, and refined
            administrative and staff quarters. By leveraging our expertise in
            the development of educational infrastructure and cutting-edge
            technology, we are dedicated to providing inventive resolutions that
            maximise effectiveness, mitigate uncertainties, and enhance the
            overall calibre of the undertaking.
          </div>
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            <div className="grid gap-5">
              <Image
                src={"/images/projects/project_2.png"}
                className="w-full h-full object-cover"
                width={480}
                height={270}
                priority
                alt="project"
              />
              <Image
                src={"/images/projects/project_3.png"}
                className="w-full h-full object-cover"
                width={480}
                height={270}
                priority
                alt="project"
              />
            </div>
            <Image
              src={"/images/projects/project_4.png"}
              className="w-full h-full object-cover"
              width={480}
              height={555}
              priority
              alt="project"
            />
          </div>
        </div>
        <HomeContact />
      </div>
    </div>
  );
};

export default SpeersPoint;
