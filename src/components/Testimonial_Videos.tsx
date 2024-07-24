import NextVideo from "next-video";
import sample from "../../videos/sample.mp4";

const TestimonailVideo = () => {
	return (
		<div className="md:h-screen flex flex-col items-center md:mt-8 md:px-60 px-8">
			<h1 className="text-center md:py-4 md:text-xl text-xl py-4">
				Become the most jacked version of yourself by training only 5 hours a
				week without sacrificing sugar, carbs, alcohol or eating out and feeling
				like a superhuman.
			</h1>
			<p className="text-center py-4 text-xl font-bold">( TOO GOOD TO BE TRUE? )</p>
			<h2 className="md:text-3xl md:font-bold text-center md:mb-8 md:z-10 text-2xl">
				Our Testimonials: Voices of success
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
