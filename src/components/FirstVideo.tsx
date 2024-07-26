import Link from "next/link"
import { Button } from "./ui/moving-border"

const FirstVideo = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center md:py-12 py-5 rounded-full gap-8">
      <iframe 
      id="titleVideo"
      className="rounded-2xl shadow-violet-800 " 
      width="906" 
      height="511" 
      src="https://www.youtube.com/embed/s0pFc2DK1z0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      <div className="mt-4 md:py-16">
					<Link href={"/courses"}>
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