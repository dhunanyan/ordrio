import {
  BigCardsSection,
  type BigCardsSectionPropsType,
} from "@components/BigCardsSection";
import {
  CarouselSection,
  type CarouselSectionPropsType,
} from "@components/CarouselSection";
import { Hero, type HeroPropsType } from "@components/Hero";
import {
  ImageCardsWithContentSection,
  type ImageCardsWithContentSectionPropsType,
} from "@components/ImageCardsWithContentSection";
import {
  ListSection,
  type ListSectionPropsType,
} from "@components/ListSection";
import {
  PartnersSection,
  type PartnersSectionPropsType,
} from "@components/PartnersSection";
import { Icons } from "@config";

const heroProps = {
  title: "The Ultimate <span>eCommerce</span> Business Solution",
  list: ["Simplify online store", "Streamline shipping", "Manage sales & more"],
  link: { text: "Get Started for Free", href: "#" },
  sectionSeparator: "section-separator-big",
} as HeroPropsType;

const listSectionProps = {
  imageURL: "/images/tiger-painting.png",
  title: "eCommerce Shouldn't Be a Juggling Act",
  list: [
    "At Ordrio, we handle the tech headaches so you can focus on growing your brand",
    "Sell incredible products and manage sales seamlessly",
    "Connect with customers, nurture relationships, and watch your business thrive",
  ],
} as ListSectionPropsType;

const partnersSectionProps = {
  backgroundImageURL: "/images/grey-spiral.png",
  title: "Helping <span>Businesses</span> Thrive",
  partners: [
    {
      imageURL: "/images/logos/chenai-start.png",
      href: "https://chennaistar.com",
      height: 43,
      width: 152,
    },
    {
      imageURL: "/images/logos/tokree.png",
      href: "https://www.quickcompany.in/trademarks/2848950-tokree-no-more-khit-pit",
      height: 66,
      width: 164,
    },
    {
      imageURL: "/images/logos/fib.png",
      href: "https://appagg.com/android/shopping/feel-it-buy-38658831.html",
      height: 60,
      width: 90,
    },
    {
      imageURL: "/images/logos/country.png",
      href: "https://www.countrychickenco.in",
      height: 58,
      width: 88,
    },
    {
      imageURL: "/images/logos/shree-baba.png",
      href: "https://www.instagram.com/shreebabaramdevdhaba",
      height: 48,
      width: 202,
    },
  ],
  quotes: [
    {
      quote:
        "“Ordrio has transformed the way we do business. The platform is incredibly user-friendly, and the customer support is outstanding. We saw a significant increase in sales within the first month!”",
      author: "<span>John D.</span> - Small Business Owner",
    },
    {
      quote:
        "“Ordrio has transformed the way we do business. The platform is incredibly user-friendly, and the customer support is outstanding. We saw a significant increase in sales within the first month!”",
      author: "<span>John D.</span> - Small Business Owner",
    },
  ],
} as PartnersSectionPropsType;

const imageCardsWithContentSectionProps = {
  backgroundImageURL: "/images/yellow-brush.png",
  title: "No More Tool Juggling",
  description:
    "One powerful platform for eCommerce, shipping, and payments - everything working together seamlessly",
  link: { text: "Find Out More", href: "#" },
  cards: [
    {
      title: "Add your first product",
      description:
        "Add first product with price. Photos and It's description that you want to sell",
      imageURL: "/images/tiger-boxes-card.png",
    },
    {
      title: "Set up payments",
      description:
        "Revolutionize your payment experience with Ordrio swipe feature ",
      imageURL: "/images/credit-cards-card.png",
    },
    {
      title: "Other Store details",
      description: "Add store information, including store name and store type",
      imageURL: "/images/papers-card.png",
    },
    {
      title: "Customize Your Store",
      description:
        "Unleash the Power of Personalization with Our Store Customization Options!",
      imageURL: "/images/tiger-painting-card.png",
    },
    {
      title: "Add delivery location",
      description:
        "Configure pickup address, delivery type, and delivery charge",
      imageURL: "/images/tiger-backpack-card.png",
    },
  ],
} as ImageCardsWithContentSectionPropsType;

const bigCardsSectionProps = {
  bigCards: [
    {
      imageURL: "/images/ordrio-ship.png",
      title: "Ordrio Ship",
      description:
        "Tired of shipping feeling like a second job? Enjoy stress-free, integrated shipping solutions with Ordrio.",
      backgroundColor: "#f6eece",
    },
    {
      imageURL: "/images/100-plush-add-ons.png",
      title: "<span>100+</span> Add-ons",
      description:
        "Boost your store's potential with the perfect add-ons for marketing, analytics, and more.",
      link: { text: "View Detail's", href: "#" },
      backgroundColor: "#f4f4f4",
    },
  ],
  content: {
    topLinks: [
      { text: "Website", href: "#" },
      { text: "Mobile App", href: "#" },
    ],
    title: "Seamless Mobile Shopping",
    description:
      "Deliver a smooth shopping experience for your customers on any device.",
    bottomLinks: [
      { text: "google-play", href: "#" },
      { text: "app-store", href: "#" },
    ],
  },
  screenshotURL: "/images/screenshot-landing.png",
} as BigCardsSectionPropsType;

const carouselSectionProps = {
  title: "Themes & Customization",
  subtitle: "Ordrio adapts to every business's needs. ",
  description:
    "Whether you're launching a restaurant, boutique, or tech store, we offer stunning templates tailored to you. Customize easily to match your brand and start selling!",
  buttons: [
    { text: `${Icons["arrow-left"]}` },
    { text: `${Icons["arrow-right"]}` },
  ],
  imageURLs: [
    "/images/landing-theme-0.png",
    "/images/landing-theme-1.png",
    "/images/landing-theme-2.png",
    "/images/landing-theme-3.png",
  ],
} as CarouselSectionPropsType;

export default function Home() {
  return (
    <main>
      <Hero {...heroProps} />
      <ListSection {...listSectionProps} />
      <PartnersSection {...partnersSectionProps} />
      <ImageCardsWithContentSection {...imageCardsWithContentSectionProps} />
      <BigCardsSection {...bigCardsSectionProps} />
      <CarouselSection {...carouselSectionProps} />
    </main>
  );
}
