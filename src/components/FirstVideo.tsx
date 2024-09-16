const FirstVideo = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center md:pt-12 py-5 rounded-full gap-8">
			<div
				className="relative flex justify-center md:w-[906px] md:h-[511px] w-11/12 h-60 "
			>
				<iframe
					id="titleVideo"
					className="rounded-2xl w-full h-full"
					src="https://www.youtube.com/embed/dQw4w9WgXcQ"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
};

export default FirstVideo;
