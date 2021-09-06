import React, {ReactElement} from "react";

type HTML5VideoType = {
    src:string,
    setRef:(ref:HTMLVideoElement) => void
}

export default ({src, setRef}:HTML5VideoType): ReactElement => {
    return (
        <video
            style={{width:"100%", height:"100%"}}
            ref={(ref:HTMLVideoElement) => setRef(ref)}
            controls
        >
            <source src={src}/>
        </video>
    )
};