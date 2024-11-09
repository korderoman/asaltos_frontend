import {JSX} from "react";

export interface VideoPlayerInterface {
    url:string;
}

const VideoPlayer= (props:VideoPlayerInterface):JSX.Element =>{
    return (
        <div>
            <video className={"w-100 video-fixed-height"} controls>
                <source src={props.url} type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
            </video>
        </div>
    );
}
export default VideoPlayer;
