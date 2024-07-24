import NextVideo from "next-video"
import sample from "../../videos/sample.mp4"
import motivation from "../../videos/motivation_1.mp4"


const FirstVideo = () => {
  return (
    <div className="w-full flex justify-center items-center md:py-24 py-5 ">
      <NextVideo className="md:max-w-screen-md w-full px-6 shadow-[0_2px_800px_rgba(0,_1,_255,_0.3)]" src={motivation}/>
      <h1 className="text-[rgb(0,1,255)] font-extrabold"></h1>
    </div>
  )
}

export default FirstVideo