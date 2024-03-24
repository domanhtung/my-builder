import AboutUs from "@/components/about";
import Banner from "@/components/banner";
import HomeContact from "@/components/contact";
import Projects from "@/components/project";
import ServeComponent from "@/components/serve";
import HomeService from "@/components/service";
import Testimonial from "@/components/testimonial";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <main>
      <Banner />
      <AboutUs />
      <HomeService />
      <ServeComponent />
      <Testimonial />
      <Projects />
      <HomeContact />
    </main>
  );
}
