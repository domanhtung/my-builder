import { shopDrawingContentList } from "@/app/constants/serve";
import clsx from "clsx";
import Image from "next/image";

const ShopDrawing = () => {
  return (
    <div>
      <Image
        src={"/images/services/shop_drawing_1.png"}
        className="w-full h-auto"
        width={800}
        height={520}
        priority
        alt="img"
      />
      <h2 className="mt-10 text-[26px] lg:text-[30px] 2xl:text-[35px] font-bold">
        SHOP DRAWING SERVICES
      </h2>
      <p className="mt-5 font-bold text-[18px]">What are Shop Drawings?</p>
      <p className="mt-2">
        Shop drawings are collections of sketches created by various
        professionals for prefabricated components. They visually depict
        construction data based on agreements between contractors and clients,
        customized to specific needs. Examples of components that can be
        included in shop drawings are elevators, structural steel, trusses,
        precast concrete, windows, appliances, cabinets, air handling units, and
        millwork.
      </p>
      <p className="mt-5 font-bold text-[18px]">
        What are the various types of Shop Drawing Services?
      </p>
      <p className="mt-2">
        Furthermore, presented below is a compilation of Shop Drawing Services
        provided by the committed detailers at Steel Construction Detailing.
        These drawings are crucial for progressing and completing projects
        effectively. They encompass a range of services, including BIM, steel,
        MEP, sheet metal, rebar, woodwork, millwork, and more.
      </p>
      {shopDrawingContentList?.map((content, index) => {
        return (
          <div key={index}>
            <h2 className="mt-10 text-[22px] 2xl:text-[25px] font-bold">
              {content.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-5 mt-3 items-center">
              <p className={clsx(index % 2 === 0 && "md:order-last")}>
                {content.content}
              </p>
              <Image
                src={content.img}
                className="w-full h-auto"
                width={380}
                height={230}
                priority
                alt="img"
              />
            </div>
          </div>
        );
      })}
      <h2 className="mt-10 text-[22px] 2xl:text-[25px] font-bold">
        FACADE SHOP DRAWINGS SERVICES
      </h2>
      <p className="mt-3">
        Facade Shop Drawing Services form the bedrock of the construction
        industry, crucial for guiding managers and architects in structural
        design. Enhancing productivity and profitability, these drawings offer a
        real-time reflection of the building, aiding both company detailers and
        clients in visualizing the final structure. Economical and aesthetically
        viable, Facade Shop Drawing Services serve multiple purposes, from
        securing government approval to facilitating renovations and
        comprehensive building studies.
      </p>
      <p>
        The basic characteristics of Facade Shop Drawing Services are as
        follows:
      </p>
      <ul className="list-disc pl-5">
        <li>Qualitative and Quantitative work deliverance</li>
        <li>Instant work process</li>
        <li>Cent percent customer satisfactory work-sharing</li>
        <li>Competitive prices</li>
        <li>Large and quality resources</li>
        <li>Adhering to the International Codes and Standards</li>
        <li>Ultimate Support of Facade Service Providers</li>
      </ul>
      <h2 className="mt-10 text-[22px] 2xl:text-[25px] font-bold">
        REINFORCEMENT SHOP DRAWING SERVICES
      </h2>
      <Image
        src={"/images/services/shop_drawing_13.jpg"}
        className="w-full h-auto mt-5"
        width={800}
        height={520}
        priority
        alt="img"
      />
      <ul className="list-disc pl-5 mt-5">
        <li>
          Reinforcement Shop Drawing Services have been trusted by global
          clients for over 15 years, offering meticulous preparation of 2D and
          3D Rebar Models. Our experienced team excels in blueprint creation,
          ensuring quality components for rebar formation, and delivering
          top-notch work to clients. These drawings are instrumental in
          providing advanced solutions to Rebar Detailers, with integrated
          technology and skilled technicians leading projects for enhanced
          efficiency.
        </li>
        <li>
          Steel Construction Detailing&apos;s Steel Detailers provide various
          Reinforcement Drawings including Reinforcement Detailing Services,
          Reinforcement Shop Drawings, Reinforcement Fabrication, and
          Reinforcement Modeling. We offer comprehensive client support,
          maintaining data confidentiality, providing quality assurance,
          offering post-delivery service, and other amenities, all while
          adopting a progressive approach to project preparation.
        </li>
      </ul>
      <h2 className="mt-5 text-[18px] xl:text-[20px] 2xl:text-[22px] font-bold">
        Millwork Shop Drawing
      </h2>
      <p className="mt-3">
        Millwork Shop Drawing Services, also referred to as Cabinet Shop Drawing
        Services, assist clients in meeting their outsourcing needs for various
        Shop Drawing services through Steel Construction Detailing detailers.
        Offering a comprehensive range of services under one roof, we prioritize
        accuracy by utilizing necessary tools, technology, and adhering to
        international standards.
      </p>
      <h2 className="mt-5 text-[18px] xl:text-[20px] 2xl:text-[22px] font-bold">
        What are the Codes & Standards used by Archibuild?
      </h2>
      <ul className="list-disc pl-5 mt-3">
        <li>
          {
            "AASHTO – American Association of State Highway and Transportation Officials"
          }
        </li>
        <li>{"ACI – American Concrete Institute"}</li>
        <li>{"ASTM – American Society for Testing and Materials"}</li>
        <li>{"BS – British Standard"}</li>
        <li>{"CRSI – Concrete Reinforcing Steel Institute"}</li>
        <li>{"RSIO – Reinforcing Steel Institute of Ontario"}</li>
      </ul>
      <h2 className="mt-10 text-[22px] 2xl:text-[25px] font-bold">
        WHY CHOOSE ARCHIBUILD ?
      </h2>
      <p className="mt-3">
        It becomes important to outsource the work of Shop Drawing to a company
        that inherently fulfils the needs and specifications of its patrons.
        Here are some of the reasons that make it easy for you to choose
        ARCHIBUILD :
      </p>
      <ul className="list-disc pl-5 mt-3">
        <li>Reliable and Scalability of the Services</li>
        <li>Delivery of the work within the stipulated time frame.</li>
        <li>Increases the efficiency of work.</li>
        <li>
          It makes practical sense for occasional needs and requirements for
          drafting and designing.
        </li>
        <li>Reduced costs and expenses.</li>
        <li>Comprehensive Services.</li>
        <li>Professionally designed outputs.</li>
        <li>
          Able to work on diverse CAD Drafting Software, tools, and Standards.
        </li>
      </ul>
      <p className="mt-3">
        Contact Us! Today and know more about the service, or send us your
        inquiry and our team of experts will be glad to assist you and serve you
        on your project.
      </p>
    </div>
  );
};

export default ShopDrawing;
