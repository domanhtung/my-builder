import { pathnameObj } from "./home";
import { serviceKey } from "./key";

export const servicesContent = [
  {
    name: "Miscellaneous Steel",
    value: 5,
  },
  {
    name: "Stair and Handrail Detailing",
    value: 7,
  },
  {
    name: "Pre Engineered Building",
    value: 3,
  },
  {
    name: "Steel Fabrication Detailing",
    value: 6,
  },
  {
    name: "Joist Detailing",
    value: 2,
  },
  {
    name: "Point Cloud BIM Services",
    value: 8,
  },
  {
    name: "Precast Panel Detailing",
    value: 8,
  },
  {
    name: "Curtain Wall Detailing",
    value: 8,
  },
];

export const projectContents = [
  "/images/project_4.jpg",
  "/images/project_5.jpg",
];

export const serveContents = [
  {
    img: "/images/serve_1.png",
    url: `/${pathnameObj.service}/${serviceKey.shopDrawing}`,
    key: serviceKey.shopDrawing,
    title: "Shop Drawing",
    content:
      "We offer a diverse array of Steel Shop Drawings, encompassing sheet metal, woodwork, and structural drawings. Our comprehensive drawings adhere to fabrication and manufacturing standards, ensuring precise dimensions. Our Structural Shop Drawings provide project managers and installers with detailed blueprints, facilitating reliable project approval.",
  },
  {
    img: "/images/serve_2.png",
    url: `/${pathnameObj.service}/${serviceKey.markingPlans}`,
    key: serviceKey.markingPlans,
    title: "MARKING PLANS",
    content:
      "Our comprehensive steel marking plan meticulously details the positioning of all steel members and includes a clear North point for orientation. Alongside, we provide marking plans for cross-sections of assembled steelwork (typically following a grid pattern), purlin layouts, girt elevations, and even Chemset or Trubolt elevations, ensuring seamless placement wherever necessary.",
  },
  {
    img: "/images/serve_3.png",
    url: `/${pathnameObj.service}/${serviceKey.generalDrawings}`,
    key: serviceKey.generalDrawings,
    title: "General Arrangement drawings",
    content:
      "We provide concise and comprehensive overviews of your project's composition, illustrating how all elements fit together. From initial concepts to detailed depictions, our GA drawings ensure clarity and accuracy at every stage of your design process.",
  },
  {
    img: "/images/serve_4.png",
    url: `/${pathnameObj.service}/${serviceKey.clashPlan}`,
    key: serviceKey.clashPlan,
    title: "Clash Detection on Master plan",
    content:
      "Our service utilizes cutting-edge BIM technology to identify and resolve clashes in your master plan, ensuring seamless coordination and compliance with regulatory standards. We streamline the design process, mitigate risks, and optimize project efficiency, saving you time and costs",
  },
];

export const partners = [
  {
    img: "/images/partner_1.png",
    url: "",
  },
  {
    img: "/images/partner_2.png",
    url: "",
  },
  {
    img: "/images/partner_3.png",
    url: "",
  },
  {
    img: "/images/partner_4.png",
    url: "",
  },
  {
    img: "/images/partner_5.png",
    url: "",
  },
  {
    img: "/images/partner_6.png",
    url: "",
  },
];
