import React, { useRef, useEffect } from "react";


const MediaPlayer = ({videoTrack, audioTrack}) => {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;
    videoTrack?.play(container.current);
    return () => {
      videoTrack?.stop();
    };
  }, [container, videoTrack]);

  useEffect(() => {
    audioTrack?.play();
    return () => {
     audioTrack?.stop();
    };
  }, [audioTrack]);
  
  return (
    <div ref={container}  className="video-player" style={{ width: "520px", height: "240px"}}></div>
  );
}

export default MediaPlayer;