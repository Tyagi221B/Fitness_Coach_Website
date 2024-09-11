"use client";

import { useState } from "react";
import FirstVideo from "@/components/FirstVideo";
import HeroSection from "@/components/HeroSection";
import TestimonialVideo from "@/components/Testimonial_Videos";
import Accordian from "@/components/Accordian";
import Section2 from "@/components/Section2";

export default function Home() {
	const [isVideoClicked, setIsVideoClicked] = useState(true);

	const handleVideoClick = () => {
		setTimeout(() => {
			setIsVideoClicked(true);
		}, 1);
	};

	return (
		<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
			<HeroSection />
			<FirstVideo onVideoClick={handleVideoClick} />
			{isVideoClicked && (
				<>
					<Section2 />
					<TestimonialVideo />
				</>
			)}
			<Accordian />
		</main>
	);
}
