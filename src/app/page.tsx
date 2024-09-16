"use client";
import FirstVideo from "@/components/FirstVideo";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import UserInfoSection from "@/components/UserInfo";

export default function Home() {

	return (
		<main className="min-h-screen bg-black/[0.96] antialiased ">
			<HeroSection />
			<FirstVideo/>
			<UserInfoSection/>
			<Footer />
		</main>
	);
}
