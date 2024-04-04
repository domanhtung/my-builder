import Image from "next/image";

const PlatformBoardwalk = () => {
  return (
    <div>
      <div className="max-w-[1080px] mx-auto">
        <div className="grid lg:grid-cols-3 mt-20 2xl:mt-40">
          <div className="lg:col-span-2 px-5">
            <div className="text-[30px] 2xl:text-[35px] font-bold">
              Project Description
            </div>
            <div className="mt-3 opacity-70 leading-[30px]">
              Fiberglass Reinforced Plastic (FRP) gratings are widely used in a
              variety of projects, thanks to their lightweight construction and
              exceptional corrosion resistance. These undertakings are
              meticulously planned to meet the needs of public infrastructure.
              Our valued partner focuses installation correctness, even for
              minor projects. Despite logistical challenges in transit and
              remote locations, we ensure faultless execution. Whether we're on
              the seaside or nestled in the woods, we're committed to providing
              high-quality service.
            </div>
          </div>
          <div className="px-5 mt-5 lg:mt-0">
            <div className="wpo-project-single-content-des-right shadow-light">
              <ul>
                <li className="flex gap-1">
                  Location:<span>Adelaide, New South Wales - Australia</span>
                </li>
                <li className="flex gap-1">
                  Client:<span>Treadwell</span>
                </li>
                <li className="flex gap-1">
                  Architect:<span>Archibuild</span>
                </li>
                <li className="flex gap-1">
                  Project Type:
                  <span>Walk way</span>
                </li>
                <li className="flex gap-1">
                  Duration:<span>224 man hours</span>
                </li>
                <li className="flex gap-1">
                  Completion:<span>27 Aug 2022</span>
                </li>
                <li className="flex gap-1">
                  Share:<span>Full package of detailing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 px-5">
          <div className="relative">
            <Image
              src={"/images/projects/project_7.png"}
              className="w-full h-full object-cover"
              width={1077}
              height={552}
              priority
              alt="project"
            />
          </div>
          <div className="mt-8 text-[30px] 2xl:text-[35px] font-bold">
            Our approach
          </div>
          <div className="mt-3 opacity-70 leading-[30px]">
            These projects are outstanding examples of the walkway projects
            we've successfully accomplished. Beyond managing routine activities,
            our team's competence has significantly advanced, giving solutions
            in the following areas:
            <br />
            1. Consulting based only on sketches.
            <br />
            2. Element numbering
            <br />
            3. Quality Assurance
            <br />
            4. Providing smooth collaboration between our team and overseas
            clients.
            <br />
            5. Proficiency in using other construction materials other than
            steel.
            <br />
            6. Geographical proficiency
            <br />
            7. Integration with supplementary applications, like Rhino.
            <br />
            Our team is not limited to steel; we can deal with a variety of
            construction materials while remaining committed to providing
            high-quality drawing services
          </div>
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            <Image
              src={"/images/projects/project_8.png"}
              className="w-full h-full object-cover"
              width={480}
              height={270}
              priority
              alt="project"
            />
            <Image
              src={"/images/projects/project_9.png"}
              className="w-full h-full object-cover"
              width={480}
              height={270}
              priority
              alt="project"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformBoardwalk;
