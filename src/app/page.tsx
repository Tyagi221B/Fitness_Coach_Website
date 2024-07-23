import FeaturedCourses from "@/components/FeaturedCourses";
import FirstVideo from "@/components/FirstVideo";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import { TestimonialCards } from "@/components/TestimonialCards";
import UpcomimgWebinars from "@/components/UpcomimgWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
	return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      {/* <FeaturedCourses/> */}
      <FirstVideo/>
      {/* <WhyChooseUs/> */}
      <TestimonialCards/>
      {/* <UpcomimgWebinars/> */}
      {/* <Instructors/> */}
      <Footer/>
    </main>
  );
}
