import NextVideo from "next-video"
import sample from "../../videos/sample.mp4"
import Testimonial_Videos from "./Testimonial_Videos"

const FirstVideo = () => {
  return (
    <div className="w-full flex justify-center items-center md:py-24 py-5">
      <NextVideo className="md:max-w-screen-md w-full px-6" src={sample}/>
      <Testimonial_Videos/>
    </div>
  )
}

export default FirstVideo