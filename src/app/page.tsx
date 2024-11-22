import { Hero, type HeroPropsType } from "@components/Hero";
import {
  ListSection,
  type ListSectionPropsType,
} from "@components/ListSection";

const heroProps = {
  title: "The Ultimate <span>eCommerce</span> Business Solution",
  list: ["Simplify online store", "Streamline shipping", "Manage sales & more"],
  button: { text: "Get Started for Free", href: "#" },
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

export default function Home() {
  return (
    <main className="home">
      <Hero {...heroProps} />
      <ListSection {...listSectionProps} />
    </main>
  );
}
