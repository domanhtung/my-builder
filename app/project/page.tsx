import Link from "next/link";

export default function Project() {
  return (
    <div>
      <div className="wpo-breadcumb-area">
        <div className="pt-[80px] text-center">
          <div className="text-light text-[60px] font-bold">Project Single</div>
          <p className="text-[20px] text-light">
            <Link href={"/"}>Home</Link> /{" "}
            <span className="text-[#cbd4fd]">Project Single</span>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
