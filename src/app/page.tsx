import { Hero, type HeroPropsType } from "@components/Hero";

const heroProps = {
  title: "The Ultimate <span>eCommerce</span> Business Solution",
  list: ["Simplify online store", "Streamline shipping", "Manage sales & more"],
  button: "Get Started for Free",
  sectionSeparator: "section-separator-big",
} as HeroPropsType;

export default function Home() {
  return (
    <main className="home">
      <Hero {...heroProps} />
    </main>
  );
}
