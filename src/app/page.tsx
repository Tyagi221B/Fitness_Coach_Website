"use client";
import FirstVideo from "@/components/FirstVideo";
import HeroSection from "@/components/HeroSection";
import UserInfoSection from "@/components/UserInfo";

export default function Home() {

	return (
		<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
			<HeroSection />
			<FirstVideo/>
			<UserInfoSection/>
		</main>
	);
}
