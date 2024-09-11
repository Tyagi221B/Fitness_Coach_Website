import Link from "next/link"
import { Button } from "./ui/moving-border"
import { useState } from "react";

const FirstVideo = ({ onVideoClick }: {
    onVideoClick: any;
}) => {
  const [overlay, setOverlay] = useState(true);
  const handleOverlayClick = () => {
    onVideoClick();
    setOverlay(false);
  };
  return (
    <div className="w-full flex flex-col justify-center items-center md:pt-12 py-5 rounded-full gap-8">
      <div 
        className="relative w-full flex justify-center"
        style={{ width: '906px', height: '511px' }}
      >
        <iframe
          id="titleVideo"
          className="rounded-2xl"
          width="906"
          height="511"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        {overlay && (
          <div
            className="absolute top-0 left-0 w-full h-full"
            onClick={handleOverlayClick}
            style={{ cursor: 'pointer', backgroundColor: 'transparent' }}
          ></div>
        )}
      </div>
      <div className="mt-4 md:py-16">
					<Link href={"/login"}>
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
  )
}

export default FirstVideo