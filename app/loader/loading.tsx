"use client";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

const Loading = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(true);

  useEffect(() => {
    if (!isLoaded) {
      const timeOutId = setTimeout(() => {
        setIsLoaded(true);
        clearTimeout(timeOutId);
      }, 1000);
      return () => clearTimeout(timeOutId);
    } else {
      const id = setTimeout(() => {
        setIsShow(false);
        clearTimeout(id);
      }, 550);
      return () => clearTimeout(id);
    }
  }, [isLoaded]);

  if (!isShow) {
    return null;
  }

  return (
    <div
      className={clsx(
        "bg-light fixed flex w-screen h-screen top-0 left-0 items-center justify-center z-50",
        isLoaded && "animation-loading-end"
      )}
    >
      <div className="relative w-[92px] h-[78px]">
        <Image
          src={"/images/loading/big_loader.svg"}
          className="big_loader"
          width={60}
          height={77.5}
          priority
          alt="big loader"
        />
        <Image
          src={"/images/loading/medium_loader.svg"}
          className="medium_loader"
          width={42.5}
          height={46.5}
          priority
          alt="big loader"
        />
        <Image
          src={"/images/loading/small_loader.svg"}
          className="small_loader"
          width={19}
          height={16.5}
          priority
          alt="big loader"
        />
      </div>
    </div>
  );
};

export default Loading;
