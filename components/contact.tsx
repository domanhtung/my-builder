"use client";
import { serviceContent } from "@/app/constants/home";
import clsx from "clsx";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeContact = () => {
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
    if (!dataForm?.name || !dataForm?.email || !dataForm?.service) {
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
    <div id="contact" className="container mx-auto py-20 px-5">
      <div className="p-5 lg:p-7 shadow-light rounded-[20px]">
        <div className="text-[30px] font-semibold">
          {"Have project in mind? Let's discuss"}
        </div>
        <div className="opacity-70">
          Get in touch with us to see how we can help you with your project
        </div>
        <form ref={formRef} className="mt-10">
          <div className="grid grid-cols-2 gap-5">
            <input
              className={clsx(
                "input px-3 py-2 outline-none border-b border-[#ebebeb]",
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
                "input px-3 py-2 outline-none border-b border-[#ebebeb]",
                isSubmit &&
                  !dataForm?.email &&
                  "input-contact-error !bg-[#dc3545] !bg-opacity-15"
              )}
              placeholder="Your Email*"
              name="email"
              value={dataForm?.email}
              onChange={(e) => changeValue("email", e?.target?.value)}
            />
          </div>
          <select
            className={clsx(
              "input w-full mt-5 px-3 py-2 outline-none border-b border-[#ebebeb]",
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
                <option key={index} value={service?.title}>
                  {service?.title}
                </option>
              );
            })}
          </select>
          <textarea
            className="input w-full h-[120px] mt-5 px-3 py-2 outline-none border-b border-[#ebebeb]"
            placeholder="Message..."
            value={dataForm?.message}
            name="message"
            onChange={(e) => changeValue("message", e?.target?.value)}
          />
          <button
            type="submit"
            className="theme-btn mt-5"
            disabled={isSumitting}
            onClick={(e) => sendEmail(e)}
          >
            {isSumitting ? "Sending..." : "Send Massage"}
          </button>
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

export default HomeContact;
