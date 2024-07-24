import NextVideo from "next-video";
import sample from "../../videos/sample.mp4";

const TestimonailVideo = () => {
	return (
		<div className="md:h-screen flex flex-col items-center md:mt-8 md:px-60 px-8">
			<h1 className="text-center md:py-4 text-xl py-4 md:mt-0 lg:text-2xl md:text-2xl md:font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 lg:mt-12 mt-8">
				Become The Most Jacked Version Of Yourself By Training Only 5 Hours A
				Week Without Sacrificing Sugar, Carbs, Alcohol Or Eating Out And Feeling
				Like A Superhuman.
			</h1>
			<p className="text-center py-4 text-xl font-bold">( TOO GOOD TO BE TRUE? )</p>
			<h2 className="md:text-3xl md:font-bold text-center md:mb-8 md:z-10 text-2xl mt-8">
				Our Testimonials: Voices Of Success
			</h2>
			<div className="video-container">
				<div className="row-1 md:flex md:flex-row md:gap-8 flex flex-col gap-8 py-8">
					<div className="col-1">
						<NextVideo className="" src={sample} />
					</div>
					<div className="col-2">
						<NextVideo className="" src={sample} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonailVideo;
