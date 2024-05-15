import video from "../../../assets/video.mp4"

const Video = () => {
    return (
        <div>

            <div  className="w-full h-full flex justify-center items-center">
                <video className="rounded-lg" src={video} autoPlay  muted loop playsInline></video>
            </div>

        </div>
    );
};

export default Video;
