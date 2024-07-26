import FirstVideo from "@/components/FirstVideo";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonailVideo from "@/components/Testimonial_Videos";
import { TestimonialCards } from "@/components/TestimonialCards";
import UpcomimgWebinars from "@/components/UpcomimgWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Accordian from "@/components/Accordian";

export default function Home() {
	return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <HeroSection/>
      <FirstVideo/>
      <TestimonailVideo/>
      {/* <WhyChooseUs/> */}
      {/* <TestimonialCards/> */}
      {/* <UpcomimgWebinars/> */}
      {/* <Instructors/> */}
      <Accordian/>
    </main>
  );
}
