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
      <h2 className="mt-10 text-[26px] lg:text-[30px] 2xl:text-[35px] font-bold">SHOP DRAWING SERVICES</h2>
      <p className="mt-1 font-bold">What are Shop Drawings?</p>
      <p>
        Shop drawings are collections of sketches created by various
        professionals for prefabricated components. They visually depict
        construction data based on agreements between contractors and clients,
        customized to specific needs. Examples of components that can be
        included in shop drawings are elevators, structural steel, trusses,
        precast concrete, windows, appliances, cabinets, air handling units, and
        millwork.
      </p>
      <p className="mt-3 font-bold">
        What are the various types of Shop Drawing Services?
      </p>
      <p>
        Furthermore, presented below is a compilation of Shop Drawing Services
        provided by the committed detailers at Steel Construction Detailing.
        These drawings are crucial for progressing and completing projects
        effectively. They encompass a range of services, including BIM, steel,
        MEP, sheet metal, rebar, woodwork, millwork, and more.
      </p>
      {shopDrawingContentList?.map((content, index) => {
        return (
          <div key={index}>
            <h2 className="mt-10 text-[22px] 2xl:text-[25px] font-bold">{content.title}</h2>
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
      <Image
        src={"/images/services/shop_drawing_12.png"}
        className="w-full h-auto"
        width={800}
        height={520}
        priority
        alt="img"
      />
      <p className="mt-5">
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
        The basic characteristics of Facade Shop Drawing Services are as follows:
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
    </div>
  );
};

export default ShopDrawing;
