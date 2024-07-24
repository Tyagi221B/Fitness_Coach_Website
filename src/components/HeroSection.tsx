"use client";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";

const HeroSection = () => {
	const words =
		"Get Ripped, Stay Sharp, And Party Hard In 12 Weeks- No Sacrifices, Just Results!";
	return (
		<div className="h-auto lg:h-full md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto md:py-10 py-6">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="blue"
			/>
			<div className="md:p-4 relative z-10 w-full text-center flex flex-col h-full justify-center items-center px-8">
				<div className="w-full flex flex-col justify-center items-center md:mt-12" >
					<Image
						src="https://cdn.prod.website-files.com/63e6c1e86653498b2e3849c1/64946fe2d67f626674957ef4_GL%20Logo.svg"
						alt="A descriptive alt text"
						width={200}
						height={300}
					/>
				</div>

				<h1 className="md:mt-0 lg:text-2xl md:text-2xl md:font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 lg:mt-12 mt-8">
					Only for Indian men who want to reach the highest echelons in life.
				</h1>
				<h1 className="md:mt-0 text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-5  md:py-10 text-center ">
					<TextGenerateEffect
						words={words}
						className="md:mt-0 text-[28px] md:text-6xl md:font-extrabold "
					/>
				</h1>

				<p className="font-normal text-xs md:text-lg text-neutral-300 max-w-3xl mx-auto md:py-4 p-2">
				Experience Unparalleled Transformation With An Exclusive Private Community That Helps YOU Build An Aesthetic Physique, Get Insane Mental Clarity And Unlimited Energy!

				</p>
				<div className="mt-4 md:py-16">
					<Link href={"/courses"}>
						<Button
							duration={500}
							borderClassName="bg-red-800 bg-yellow-400 bg-orange-400"
							borderRadius="1.75rem"
							className="bg-white  dark:bg-black text-black dark:text-yellow-300 border-neutral-200 dark:border-slate-800 md:text-xl"
						>
							Join The Tribe -&gt;
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
