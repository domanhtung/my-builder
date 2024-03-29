"use client";
import { serviceContent } from "@/app/constants/home";
import Image from "next/image";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";

const ContactPage = () => {
  const formRef = useRef<any>();
  const [dataForm, setDataForm] = useState<any>();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isSumitting, setIsSubmitting] = useState<boolean>(false);

  const changeValue = (key: string, value: string) => {
    const clone = { ...dataForm };
    clone[key] = value;
    setDataForm(clone);
  };

  const sendEmail = async (event: any) => {
    event.preventDefault();
    setIsSubmit(true);
    setIsSubmitting(true);
    if (
      !dataForm?.name ||
      !dataForm?.email ||
      !dataForm?.address ||
      !dataForm?.service
    ) {
      toast.error("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }
    try {
      await emailjs.sendForm(
        process?.env?.NEXT_PUBLIC_SERVICE_ID || "",
        process?.env?.NEXT_PUBLIC_TEMPLATE_ID || "",
        formRef.current,
        process?.env?.NEXT_PUBLIC_USER_ID || ""
      );
      toast.success("Your message was sent successfully");
      setIsSubmit(false);
      setIsSubmitting(false);
    } catch (e) {
      toast.error("Email failed to send");
      setIsSubmit(false);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto pt-10 lg:pt-[120px] px-5">
      <div className="grid md:grid-cols-3 gap-5">
        <div className="px-5 py-8 text-center shadow-light">
          <div className="w-fit p-5 mx-auto rounded-full bg-[#f5f5f5]">
            <Image
              src={"/images/location.svg"}
              width={35}
              height={35}
              priority
              alt="location"
            />
          </div>
          <div className="py-2 lg:py-3 text-[24px] lg:text-[30px]">Address</div>
          <p className="opacity-70 text-[14px] lg:text-[16px]">
            7 Green Lake Street Crawfordsville, IN 47933
          </p>
        </div>
        <div className="px-5 py-8 text-center shadow-light">
          <div className="w-fit p-5 mx-auto rounded-full bg-[#f5f5f5]">
            <Image
              src={"/images/email.svg"}
              width={35}
              height={35}
              priority
              alt="location"
            />
          </div>
          <div className="py-3 text-[30px]">Email Us</div>
          <p className="opacity-70">sailo@gmail.com</p>
          <p className="opacity-70">helloyou@gmail.com</p>
        </div>
        <div className="px-5 py-8 text-center shadow-light">
          <div className="w-fit p-5 mx-auto rounded-full bg-[#f5f5f5]">
            <Image
              src={"/images/phone.svg"}
              width={35}
              height={35}
              priority
              alt="location"
            />
          </div>
          <div className="py-3 text-[30px]">Call Now</div>
          <p className="opacity-70">+1 800 123 456 789</p>
          <p className="opacity-70">+1 800 123 654 987</p>
        </div>
      </div>
      <div className="mt-10 lg:mt-[120px] text-[28px] lg:text-[35px] text-center font-bold">
        Have Any Question?
      </div>
      <p className="max-w-[440px] mt-3 lg:mt-5 mx-auto text-center opacity-70">
        It is a long established fact that a reader will be distracted content
        of a page when looking.
      </p>
      <div className="relative pt-10 mb-[-100px] z-10 bg-light">
        <form
          ref={formRef}
          className="grid md:grid-cols-2 p-5 md:p-10 gap-5 shadow-light"
        >
          <input
            className={clsx(
              "input-contact",
              isSubmit &&
                !dataForm?.name &&
                "input-contact-error !bg-[#dc3545] !bg-opacity-15"
            )}
            placeholder="Your Name*"
            name="name"
            value={dataForm?.name}
            onChange={(e) => changeValue("name", e?.target?.value)}
          />
          <input
            className={clsx(
              "input-contact",
              isSubmit &&
                !dataForm?.email &&
                "input-contact-error !bg-[#dc3545] !bg-opacity-15"
            )}
            placeholder="Your Email*"
            name="email"
            value={dataForm?.email}
            onChange={(e) => changeValue("email", e?.target?.value)}
          />
          <input
            className={clsx(
              "input-contact",
              isSubmit &&
                !dataForm?.address &&
                "input-contact-error !bg-[#dc3545] !bg-opacity-15"
            )}
            placeholder="Address*"
            name="address"
            value={dataForm?.address}
            onChange={(e) => changeValue("address", e?.target?.value)}
          />
          <select
            className={clsx(
              "input-contact",
              isSubmit &&
                !dataForm?.service &&
                "input-contact-error !bg-[#dc3545] !bg-opacity-15"
            )}
            name="service"
            value={dataForm?.service || ""}
            defaultValue={""}
            onChange={(e) => changeValue("service", e?.target?.value)}
          >
            <option disabled value={""}>
              Service
            </option>
            {serviceContent?.map((service, index) => {
              return (
                <option
                  key={index}
                  className="text-light"
                  value={service?.title}
                >
                  {service?.title}
                </option>
              );
            })}
          </select>
          <textarea
            className="input-contact py-3 !h-[180px] md:col-span-2 resize-none"
            placeholder="Message..."
            value={dataForm?.message}
            name="message"
            onChange={(e) => changeValue("message", e?.target?.value)}
          />
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="theme-btn"
              disabled={isSumitting}
              onClick={(e) => sendEmail(e)}
            >
              {isSumitting ? "Sending..." : "Get In Touch"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ContactPage;
