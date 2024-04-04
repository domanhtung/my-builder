"use client";
import Image from "next/image";

const Delnorth = () => {
  return (
    <div>
      <div className="max-w-[1080px] mx-auto">
        <div className="grid lg:grid-cols-3 mt-20 2xl:mt-40">
          <div className="lg:col-span-2 px-5">
            <div className="text-[30px] 2xl:text-[35px] font-bold">Project Description</div>
            <div className="mt-3 opacity-70 leading-[30px]">
              The warehouse project shown below exemplifies our ability to
              execute complicated structural designs with precision and
              efficiency. This project, which incorporates structural steel
              details, curtain wall (sheeting), and precast concrete panels,
              demonstrates our commitment to providing high-quality solutions
              that are adapted to our clients&apos; demands.
            </div>
            <div className="mt-5 opacity-70 leading-[30px]">
              We successfully completed a warehouse project that exceeded the
              client&apos;s expectations thanks to our comprehensive approach to
              structural detailing and coordination. Our proactive approach to
              clash detection and resolution, together with our emphasis on
              material cost reduction, guaranteed the project&apos;s success
              while achieving strict quality standards. This project
              demonstrates our competence in warehouse construction and
              commitment to providing innovative solutions that provide value to
              our clients.
            </div>
          </div>
          <div className="px-5 mt-5 lg:mt-0">
            <div className="wpo-project-single-content-des-right shadow-light">
              <ul>
                <li className="flex gap-1">
                  Location:<span>Thornton NSW 2322, Australia</span>
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
                  Duration:<span>3 Months</span>
                </li>
                <li className="flex gap-1">
                  Completion:<span>27 Sep 2023</span>
                </li>
                <li className="flex gap-1">
                  Share:<span>Industrial, Business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 px-5">
          <Image
            src={"/images/projects/project_5.png"}
            className="w-full h-full object-cover"
            width={1077}
            height={552}
            priority
            alt="project"
          />
          <div className="mt-8 text-[30px] 2xl:text-[35px] font-bold">Our approach</div>
          <div className="mt-3 opacity-70 leading-[30px]">
            <span className="font-bold">First Assessment and Planning:</span>{" "}
            Our staff carefully considers site constraints, architectural needs,
            and client preferences while thoroughly assessing the project
            requirements. We create comprehensive 2D and 3D models of the
            warehouse building, including curtain wall systems and precast
            concrete panels, by utilizing contemporary Building Information
            Modelling (BIM) technology.
          </div>
          <div className="mt-5 opacity-70 leading-[30px]">
            <span className="font-bold">Structural Steel Detailing:</span> Our
            team carefully plans and coordinates the manufacture and
            installation of structural steel components, which is essential to
            the success of warehouse building. This guarantees adherence to
            industry requirements and structural integrity.
          </div>
          <div className="mt-5 opacity-70 leading-[30px]">
            <span className="font-bold">Curtain Wall Systems:</span> Improving
            warehouses&apos; appearance and usefulness, we specialize in the
            design and installation of curtain wall systems. We guarantee the
            smooth integration of curtain wall components with the entire
            structure, improving both visual appeal and energy efficiency,
            through painstaking workmanship and coordination.
          </div>
          <div className="mt-5 opacity-70 leading-[30px]">
            <span className="font-bold">
              Integration of Precast Concrete Panels:
            </span>{" "}
            Using precast concrete panels in warehouse architecture has several
            benefits, such as cost-effectiveness, durability, and expedited
            building schedules. Our crew works effectively to minimize
            construction time and on-site delays by managing the manufacturing
            and installation of precast panels.
          </div>
          <Image
            src={"/images/projects/project_6.png"}
            className="w-full h-full mt-10 object-cover"
            width={1077}
            height={552}
            priority
            alt="project"
          />
        </div>
      </div>
    </div>
  );
};

export default Delnorth;
