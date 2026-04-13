import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import ForPhotographers from "@/components/ForPhotographers";
import BattleTested from "@/components/BattleTested";
import FeatureRequest from "@/components/FeatureRequest";
import Download from "@/components/Download";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <ForPhotographers />
      <BattleTested />
      <FeatureRequest />
      <Download />
      <TechStack />
    </>
  );
}
