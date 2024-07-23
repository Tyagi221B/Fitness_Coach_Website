"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export function TestimonialCards() {
	return (
		<div className="h-screen w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-around overflow-hidden">
			<div className="px-48 flex flex-col">
				<h1 className="text-center py-4 text-xl">
					Become the most jacked version of yourself by training only 5 hours a
					week without sacrificing sugar, carbs, alcohol or eating out and
					feeling like a superhuman
				</h1>
				<span className="text-center py-4">(TOO GOOD TO BE TRUE?)</span>
			</div>
			
			<div className="flex flex-col justify-center items-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
			<h2 className="text-3xl font-bold text-center mb-8 z-10">
				Our Testimonials: Voices of success
			</h2>
				<div className="w-full max-w-6xl" >
					<InfiniteMovingCards
						items={testimonials}
						direction="right"
						speed="normal"
					/>
				</div>
				<h1 className="mt-4">Or get a refund 100%</h1>
				<div className="mt-8">
				<Link href={"/courses"}>
						<Button
							duration={500}
							borderClassName="bg-red-800 bg-yellow-400 bg-orange-400"
							borderRadius="1.75rem"
							className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
						>
							Join The Tribe -&gt;
						</Button>
					</Link>
				</div>
			</div>

		</div>
	);
}

const testimonials = [
  {
    quote: '"I used to dread working out, but Shyam completely changed my perspective! Their personalized approach and positive energy made fitness fun and rewarding. I finally feel strong and confident!"',
    name: "Sarah Jones",
    title: "Client - Lost 15 lbs and Gained Muscle Tone"
  },
  {
    quote: '"Thanks to Shyam, I achieved my goal of running a marathon! Their expert guidance and training plan kept me motivated and on track. I couldn\'t have done it without them!"',
    name: "David Miller",
    title: "Client - Marathon Runner"
  },
  {
    quote: '"Shyam helped me overcome my limitations and reach fitness levels I never thought possible. Their knowledge of nutrition and exercise science is impressive, and they always challenge me in the best way possible!"',
    name: "Maria Garcia",
    title: "Client - Improved Strength and Flexibility"
  },
  {
    quote: '"I wasn\'t sure if a fitness coach was right for me, but working with Shyam has been life-changing. They create a supportive and encouraging environment, and I\'ve seen amazing results in my overall health and well-being!"',
    name: "Michael Lee",
    title: "Client - Improved Overall Fitness and Health"
  }
];

