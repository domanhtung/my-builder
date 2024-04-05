"use client";
import Image from "next/image";
import Link from "next/link";
import { navname, pathnameObj } from "../app/constants/home";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { scrollToView } from "@/app/utils";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "@/app/constants/arrow";

const HeaderComponent = () => {
  const router = useRouter();
  const filterRef = useRef<any>();
  const filterItemRef = useRef<any>();
  const stickyRef = useRef<any>();
  const scrollTopRef = useRef<any>();
  const [isShowSearch, setIsShowSearch] = useState<boolean>(false);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

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
        if ((window as any)?.pageYOffset > 400) {
          if (scrollTopRef.current.className.includes("hide-scroll-top")) {
            scrollTopRef.current.className =
              scrollTopRef.current.className.replace(
                "hide-scroll-top",
                "show-scroll-top"
              );
          }
        } else {
          if (scrollTopRef.current.className.includes("show-scroll-top")) {
            scrollTopRef.current.className =
              scrollTopRef.current.className.replace(
                "show-scroll-top",
                "hide-scroll-top"
              );
          }
        }
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

  function scrollToTop() {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <header ref={stickyRef} className="fixed w-full top-0 left-0 z-50">
        <div className="container flex mx-auto px-5 justify-between items-center">
          <div
            className="grid lg:hidden w-[35px] h-[35px] p-[6px] items-center !bg-[#ED4D5D] rounded-[4px]"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            {[...Array(3)]?.map((_, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-[2px] !bg-white rounded-sm"
                />
              );
            })}
          </div>
          <Link href={"https://archibuild.ai"} target="_blank" className="py-3">
            <Image
              src={"/images/logo.png"}
              className="w-[120px] h-[29px] 2xl:w-[166px] 2xl:h-[40px]"
              width={166}
              height={40}
              priority
              alt="logo"
            />
          </Link>
          <div className="hidden lg:flex h-[86px] items-center">
            {navname?.map((nav) => {
              return (
                <>
                  {nav?.list ? (
                    <div className="link-header relative group flex h-full px-1 2xl:px-3 items-center text-white no-underline">
                      <span className="px-1 2xl:px-3 text-[16px] 2xl:text-[18px] font-semibold cursor-pointer">
                        {nav?.name}
                      </span>
                      <div
                        className={clsx(
                          "absolute grid w-[310px] py-5 px-3 top-[86px] left-0 opacity-0 group-hover:opacity-100 gap-5 !bg-white shadow-lg",
                          "duration-300 group-hover:pointer-events-auto pointer-events-none translate-y-5 group-hover:translate-y-0"
                        )}
                      >
                        {nav?.list?.map((value, index) => {
                          return (
                            <Link
                              key={index}
                              href={value.url}
                              className="submenu-nav relative pl-3 !text-[#000B47] text-[14px] xl:text-[16px] font-semibold cursor-pointer"
                            >
                              {value?.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="link-header relative flex h-full px-1 2xl:px-3 items-center text-white no-underline"
                      key={nav?.key}
                      onClick={() => {
                        nav.key !== pathnameObj.contact &&
                          nav.key !== pathnameObj.visualization &&
                          scrollToView(nav.key, router);
                      }}
                    >
                      {nav.key === pathnameObj.contact ||
                      nav.key === pathnameObj.visualization ? (
                        <Link
                          href={`${nav?.url}`}
                          className="px-3 text-[16px] 2xl:text-[18px] font-semibold"
                          target={
                            nav.key === pathnameObj.visualization
                              ? "_blank"
                              : "_self"
                          }
                        >
                          {nav?.name}
                        </Link>
                      ) : (
                        <span className="px-3 text-[16px] 2xl:text-[18px] font-semibold cursor-pointer">
                          {nav?.name}
                        </span>
                      )}
                    </div>
                  )}
                </>
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
            <button
              className="theme-btn hidden lg:block"
              onClick={() => scrollToView("contact", router)}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </header>
      <div
        className={clsx(
          "block lg:hidden fixed h-screen top-0 left-0 bg-[#000b47] z-40 duration-200 overflow-hidden",
          showMobileNav ? "w-screen" : "w-0"
        )}
      >
        <div className="container grid gap-3 mx-auto pt-[100px] px-5">
          {navname?.map((nav) => {
            return (
              <div
                className="relative flex h-full items-center text-white no-underline"
                key={nav?.key}
              >
                {nav?.list ? (
                  <div className="text-[16px] pt-3 group font-semibold">
                    {nav?.name}
                    <div className="hidden group-hover:grid gap-5 mt-5">
                      {nav?.list?.map((value, index) => {
                        return (
                          <Link
                            key={index}
                            href={value.url}
                            className="pl-3 !text-white text-[14px] xl:text-[16px] font-semibold cursor-pointer"
                            onClick={() => setShowMobileNav(false)}
                          >
                            <span className="!text-[#ED4D5D]">{"___"}</span>{" "}
                            {value?.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={`${nav?.url}`}
                    className="text-[16px] pt-3 font-semibold"
                    onClick={() => setShowMobileNav(false)}
                  >
                    {nav?.name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div
        ref={scrollTopRef}
        className="fixed right-2 md:right-10 !z-10 hide-scroll-top duration-500"
      >
        <div
          className="rotate-90 !relative swiper-button"
          onClick={() => scrollToTop()}
        >
          <ArrowLeft />
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
