"use client";
import Image from "next/image";
import Link from "next/link";
import { navname } from "../app/constants/home";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const HeaderComponent = () => {
  const filterRef = useRef<any>();
  const filterItemRef = useRef<any>();
  const stickyRef = useRef<any>();
  const [isShowSearch, setIsShowSearch] = useState<boolean>(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
      const onScroll = () => {
        if ((window as any)?.pageYOffset > stickyRef?.current?.offsetTop) {
          if (!stickyRef.current.className.includes("animation-head")) {
            stickyRef.current.className =
              stickyRef.current.className + " animation-head";
          }
        } else {
          if (stickyRef.current.className.includes("animation-head")) {
            stickyRef.current.className =
              stickyRef.current.className.replaceAll(" animation-head", "");
          }
        }
        // if ((window as any)?.pageYOffset > 400) {
        //   if (scrollTopRef.current.className.includes("hide-scroll-top")) {
        //     scrollTopRef.current.className =
        //       scrollTopRef.current.className.replace(
        //         "hide-scroll-top",
        //         "show-scroll-top"
        //       );
        //   }
        // } else {
        //   if (scrollTopRef.current.className.includes("show-scroll-top")) {
        //     scrollTopRef.current.className =
        //       scrollTopRef.current.className.replace(
        //         "show-scroll-top",
        //         "hide-scroll-top"
        //       );
        //   }
        // }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  const handleClick = (event: any) => {
    const { target } = event;
    if (!filterRef.current.contains(target)) {
      if (
        filterItemRef?.current?.className?.includes(
          "header-search-content-toggle"
        )
      ) {
        setIsShowSearch((prev) => (prev ? !prev : prev));
      }
    }
  };

  return (
    <header ref={stickyRef} className="fixed w-full top-0 left-0 z-20">
      <div className="container flex mx-auto px-5 justify-between items-center">
        <Link href={"/"} className="py-3">
          <Image
            src={"/images/logo.svg"}
            width={155}
            height={58}
            priority
            alt="logo"
          />
        </Link>
        <div className="flex h-[86px] items-center">
          {navname?.map((nav) => {
            return (
              <div
                className="link-header relative flex h-full px-3 items-center text-white no-underline"
                key={nav?.key}
              >
                <Link
                  href={`${nav?.url}`}
                  className="px-3 text-[18px] font-semibold"
                >
                  {nav?.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex gap-10 items-center">
          <div ref={filterRef} className="relative cart-search-contact">
            <button onClick={() => setIsShowSearch(!isShowSearch)}>
              <Image
                src={
                  isShowSearch
                    ? "/images/icon_cancel.svg"
                    : "/images/icon_find.svg"
                }
                width={20}
                height={20}
                priority
                alt="filter"
              />
            </button>
            <div
              ref={filterItemRef}
              className={clsx(
                "header-search-form",
                isShowSearch && "header-search-content-toggle"
              )}
            >
              <form>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here..."
                  />
                </div>
              </form>
            </div>
          </div>
          <button className="theme-btn">Get In Touch</button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
