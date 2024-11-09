import {JSX} from "react";

export interface VideoPlayerInterface {
    url:string;
}

const VideoPlayer= (props:VideoPlayerInterface):JSX.Element =>{
    return (
        <div>
            <video width="640" height="360" controls>
                <source src={props.url} type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
            </video>
        </div>
    );
}
export default VideoPlayer;
