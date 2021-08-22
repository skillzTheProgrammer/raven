import React, { useRef, useEffect } from "react";
import { MediaBody } from "./style";
import { MediaDiv } from "./style";


const MediaPlayer = ({videoTrack, audioTrack, userID, user}) => {
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
    <MediaBody>
      <p>{`${user}: (${userID})`}</p>
      <MediaDiv ref={container}></MediaDiv>
    </MediaBody>
  );
}

export default MediaPlayer;