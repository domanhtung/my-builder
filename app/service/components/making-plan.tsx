import { markingPlanContentList } from "@/app/constants/serve";

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
      {markingPlanContentList?.map((content, index) => {
        return (
          <div key={index}>
            <h2 className="mt-10 text-[26px] lg:text-[25px] font-bold uppercase">
              {content.title}
            </h2>
            <p>{content.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MarkingPlan;
