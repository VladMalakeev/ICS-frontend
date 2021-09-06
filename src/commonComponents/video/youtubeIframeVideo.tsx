import React from "react";

type YoutubeIframeVideoType = {
    src:string,
    setRef:(ref:HTMLIFrameElement) => void
}

export default ({src, setRef}:YoutubeIframeVideoType) => {
   return(
       <iframe
            ref={(ref:HTMLIFrameElement) => setRef(ref)}
            src={`${src}/?version=3&enablejsapi=1&playerapiid=ytplayer`}
            title="ICS video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            width="100%"
            height="100%">
        </iframe>
   )
};