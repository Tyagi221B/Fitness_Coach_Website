import React from "react";

const Section2 = () => {
	const words = "Has This Happened To You Before?";
	return (
		<div className="h-full">
			<div className="">
				<h1 className="md:mt-0 lg:text-5xl md:text-2xl md:font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 lg:mt-12 mt-8 text-center">
					Has This Happened To You Before?
				</h1>
			</div>
			<div className=" flex flex-col px-72">
				<section className="bg-black p-8 rounded-lg mb-4 ">
					<div className="space-y-4">
						<div className="flex items-center bg-black border border-gray-200 p-4 rounded-lg">
							<div className="text-2xl mr-4">💪</div>
							<p>
								Hired an over-priced trainer and trained aggressively for hours
								daily.
							</p>
						</div>
						<div className="flex items-center bg-black border border-gray-200 p-4 rounded-lg">
							<div className="text-2xl mr-4">🥗</div>
							<p>
								Followed a tedious, tasteless meal plan: no eating out, no
								booze, no fun.
							</p>
						</div>
						<div className="flex items-center bg-black border border-gray-200 p-4 rounded-lg">
							<div className="text-2xl mr-4">💸</div>
							<p>
								Splurged on supplements and wasted time cooking elaborate meals.
							</p>
						</div>
					</div>
				</section>

        <div className="">
				<h1 className="md:mt-0 lg:text-5xl md:text-2xl md:font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 lg:mt-12 mt-8 text-center">
					But, Ended up with
				</h1>
			</div>

				<section className="bg-black p-8 rounded-lg mb-4">
					<div className="space-y-4">
						<div className="flex items-center border border-gray-200 p-4 rounded-lg">
							<div className="text-2xl mr-4">😩</div>
							<p>
								Feeling like a “____” with brain fog and fatigue affecting your
								social, work, and personal life.
							</p>
						</div>
						<div className="flex items-center border border-gray-200 p-4 rounded-lg">
							<div className="text-2xl mr-4">💤</div>
							<p>Disrupted sleep patterns and waking up feeling exhausted.</p>
						</div>
						<div className="flex items-center bg-black-50 border border-gray-200 p-4 rounded-lg">
							<div className="text-2xl mr-4">⚡</div>
							<p>Low testosterone levels, decreased libido, and drive.</p>
						</div>
						<div className="flex items-center bg-black-50 border border-gray-200 p-4 rounded-lg">
							<div className="text-2xl mr-4">💪</div>
							<p>Crashed metabolism, gut issues, and digestive problems.</p>
						</div>
						<div className="flex items-center border border-gray-200 p-4 rounded-lg">
							<div className="text-2xl mr-4">👴</div>
							<p>Poor hair quality and receding hairline.</p>
						</div>
						<div className="flex items-center border border-gray-200 p-4 rounded-lg">
							<div className="text-2xl mr-4">👕</div>
							<p>Looking weaker and smaller in your outfits.</p>
						</div>
						<div className="flex items-center border border-gray-200 p-4 rounded-lg">
							<div className="text-2xl mr-4">😞</div>
							<p>Feeling more insecure than when you began.</p>
						</div>
						<div className="flex items-center  border border-gray-200 p-4 rounded-lg">
							<div className="text-2xl mr-4">🦵</div>
							<p>Sore and hurting joints.</p>
						</div>
						<div className="flex items-center border border-gray-200 p-4 rounded-lg">
							<div className="text-2xl mr-4">⏱️</div>
							<p>Spending too much time in the gym and not enjoying life.</p>
						</div>
						<div className="flex items-center border border-gray-200 p-4 rounded-lg">
							<div className="text-2xl mr-4">🎉</div>
							<p>
								Feeling like an outcast at parties, not eating what you want.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Section2;
