import { Banner } from "@components/Banner";

const bannerProps = {
  imageURL: "/images/spiral.png",
  title: "Ready to Elevate Your Fashion Brand?",
  description:
    "Let Aura be the spotlight that illuminates your clothing and accessories, turning shoppers into loyal fans.",
  button: "Setup Your Free Account",
  link: "Schedule a Personalized Demo",
};

export default function Home() {
  return (
    <main className="home">
      <Banner {...bannerProps} />
    </main>
  );
}
