import { markingPlanContentList } from "@/app/constants/serve";
import Image from "next/image";

const MarkingPlan = () => {
  return (
    <div>
      <p>
        Precision is essential in the complex realm of construction and design.
        The secret to turning a vision into reality is found in every
        measurement and line. A key instrument that is essential to this
        accuracy is Marking Plans. Let us explain the importance of this
        essential blueprint and the unmatched value it adds to your initiatives.
      </p>
      <Image
        src={"/images/services/marking_plans_3.png"}
        className="w-full max-w-[600px] h-auto mx-auto mt-5"
        width={600}
        height={416}
        priority
        alt="marking plan"
      />
      {markingPlanContentList?.map((content, index) => {
        return (
          <div key={index}>
            <h2 className="mt-10 text-[20px] 2xl:text-[25px] font-bold uppercase">
              {content.title}
            </h2>
            <p className="mt-2">{content.content}</p>
            {content?.img && (
              <Image
                src={content?.img}
                className="w-full max-w-[600px] h-auto mx-auto mt-5"
                width={600}
                height={416}
                priority
                alt="marking plan"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MarkingPlan;
