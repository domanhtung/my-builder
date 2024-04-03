import { serviceKey } from "./key";
import { projectKey, projectNameByKey } from "./project";

export const pathnameObj = {
  home: "home",
  Drafting2D: "2d-drafting",
  modeling3D: "3d-modeling",
  visualization: "visualization",
  project: "project",
  contact: "contact",
  aboutUs: "about-us",
  service: "service",
};

export const navname = [
  {
    key: pathnameObj.home,
    url: "/",
    name: "Home",
  },
  {
    key: pathnameObj.aboutUs,
    url: `/${pathnameObj.aboutUs}`,
    name: "About Us",
  },
  {
    key: pathnameObj.service,
    url: `/${pathnameObj.service}`,
    name: "Services",
  },
  {
    key: pathnameObj.project,
    url: `/${pathnameObj.project}`,
    name: "Projects",
    list: [
      {
        key: projectKey.speersPoint,
        url: `/${pathnameObj.project}/${projectKey.speersPoint}`,
        name: projectNameByKey?.[projectKey?.speersPoint],
      },
      {
        key: projectKey.delnorth,
        url: `/${pathnameObj.project}/${projectKey.delnorth}`,
        name: projectNameByKey?.[projectKey?.delnorth],
      },
    ],
  },
  {
    key: pathnameObj.visualization,
    // url: `/${pathnameObj.visualization}`,
    url: "https://docsend.com/view/7ksq5ub4pgtz6pys",
    name: "Visualization",
  },
  {
    key: pathnameObj.contact,
    url: `/${pathnameObj.contact}`,
    name: "Contact",
  },
];

export const serviceContent = [
  {
    img: "/images/services/miscellaneous_steel.png",
    icon: "/images/icon_service_1.svg",
    title: "Miscellaneous Steel",
    content:
      "Our Miscellaneous steel detailing services encompass providing precise information for various services, including rustic ornamental & miscellaneous steel and miscellaneous metalwork.",
  },
  {
    img: "/images/services/stair_and_handrail_detailing.png",
    icon: "/images/icon_service_2.svg",
    title: "Stair and Handrail Detailing",
    content:
      "The diverse array of services comprises metal and concrete rails, stair stringers, ramp rails, wall rails, level handrails, stainless steel staircase railing designs, and more.",
  },
  {
    img: "/images/services/pre_engineered_building.png",
    icon: "/images/icon_service_3.svg",
    title: "Pre Engineered Building",
    content:
      "Our pre-engineered structural design aims for functionality, aesthetics, and cost-effectiveness. Our PEB services encompass PEMB and pre-engineered steel buildings.",
  },
  {
    img: "/images/services/steel_fabrication_detailing.png",
    icon: "/images/icon_service_4.svg",
    title: "Steel Fabrication Detailing",
    content:
      "Our Steel Fabrication Detailing process includes various services such as steel detailing drawings, procedures, structure fabrication, and Tekla fabrication.",
  },
  {
    img: "/images/services/joist_detailing.png",
    icon: "/images/icon_service_1.svg",
    title: "Joist Detailing",
    content:
      "We boast an exceptional in-house team renowned for their expertise and versatility in delivering Joist Detailing services with utmost accuracy and precision.",
  },
  {
    img: "/images/services/bridge_detailing.png",
    icon: "/images/icon_service_2.svg",
    title: "Bridge Detailing",
    content:
      "Our expertise spans various bridge types, from pedestrian to cable-stayed. We've tackled complex plate girder bridges with features like camber, skew, and curve.",
  },
  {
    img: "/images/services/precast_panel_detailing.png",
    icon: "/images/icon_service_3.svg",
    title: "Precast Panel Detailing",
    content:
      "We're the go-to for global precast panel detailing services, covering wall panels, facades, and beyond.",
  },
  {
    img: "/images/services/clash_detection.png",
    icon: "/images/icon_service_4.svg",
    title: "Clash Detection",
    content:
      "Eliminate construction conflicts swiftly with our Clash Detection service, optimizing project efficiency and minimizing costly delays.",
  },
];

export const testimonials = [
  {
    img: "/images/testimonial_1.jpg",
    name: "Hanial nilton jhon",
    job: "Managin dirctor",
    comment:
      "Archibuild's steel detailing service surpassed our expectations. Their precision and professionalism kept our project on track and within budget. Highly recommend their expertise!",
  },
  {
    img: "/images/testimonial_2.jpg",
    name: "Cathi Falcon Ami",
    job: "CEO Barta",
    comment:
      "Thanks to Jodie and team, our project was completed on time and within budget. Highly recommend their reliable steel detailing services.",
  },
  {
    img: "/images/testimonial_3.jpg",
    name: "Jenelia Orkid pasa",
    job: "Fashion Designer",
    comment:
      "Archibuild's attention to detail and responsiveness made our steel detailing process seamless. They're now our go-to for precision work.",
  },
];

export const socials = [
  {
    img: "/images/facebook.svg",
    url: "https://www.facebook.com/archibuildvn",
    name: "facebook",
  },
  {
    img: "/images/facebook.svg",
    url: "https://www.facebook.com/steeldetailingvn",
    name: "facebook",
  },
  {
    img: "/images/linkedin.svg",
    url: "https://www.linkedin.com/company/archibuild-global",
    name: "linkedin",
  },
];

export const footerOurServices = [
  {
    name: "Shop Drawing",
    url: `/${pathnameObj.service}/${serviceKey.shopDrawing}`,
  },
  {
    name: "Marking Plans",
    url: `/${pathnameObj.service}/${serviceKey.markingPlans}`,
  },
  {
    name: "General Agreement Drawings",
    url: `/${pathnameObj.service}/${serviceKey.generalDrawings}`,
  },
  {
    name: "Clash Detection",
    url: `/${pathnameObj.service}/${serviceKey.clashPlan}`,
  },
];
export const footerNavigalion = [
  {
    name: "Home",
    url: "",
  },
  {
    name: "About Us",
    url: "",
  },
  {
    name: "Our services",
    url: "",
  },
  {
    name: "Recent Projects",
    url: "",
  },
  {
    name: "Contact Us",
    url: `/${pathnameObj.contact}`,
  },
];
