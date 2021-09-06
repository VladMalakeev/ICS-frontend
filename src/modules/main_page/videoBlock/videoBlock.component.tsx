import React, {useState, useRef, ReactElement} from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation,Thumbs } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"

import { 
    VideoBlock, 
    VideoBlockSwiper,
    VideoBlockSwiperComtainer
} from "./videoBlock.styles";

import YoutubeIframeVideo from "../../../commonComponents/video/youtubeIframeVideo";
import HTML5Video from "../../../commonComponents/video/html5Video";

SwiperCore.use([Navigation,Thumbs]);
    
export const MainPageVideoBlock = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const iframeRefList = useRef<HTMLIFrameElement[]>([]);
    const videoRefList = useRef<HTMLVideoElement[]>([]);
    const canvasRef = useRef<HTMLCanvasElement |null>(null);
    const getYoutubeThumbnaiSrc = (videoId:string):string => `http://img.youtube.com/vi/${videoId}/0.jpg`;

    const swiperParams = {
        preloadImages: false,
        loop: true,
        spaceBetween: 30,
        navigation:true,
        thumbs:{ swiper: thumbsSwiper }
    };

    const thumbsParams = {
        slidesPerView:6,
        grabCursor:true,
        freeMode:true,
        watchSlidesVisibility:true,
        watchSlidesProgress:true,
        spaceBetween: 5,
        touchRatio: 0.2,
        slideToClickedSlide: true,
       // slideClass:"swiperWrap",
        breakpoints: {
            1600:{ slidesPerView: 7},
            1366:{ slidesPerView: 6},
            1024:{ slidesPerView: 5},
            768:{ slidesPerView: 4},
            568:{ slidesPerView: 3},
            320:{slidesPerView: 2}

        }
    };

    type srcListType = {
        src:string,
        type:string
    }
    const srcList:srcListType[] = [
        {src:"https://www.youtube.com/embed/BOCXDPLc-EE", type:"YOUTUBE"},
        {src:"https://www.youtube.com/embed/2r4expht2Jc", type:"YOUTUBE"},
        {src:"https://www.youtube.com/embed/fv490oCQ9hw", type:"YOUTUBE"},
        {src:"https://www.youtube.com/embed/JYS8QxwrPY0", type:"YOUTUBE"},
        {src:"https://www.w3schools.com/html/mov_bbb.mp4#t=1", type:"HTML5"}
    ];

    const stopVideos = () => {
        videoRefList.current.forEach((element:HTMLVideoElement) => element?.pause());
        iframeRefList.current.forEach((element:HTMLIFrameElement) => element?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'))
    };

    const setIframeRef = (ref:HTMLIFrameElement) => {
        iframeRefList.current.push(ref)
    };

    const setVideoRef = (ref:HTMLVideoElement) => {
        videoRefList.current.push(ref);
        ref?.addEventListener('loadeddata', () => {
            const ctx = canvasRef.current?.getContext("2d");
            ctx?.drawImage(ref,0,0)
        });
    };

    const Videos = srcList.map((video:srcListType, index:number) => {
        return (
            <SwiperSlide key={index}>
                <VideoBlockSwiperComtainer>
                    {video.type === "YOUTUBE" && <YoutubeIframeVideo src={video.src} setRef={setIframeRef}/>}
                    {video.type === "HTML5" && <HTML5Video src={video.src} setRef={setVideoRef}/>}
                </VideoBlockSwiperComtainer>
            </SwiperSlide>
        )
    });

    const Thumbnails = srcList.map((video:srcListType, index:number) => {
        let urlElements:string[] = video.type === "YOUTUBE" ? video.src.split("/"): [""];
        return (
            <SwiperSlide key={index}>
                {video.type === "YOUTUBE" && <img src={getYoutubeThumbnaiSrc(urlElements[urlElements.length-1])} width="100%" height="auto" alt="youtube"/>}
                {video.type === "HTML5" &&
                    <div style={{width:"100%", height:"100%"}}>
                        <canvas ref={(ref:HTMLCanvasElement) => canvasRef.current = ref}  style={{width:"100%", height:"100%"}} />
                    </div>
                }
            </SwiperSlide>
            )  
    });

    return (
        <VideoBlock>
            <VideoBlockSwiper>
                <Swiper {...swiperParams} onSlideChange={stopVideos}>
                    {Videos}
                </Swiper>

                <Swiper {...thumbsParams} onSwiper={(swiper:any)=>setThumbsSwiper(swiper)}>
                   {Thumbnails}
                </Swiper>

            </VideoBlockSwiper>
        </VideoBlock>
    )
};