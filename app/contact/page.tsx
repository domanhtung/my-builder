import Image from "next/image";
import Link from "next/link";
import ContactPage from "./components/contact-page";
import Loading from "../loader/loading";

export default function Contact() {
  const googleMapKey = process?.env?.GOOGLE_MAP_KEY || "";

  return (
    <div>
      <Loading />
      <div className="wpo-breadcumb-area">
        <div className="pt-10 lg:pt-[80px] text-center">
          <h1 className="!text-white text-[45px] lg:text-[60px] font-bold">
            Contact
          </h1>
          <p className="text-[16px] lg:text-[20px] !text-white">
            <Link href={"/"}>Home</Link>/
            <span className="text-[#cbd4fd]">Contact</span>
          </p>
        </div>
      </div>
      <ContactPage />
      <div style={{ height: "500px" }} className="overflow-hidden">
        <iframe
          width="600"
          height="450"
          className="w-full h-full border-0"
          loading="lazy"
          src={`https://www.google.com/maps/embed/v1/place?q=10%20P.%20Ch%C6%B0%C6%A1ng%20D%C6%B0%C6%A1ng%20%C4%90%E1%BB%99%2C%20Ch%C6%B0%C6%A1ng%20D%C6%B0%C6%A1ng%20%C4%90%E1%BB%99%2C%20Ho%C3%A0n%20Ki%E1%BA%BFm%2C%20H%C3%A0%20N%E1%BB%99i&key=${googleMapKey}`}
        ></iframe>
      </div>
    </div>
  );
}
