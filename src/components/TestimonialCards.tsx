"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function TestimonialCards() {
	return (
		<InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
	);
}

const testimonials = [
	{
		id: "dQw4w9WgXcQ",
	},
	{
		id: "2PUiopS8GrQ",
	},
	{
		id: "hGk8LFVp7xk",
	},
];
