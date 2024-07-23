"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { Meteors } from "@/components/ui/meteors";
import { BottomGradient } from "@/components/BottomGradient";
import { FormEvent } from "react";

const page = () => {

	return (
		<div className="min-h-screen w-screen flex flex-wrap items-center justify-center mt-24">
			{/* Meaty part - Meteor effect */}
			<Meteors number={100}/>
			<div className="flex flex-col items-center gap-8">
				<h2 className="text-white text-7xl">Contact Us</h2>
				<p className="text-gray-400 w-96 text-center">
					We are here with any question about out courses, programs or events.
					React out and let us know how we can assist you in your musical
					journey.
				</p>
				<Input
					id="email"
					name="email"
					type="email"
					placeholder="Your email address"
					className="w-96 h-12 text-center"
				/>
				<Input
					id="message"
					name="message"
					type="text"
					placeholder="Your message"
					className="w-96 h-44 text-center text"
				/>
				<button
					className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] w-fit py-2 px-4"
					type="submit"
          
				>
					Submit &rarr;
					<BottomGradient />
				</button>
			</div>
		</div>
	);
};

export default page;
