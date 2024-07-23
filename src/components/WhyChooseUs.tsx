"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const content = [
	{
		title: "Instrument Exploration",
		description:
			"Discover your musical voice! Explore a variety of instruments through introductory workshops and hands-on learning. Find the perfect instrument to match your interests and musical aspirations.",
		content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] flex items-center justify-center text-white">
				Explore Instruments
			</div>
		),
	},
	{
		title: "Music Theory Fundamentals",
		description:
			"Build a strong foundation in music theory. Learn essential concepts like chords, scales, harmony, and rhythm. Gain the tools to analyze music, compose your own pieces, and improve your overall musicianship.",
		content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--violet-500),var(--indigo-500))] flex items-center justify-center text-white">
				Music Theory Basics
			</div>
		),
	},
	{
		title: "Ear Training and Aural Skills",
		description:
			"Sharpen your musical ear and develop aural skills. Learn to identify intervals, chords, and melodies by ear. Enhance your musical understanding and improve your sight-reading abilities.",
		content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--cyan-500))] flex items-center justify-center text-white">
				Ear Training & Aural Skills
			</div>
		),
	},
	{
		title: "Music Production and Recording",
		description:
			"Turn your musical ideas into reality. Learn the fundamentals of music production and recording techniques. Explore industry-standard software and hardware to create professional-sounding music.",
		content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--purple-500))] flex items-center justify-center text-white">
				Music Production & Recording
			</div>
		),
	},

];

const WhyChooseUs = () => {
	return (
		<div>
			<StickyScroll content={content} />
		</div>
	);
};

export default WhyChooseUs;
