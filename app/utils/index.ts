import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const scrollToView = (id: string, router?: AppRouterInstance) => {
  if (typeof document !== "undefined") {
    const element = document?.getElementById(id);
    if (element?.scrollIntoView) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      router && router?.push("/");
    }
  }
};
