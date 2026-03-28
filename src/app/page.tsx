import HomeHero from "@/components/home/HomeHero";
import StatsStrip from "@/components/home/StatsStrip";
import ServiceShowcase from "@/components/home/ServiceShowcase";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WorkGallery from "@/components/home/WorkGallery";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import ParallaxBreak from "@/components/home/ParallaxBreak";
import ServiceAreas from "@/components/home/ServiceAreas";
import CtaBanner from "@/components/home/CtaBanner";
import LeadCollector from "@/components/home/LeadCollector";

export default function Home() {
  return (
    <>
      <HomeHero />
      <StatsStrip />
      <ServiceShowcase />
      <BeforeAfterSlider />
      <WhyChooseUs />
      <WorkGallery />
      <ProcessTimeline />
      <ParallaxBreak />
      <ServiceAreas />
      <CtaBanner />
      <LeadCollector />
    </>
  );
}
