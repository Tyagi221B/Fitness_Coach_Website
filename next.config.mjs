import { withNextVideo } from "next-video/process";
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "images.unsplash.com",
			},
			{
				hostname: "images.pexels.com",
			},
		],
	},
};

export default withNextVideo(nextConfig);