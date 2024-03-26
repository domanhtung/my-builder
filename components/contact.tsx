const HomeContact = () => {
  return (
    <div className="container mx-auto py-20 px-5">
      <div className="p-7 shadow-[0_2px_8px_2px_rgba(22,14,71,0.1)] rounded-[20px]">
        <div className="text-[30px] font-semibold">
          {"Have project in mind? Let's discuss"}
        </div>
        <div className="opacity-70">
          Get in touch with us to see how we can help you with your project
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-5">
            <input
              className="input px-3 py-2 outline-none border-b border-[#ebebeb]"
              placeholder="Your Name*"
            />
            <input
              className="input px-3 py-2 outline-none border-b border-[#ebebeb]"
              placeholder="Your Email*"
            />
          </div>
          <select className="input w-full mt-5 px-3 py-2 outline-none border-b border-[#ebebeb]">
            <option>Services</option>
            <option>Power & Energy</option>
          </select>
          <textarea
            className="input w-full h-[120px] mt-5 px-3 py-2 outline-none border-b border-[#ebebeb]"
            placeholder="Massage..."
          />
          <button className="theme-btn mt-5">Send Massage</button>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
