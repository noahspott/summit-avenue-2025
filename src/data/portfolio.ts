// Logos
import thebenderzLogo from "@/assets/images/portfolio/logos/the-benderz-logo.svg";
import adartistryLogo from "@/assets/images/portfolio/logos/ad-artistry-logo.svg";
import sfhLogo from "@/assets/images/portfolio/logos/sfh-logo.png";

// Mockups
import thebenderzMockupMobile from "@/assets/images/portfolio/mockups/thebenderz-website-mockup-mobile.png";
import thebenderzMockupDesktop from "@/assets/images/portfolio/mockups/thebenderz-website-mockup-desktop.png";
import adartistryMockupMobile from "@/assets/images/portfolio/mockups/adartistry-website-mockup-mobile.png";
import adartistryMockupDesktop from "@/assets/images/portfolio/mockups/adartistry-website-mockup-desktop.png";
import sfhMockupMobile from "@/assets/images/portfolio/mockups/sfh-website-mockup-mobile.png";
import sfhMockupDesktop from "@/assets/images/portfolio/mockups/sfh-website-mockup-desktop.png";

// URLs
const thebenderzUrl = "https://thebenderz.com/";
const adartistryUrl = "https://adartistryco.com/";
const sfhUrl = "https://wearesfh.com/";

export {
  thebenderzLogo,
  thebenderzMockupMobile,
  thebenderzMockupDesktop,
  thebenderzUrl,
  adartistryLogo,
  adartistryMockupMobile,
  adartistryMockupDesktop,
  adartistryUrl,
  sfhLogo,
  sfhMockupMobile,
  sfhMockupDesktop,
  sfhUrl,
};

export const work = [
  {
    logo: {
      src: thebenderzLogo,
      alt: "Logo for Philadelphia professional cover band, The Benderz",
    },
    heading: ["Philadelphia Cover Band", "Website Design and Development"],
    body: "The Benderz wanted a fresh website to showcase their event schedule and attract more wedding and private event bookings. We built a fast, modern Astro web app with a headless CMS, making it easy for the band to update their calendar and connect with fans and clients.",
    mockupImages: {
      mobile: { src: thebenderzMockupMobile, alt: "" },
      desktop: { src: thebenderzMockupDesktop, alt: "" },
    },
    href: thebenderzUrl,
    className:
      "bg-linear-320 lg:bg-linear-45 from-[#ffffff] from-75% to-[#0A8A71]",
  },
  {
    logo: {
      src: adartistryLogo,
      alt: "Logo for Hair and Makeup Artist, AD Artistry",
    },
    heading: [
      "Wedding Hair and Makeup Artist",
      "Website Design and Development",
    ],
    body: "AD Artistry needed a modern, elegant website to attract bridal clients and showcase their beauty services. We created a clean, visually refined design tailored to the expectations of brides booking hair and makeup for their big day. The result is a site that feels both luxurious and approachable, helping the brand stand out in a competitive local market.",
    mockupImages: {
      mobile: { src: adartistryMockupMobile, alt: "" },
      desktop: { src: adartistryMockupDesktop, alt: "" },
    },
    href: adartistryUrl,
    className:
      "bg-linear-320 lg:bg-linear-45 from-[#ffffff] from-75% to-[#C69E7A]",
  },
  {
    logo: { src: sfhLogo, alt: "Logo for apparel brand, SFH" },
    heading: ["Apparel / Lifestyle Brand", "Website Design and Development"],
    body: "SFH needed a fresh website design to showcase their apparel and provide sponsors with a simple way to purchase event tickets. We designed and developed a custom site that integrates directly with the Square API, delivering a clean, responsive experience for both shoppers and sponsors.",
    mockupImages: {
      mobile: { src: sfhMockupMobile, alt: "" },
      desktop: { src: sfhMockupDesktop, alt: "" },
    },
    href: sfhUrl,
    className:
      "bg-linear-320 lg:bg-linear-45 from-[#ffffff] from-75% to-[#000000]",
  },
];
