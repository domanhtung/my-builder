import { generalDrawingContentList } from "@/app/constants/serve";

const GeneralDrawing = () => {
  return (
    <div>
      <p>
        Our service offers comprehensive General Arrangement Drawings which
        provide an overarching depiction of a building&apos;s composition,
        illustrating how its components integrate to form a cohesive whole.
        Tailored to the complexity of the structure, these drawings include
        various projections, such as plans, sections, and elevations, ensuring
        thorough coverage of the design. While often referred to as
        &apos;location drawings,&apos; it&apos;s essential to distinguish them
        from geographical location depictions, preventing any confusion in the
        planning process.
      </p>
      {generalDrawingContentList?.map((content, index) => {
        return (
          <div key={index}>
            <h2 className="mt-8 text-[26px] lg:text-[25px] font-bold uppercase">
              {content.title}
            </h2>
            <p>{content.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GeneralDrawing;
