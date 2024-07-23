import NextVideo from "next-video"
import sample from "../../videos/sample.mp4"

const FirstVideo = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <NextVideo className="max-w-screen-md" src={sample}/>
    </div>
  )
}

export default FirstVideo