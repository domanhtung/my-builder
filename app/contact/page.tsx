import Image from "next/image";
import Link from "next/link";
import ContactPage from "./components/contact-page";

export default function Contact() {
  const googleMapKey = process?.env?.GOOGLE_MAP_KEY || "";

  return (
    <div>
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
          src={`https://www.google.com/maps/embed/v1/place?q=Shophouse%202B%2C%201st%20floor%20Green%20Pearl%20Mega%20Mall%2C%20No%20378%2C%20Minh%20Khai%20Road%2C%20Hai%20Ba%20Trung%20District%2C%20Hanoi%2C%20Vietnam&key=${googleMapKey}`}
        ></iframe>
      </div>
    </div>
  );
}
