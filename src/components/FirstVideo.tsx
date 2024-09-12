const FirstVideo = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center md:pt-12 py-5 rounded-full gap-8">
			<div
				className="relative flex justify-center md:w-[906px] md:h-[511px] w-80 h-60 "
				// style={{ width: "906px", height: "511px" }}
			>
				<iframe
					id="titleVideo"
					className="rounded-2xl w-full h-full"
					// width="906"
					// height="511"
					src="https://www.youtube.com/embed/dQw4w9WgXcQ"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				></iframe>
				<div
					className="absolute top-0 left-0 w-full h-full"
					style={{ cursor: "pointer", backgroundColor: "transparent" }}
				></div>
			</div>
		</div>
	);
};

export default FirstVideo;
